// src/components/demo/HealthScoreSection.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoContent } from '../../mockData/demoData';
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

  return (
    <div className="demo-score-section">
      <div className="demo-gauge-container">
        <div className="demo-score-label">
          {demoContent.healthScore.title[language]}
        </div>
        <div className="demo-health-score" style={{ color: getHealthColor() }}>
          {Math.round(healthScore)}
        </div>
        <div className="demo-health-bar-container">
          <div className="demo-health-bar">
            <div 
              className="demo-health-arrow" 
              style={{ left: `${getArrowPosition()}px` }}
            ></div>
          </div>
          <div className="demo-health-labels">
            {demoContent.healthScore.labels.map((label, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: label[language] }} />
            ))}
          </div>
        </div>
        <p>{demoContent.healthScore.capacityLabel[language]}</p>
        <p className="demo-debt-ratio-display">
          {demoContent.healthScore.debtLabel[language]} : {debtRatio.toFixed(1)}%
        </p>
      </div>
    </div>
  );
}

export default HealthScoreSection;