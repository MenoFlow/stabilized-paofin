// src/components/marketing/InsightsRecommendations.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function InsightsRecommendations({ insights }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>▶ {language === 'fr' ? 'Insights & Recommandations' : 'Hevitra sy soso-kevitra'}</h3>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4>● {language === 'fr' ? 'Opportunités Identifiées' : 'Fahafahana hita'}</h4>
        <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
          {insights.opportunities.map((opportunity, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {opportunity[language]}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4>▲ {language === 'fr' ? 'Prédictions' : 'Vinavina'}</h4>
        <div style={{ background: '#f0f8ff', padding: '1rem', borderRadius: '8px', marginTop: '0.5rem' }}>
          <div style={{ fontWeight: 'bold', color: '#003399' }}>{insights.prediction.month[language]}</div>
          <div style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
            {insights.prediction.nouveauxClients[language]}<br />
            {insights.prediction.volume[language]}
          </div>
        </div>
      </div>

      <div className="kpi-grid">
        {insights.kpis.map((kpi, index) => (
          <div key={index} className="kpi-item">
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-label">{kpi.label[language]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsightsRecommendations;