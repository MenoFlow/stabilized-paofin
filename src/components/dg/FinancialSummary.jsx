// src/components/dg/FinancialSummary.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function FinancialSummary({ data }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>💰 Résumé Financier</h3>
      <div className="financial-summary">
        <div className="financial-item">
          <div className="financial-amount">{data.monthly.amount}</div>
          <div className="financial-label">{data.monthly.label[language]}</div>
          <div className={`financial-change ${data.monthly.positive ? 'trend-positive' : 'trend-negative'}`}>
            ↗ {data.monthly.trend}
          </div>
        </div>
        <div className="financial-item">
          <div className="financial-amount">{data.total.amount}</div>
          <div className="financial-label">{data.total.label[language]}</div>
          <div className={`financial-change ${data.total.positive ? 'trend-positive' : 'trend-negative'}`}>
            ↗ {data.total.trend}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f0f8ff', borderRadius: '8px' }}>
        <h4>{data.forecast.title[language]}</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
          {data.forecast.metrics.map((metric, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', color: '#003399' }}>{metric.value}</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>{metric.label[language]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FinancialSummary;