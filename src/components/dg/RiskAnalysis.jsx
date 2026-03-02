// src/components/dg/RiskAnalysis.jsx
import React from 'react';
import { Scale } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

function RiskAnalysis({ data }) {
  const { language } = useLanguage();

  const getRiskClass = (status) => {
    switch(status) {
      case 'low': return 'risk-low';
      case 'medium': return 'risk-medium';
      case 'high': return 'risk-high';
      default: return `risk-${status}`;
    }
  };

  const getProgressClass = (status) => {
    switch(status) {
      case 'warning': return 'progress-fill warning';
      case 'excellent': return 'progress-fill excellent';
      case 'danger': return 'progress-fill danger';
      default: return 'progress-fill';
    }
  };

  const title = {
    fr: "Analyse des Risques",
    mg: "Fanadihadiana ny Loza"
  };

  const globalRiskLabel = {
    fr: "Niveau de Risque Global",
    mg: "Ambaratonga Loza Ankapobeny"
  };

  return (
    <div className="card">
      <h3><Scale className="inline-icon" size={20} /> {title[language]}</h3>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4>{globalRiskLabel[language]}</h4>
        <div className={`risk-indicator ${getRiskClass(data.global.status)}`}>
          {data.global.level[language]} - {data.global.description[language]}
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <strong>{data.credit.name[language]}:</strong>
        <div className="progress-bar" style={{ width: '100%' }}>
          <div className={getProgressClass(data.credit.status)} style={{ width: `${data.credit.value}%` }}></div>
        </div>
        <small>{data.credit.detail[language]}</small>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <strong>{data.liquidity.name[language]}:</strong>
        <div className="progress-bar" style={{ width: '100%' }}>
          <div className={getProgressClass(data.liquidity.status)} style={{ width: `${data.liquidity.value}%` }}></div>
        </div>
        <small>{data.liquidity.detail[language]}</small>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <strong>{data.operational.name[language]}:</strong>
        <div className="progress-bar" style={{ width: '100%' }}>
          <div className={getProgressClass(data.operational.status)} style={{ width: `${data.operational.value}%` }}></div>
        </div>
        <small>{data.operational.detail[language]}</small>
      </div>

      <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px' }}>
        <strong>{language === 'fr' ? 'Recommandation:' : 'Soso-kevitra:'}</strong><br />
        <small>{data.recommendation[language]}</small>
      </div>
    </div>
  );
}

export default RiskAnalysis;