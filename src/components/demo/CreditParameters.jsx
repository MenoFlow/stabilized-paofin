// src/components/demo/CreditParameters.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoContent } from '../../mockData/demoData';
import '../../styles/demo/DemoPage.css';

function CreditParameters({ 
  amount, 
  duration,
  amountDisplay,
  durationDisplay,
  onAmountChange, 
  onDurationChange,
  onQuickAmount,
  productLimits
}) {
  const { language } = useLanguage();

  return (
    <div className="demo-marketplace-section">
      <h2>{demoContent.creditParameters.title[language]}</h2>

      <div className="demo-slider-section">
        <div className="demo-slider-label">
          <span>{demoContent.creditParameters.amountLabel[language]}</span>
          <span className="demo-slider-value">{amountDisplay}</span>
        </div>
        <input
          type="range"
          className="demo-slider"
          min="100000"
          max={productLimits.maxAmount}
          value={amount}
          step="100000"
          onChange={(e) => onAmountChange(e.target.value)}
        />
        <div className="demo-quick-amounts">
          {demoContent.creditParameters.quickAmounts.map((item, index) => (
            <button
              key={index}
              className={`demo-quick-amount ${amount === item.value ? 'selected' : ''}`}
              onClick={() => onQuickAmount(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-slider-section">
        <div className="demo-slider-label">
          <span>{demoContent.creditParameters.durationLabel[language]}</span>
          <span className="demo-slider-value">{durationDisplay}</span>
        </div>
        <input
          type="range"
          className="demo-slider"
          min="6"
          max={productLimits.maxDuration}
          value={duration}
          onChange={(e) => onDurationChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default CreditParameters;