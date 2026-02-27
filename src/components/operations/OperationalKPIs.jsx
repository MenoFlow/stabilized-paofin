// src/components/operations/OperationalKPIs.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function OperationalKPIs({ kpis }) {
  const { language } = useLanguage();

  const getProgressClass = (type) => {
    switch(type) {
      case 'danger': return 'progress-fill danger';
      case 'warning': return 'progress-fill warning';
      default: return 'progress-fill';
    }
  };

  return (
    <div className="card">
      <h3>▶ {language === 'fr' ? 'Indicateurs Opérationnels' : 'Tondro Asa'}</h3>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span>{kpis.tauxRecouvrement.label[language]}</span>
          <span><strong>{kpis.tauxRecouvrement.value}%</strong></span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${kpis.tauxRecouvrement.value}%` }}></div>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span>{kpis.retards30jours.label[language]}</span>
          <span><strong>{kpis.retards30jours.value}%</strong></span>
        </div>
        <div className="progress-bar">
          <div className={getProgressClass(kpis.retards30jours.type)} style={{ width: `${kpis.retards30jours.value}%` }}></div>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span>{kpis.utilisationEncours.label[language]}</span>
          <span><strong>{kpis.utilisationEncours.value}%</strong></span>
        </div>
        <div className="progress-bar">
          <div className={getProgressClass(kpis.utilisationEncours.type)} style={{ width: `${kpis.utilisationEncours.value}%` }}></div>
        </div>
      </div>

      <div className="kpi-grid">
        <div className="kpi-item">
          <div className="kpi-value">{kpis.delaiTraitement.value}</div>
          <div className="kpi-label">{kpis.delaiTraitement.label[language]}</div>
        </div>
        <div className="kpi-item">
          <div className="kpi-value">{kpis.slaRespecte.value}</div>
          <div className="kpi-label">{kpis.slaRespecte.label[language]}</div>
        </div>
        <div className="kpi-item">
          <div className="kpi-value">{kpis.nouveauxCredits.value}</div>
          <div className="kpi-label">{kpis.nouveauxCredits.label[language]}</div>
        </div>
      </div>
    </div>
  );
}

export default OperationalKPIs;