// src/components/marketing/MarketingDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../common/Header';
import LanguageToggle from '../common/LanguageToggle';
import MarketingStats from './MarketingStats';
import ConversionFunnel from './ConversionFunnel';
import AcquisitionChannels from './AcquisitionChannels';
import ProductPerformance from './ProductPerformance';
import ActiveCampaigns from './ActiveCampaigns';
import InsightsRecommendations from './InsightsRecommendations';
import {
  marketingStats,
  conversionFunnel,
  acquisitionChannels,
  productPerformance,
  activeCampaigns,
  insights,
  userInfo
} from '../../mockData/marketingData';
import '../../styles/marketing/MarketingDashboard.css';

function MarketingDashboard() {
  const { language } = useLanguage();
  const [stats, setStats] = useState(marketingStats);

  useEffect(() => {
    // Simulation de mise à jour des données marketing
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => {
          if (Math.random() > 0.9) { // 10% de chance de mise à jour
            const currentValue = parseFloat(stat.value.replace(/[^\d.]/g, ''));
            const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
            const newValue = currentValue * (1 + variation);

            if (stat.value.includes('%')) {
              return { ...stat, value: newValue.toFixed(1) + '%' };
            } else if (stat.value.includes('Ar')) {
              return { ...stat, value: Math.round(newValue).toLocaleString() + ' Ar' };
            } else {
              return { ...stat, value: Math.round(newValue).toLocaleString() };
            }
          }
          return stat;
        })
      );
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animation des barres de progression
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('.progress-fill');
      progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    };

    setTimeout(animateProgressBars, 500);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  return (
    <>
      <LanguageToggle />
      
      <Header 
        user={{
          name: userInfo.name,
          role: userInfo.role[language],
          avatar: userInfo.avatar
        }}
        onLogout={handleLogout}
      />

      <div className="container">
        <MarketingStats stats={stats} />

        <div className="dashboard-grid">
          <ConversionFunnel funnel={conversionFunnel} />
          <AcquisitionChannels channels={acquisitionChannels} />
          <ProductPerformance products={productPerformance} />
          <ActiveCampaigns campaigns={activeCampaigns} />
          <InsightsRecommendations insights={insights} />
        </div>
      </div>
    </>
  );
}

export default MarketingDashboard;