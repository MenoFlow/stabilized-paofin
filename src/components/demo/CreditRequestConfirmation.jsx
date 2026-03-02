// src/components/demo/CreditRequestConfirmation.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoTranslations } from '../../mockData/demoTranslations';
import '../../styles/demo/CreditRequestConfirmation.css';

function CreditRequestConfirmation({ show, onConfirm, onCancel }) {
  const { language } = useLanguage();
  const t = demoTranslations.confirmationPopup;

  if (!show) return null;

  return (
    <div className="confirmation-overlay" onClick={onCancel}>
      <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="confirmation-icon">✓</div>
        
        <h2 className="confirmation-title">
          {t.title[language]}
        </h2>

        <p className="confirmation-message">
          {t.message[language]}
        </p>

        <div className="confirmation-buttons">
          <button className="confirmation-btn cancel-btn" onClick={onCancel}>
            {t.noBtn[language]}
          </button>
          <button className="confirmation-btn confirm-btn" onClick={onConfirm}>
            {t.yesBtn[language]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditRequestConfirmation;
