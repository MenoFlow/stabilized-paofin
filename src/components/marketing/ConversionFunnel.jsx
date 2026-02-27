// src/components/marketing/ConversionFunnel.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function ConversionFunnel({ funnel }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>● {language === 'fr' ? 'Funnel de Conversion' : 'Fandaharam-piovana'}</h3>
      <div className="funnel-chart">
        {funnel.steps.map((step, index) => (
          <div key={index} className="funnel-step">
            <div className="funnel-label">{step.label[language]}</div>
            <div className="funnel-value">{step.count.toLocaleString()} ({step.percentage}%)</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1rem', padding: '1rem', background: '#e8f5e8', borderRadius: '8px' }}>
        <strong>
          {language === 'fr' ? 'Taux de conversion global: ' : 'Tahan\'ny fiovana ankapobeny: '}
          {funnel.globalConversion}
        </strong>
        <br />
        <small>
          {language === 'fr' ? 'Objectif mensuel: ' : 'Tanjona isam-bolana: '}
          {funnel.objectifMensuel} | {language === 'fr' ? 'Écart: ' : 'Elanelana: '}
          {funnel.ecart}
        </small>
      </div>
    </div>
  );
}

export default ConversionFunnel;