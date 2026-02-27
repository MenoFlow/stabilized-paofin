// src/components/dg/DGDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext'; // On garde useLanguage
import Header from '../common/Header';
import LanguageToggle from '../common/LanguageToggle';
import ExecutiveSummary from './ExecutiveSummary';
import PerformanceChart from './PerformanceChart';
import ExecutiveAlerts from './ExecutiveAlerts';
import StrategicObjectives from './StrategicObjectives';
import RiskAnalysis from './RiskAnalysis';
import DepartmentPerformance from './DepartmentPerformance';
import FinancialSummary from './FinancialSummary';
import RecommendedActions from './RecommendedActions';
import {
  executiveSummary,
  performanceData,
  executiveAlerts,
  strategicObjectives,
  riskAnalysis,
  departmentPerformance,
  financialSummary,
  recommendedActions,
  userInfo
} from '../../mockData/dgData';
import '../../styles/dg/DGDashboard.css';

function DGDashboard() {
  const { language } = useLanguage(); // On garde language
  const [alerts, setAlerts] = useState(executiveAlerts);

  useEffect(() => {
    // Simulation de mise à jour temps réel
    const interval = setInterval(() => {
      if (Math.random() > 0.98) {
        const newAlert = {
          type: 'critical',
          icon: '■',
          title: { 
            fr: 'Alerte Critique', 
            mg: 'Fampitandrehana Lehibe' 
          },
          description: { 
            fr: 'Seuil d\'alerte dépassé - Action immédiate requise',
            mg: 'Mihoatra ny fetra - Hetsika haingana ilaina'
          }
        };
        setAlerts(prev => [newAlert, ...prev]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animation des métriques au chargement
    const animateMetrics = () => {
      const summaryNumbers = document.querySelectorAll('.summary-number');
      summaryNumbers.forEach(number => {
        const finalValue = number.textContent;
        number.textContent = '0';
        setTimeout(() => {
          number.textContent = finalValue;
        }, Math.random() * 1000 + 500);
      });
    };

    setTimeout(animateMetrics, 300);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const handleObjectiveClick = (title) => {
    const message = language === 'fr' 
      ? `Détails de l'objectif: ${title.fr}`
      : `Antsipirihan'ny tanjona: ${title.mg}`;
    alert(message);
  };

  return (
    <>
      <LanguageToggle />
      
      <Header 
        user={{
          ...userInfo,
          name: userInfo.name,
          role: userInfo.role[language]
        }} 
        onLogout={handleLogout} 
      />

      <div className="container">
        {/* Plus besoin de passer language en prop, les composants utilisent useLanguage */}
        <ExecutiveSummary data={executiveSummary} />

        <div className="dashboard-grid">
          <PerformanceChart data={performanceData} />
          <ExecutiveAlerts alerts={alerts} />

          <StrategicObjectives 
            objectives={strategicObjectives} 
            onObjectiveClick={handleObjectiveClick}
          />
          
          <RiskAnalysis data={riskAnalysis} />

          <DepartmentPerformance departments={departmentPerformance} />

          <FinancialSummary data={financialSummary} />
          <RecommendedActions actions={recommendedActions} />
        </div>
      </div>
    </>
  );
}

export default DGDashboard;