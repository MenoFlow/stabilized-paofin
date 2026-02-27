// src/components/operations/OperationalStats.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function OperationalStats({ stats }) {
  const { language } = useLanguage();

  const getCardClass = (type) => {
    switch(type) {
      case 'danger': return 'stat-card alert-card';
      case 'warning': return 'stat-card warning-card';
      default: return 'stat-card';
    }
  };

  return (
    <div className="stats-grid">
      <div className={getCardClass()}>
        <div className="stat-number">{stats.creditsActifs.value}</div>
        <div className="stat-label">{stats.creditsActifs.label[language]}</div>
      </div>
      <div className={getCardClass(stats.echeancesJ3.type)}>
        <div className="stat-number">{stats.echeancesJ3.value}</div>
        <div className="stat-label">{stats.echeancesJ3.label[language]}</div>
      </div>
      <div className={getCardClass(stats.retardsPaiement.type)}>
        <div className="stat-number">{stats.retardsPaiement.value}</div>
        <div className="stat-label">{stats.retardsPaiement.label[language]}</div>
      </div>
      <div className={getCardClass()}>
        <div className="stat-number">{stats.encoursTotal.value}</div>
        <div className="stat-label">{stats.encoursTotal.label[language]}</div>
      </div>
      <div className={getCardClass()}>
        <div className="stat-number">{stats.tauxRecouvrement.value}</div>
        <div className="stat-label">{stats.tauxRecouvrement.label[language]}</div>
      </div>
    </div>
  );
}

export default OperationalStats;