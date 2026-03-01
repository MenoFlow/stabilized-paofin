// src/components/demo/HealthScoreSection.jsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { demoTranslations } from '../../mockData/demoTranslations';
import '../../styles/demo/DemoPage.css';

function HealthScoreSection({ 
  healthScore,
  debtRatio,
  rav,
  getHealthColor,
  getArrowPosition,
  formatAmount
}) {
  const { language } = useLanguage();
  const t = demoTranslations;

  const arrowLeft = getArrowPosition();

  return (
    <div className="demo-score-section">
      <div className="demo-gauge-container">
        <div className="demo-score-label">
          {t.healthScore.title[language]}
        </div>
        <div className="demo-health-score" style={{ color: getHealthColor() }}>
          {Math.round(healthScore)}
        </div>
        <div className="demo-health-bar-container">
          <div className="demo-health-bar">
            <div 
              className="demo-health-arrow" 
              style={{ left: `${arrowLeft}px` }}
            ></div>
          </div>
          <div className="demo-health-labels">
            {t.healthScore.labels.map((label, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: label[language] }} />
            ))}
          </div>
        </div>
        <p>{t.healthScore.capacityLabel[language]}</p>
        <p className="demo-debt-ratio-display">
          {t.healthScore.debtLabel[language]} : {debtRatio.toFixed(1)}%
        </p>
        {rav < 500000 && (
          <p style={{ color: '#e74c3c', fontSize: '12px', marginTop: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AlertTriangle size={14} />
            {language === 'fr' 
              ? 'Reste à vivre insuffisant'
              : 'Tsy ampy ny vola sisa'
            }
          </p>
        )}
      </div>
    </div>
  );
}

export default HealthScoreSection;