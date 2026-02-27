// src/components/commercial/QuickStats.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function QuickStats({ stats }) {
  const { language } = useLanguage();

  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card">
          <div className="stat-number">{stat.value}</div>
          <div className="stat-label">{stat.label[language]}</div>
        </div>
      ))}
    </div>
  );
}

export default QuickStats;