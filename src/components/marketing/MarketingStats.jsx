// src/components/marketing/MarketingStats.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function MarketingStats({ stats }) {
  const { language } = useLanguage();

  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card">
          <div className="stat-number">{stat.value}</div>
          <div className="stat-label">{stat.label[language]}</div>
          <div className={stat.trendUp ? 'trend-up' : 'trend-down'}>
            {stat.trendUp ? '↗' : '↘'} {stat.trend}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarketingStats;