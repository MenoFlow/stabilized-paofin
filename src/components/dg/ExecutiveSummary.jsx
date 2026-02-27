// src/components/dg/ExecutiveSummary.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function ExecutiveSummary({ data }) {
  const { language } = useLanguage();

  return (
    <div className="executive-summary">
      <div className="summary-card">
        <div className="summary-number">{data.encoursTotal.value}</div>
        <div className="summary-label">{data.encoursTotal.label[language]}</div> {/* Accès à la bonne langue */}
        <div className={`summary-trend ${data.encoursTotal.positive ? 'trend-positive' : 'trend-negative'}`}>
          ↗ {data.encoursTotal.trend}
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-number">{data.creditsActifs.value}</div>
        <div className="summary-label">{data.creditsActifs.label[language]}</div>
        <div className={`summary-trend ${data.creditsActifs.positive ? 'trend-positive' : 'trend-negative'}`}>
          ↗ {data.creditsActifs.trend}
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-number">{data.tauxRecouvrement.value}</div>
        <div className="summary-label">{data.tauxRecouvrement.label[language]}</div>
        <div className={`summary-trend ${data.tauxRecouvrement.positive ? 'trend-positive' : 'trend-negative'}`}>
          ↗ {data.tauxRecouvrement.trend}
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-number">{data.tauxConversion.value}</div>
        <div className="summary-label">{data.tauxConversion.label[language]}</div>
        <div className={`summary-trend ${data.tauxConversion.positive ? 'trend-positive' : 'trend-negative'}`}>
          ↗ {data.tauxConversion.trend}
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-number">{data.roiMarketing.value}</div>
        <div className="summary-label">{data.roiMarketing.label[language]}</div>
        <div className={`summary-trend ${data.roiMarketing.positive ? 'trend-positive' : 'trend-negative'}`}>
          ↗ {data.roiMarketing.trend}
        </div>
      </div>
    </div>
  );
}

export default ExecutiveSummary;