// src/components/demo/QualificationPopup.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoTranslations } from '../../mockData/demoTranslations';
import '../../styles/demo/DemoPage.css';

function QualificationPopup({ 
  show, 
  otherLoans, 
  guarantee, 
  onOtherLoansChange, 
  onGuaranteeChange,
  onClose, 
  onSubmit 
}) {
  const { language } = useLanguage();
  const t = demoTranslations;

  if (!show) return null;

  return (
    <div className="demo-qualification-popup">
      <div className="demo-popup-content">
        <div className="demo-popup-title">{t.qualificationPopup.title[language]}</div>
        <div className="demo-popup-subtitle">{t.qualificationPopup.subtitle[language]}</div>

        <div className="demo-popup-input-group">
          <label>{t.qualificationPopup.otherLoansLabel[language]}</label>
          <input
            type="number"
            value={otherLoans}
            onChange={(e) => onOtherLoansChange(parseInt(e.target.value) || 0)}
            placeholder="Ex: 500000"
          />
        </div>

        <div className="demo-popup-input-group">
          <label>{t.qualificationPopup.guaranteeLabel[language]}</label>
          <select value={guarantee} onChange={(e) => onGuaranteeChange(e.target.value)}>
            <option value="salary">{t.qualificationPopup.guarantees.salary[language]}</option>
            <option value="material">{t.qualificationPopup.guarantees.material[language]}</option>
            <option value="property">{t.qualificationPopup.guarantees.property[language]}</option>
          </select>
        </div>

        <div className="demo-popup-buttons">
          <button className="demo-popup-btn secondary" onClick={onClose}>
            {t.qualificationPopup.cancelBtn[language]}
          </button>
          <button className="demo-popup-btn primary" onClick={onSubmit}>
            {t.qualificationPopup.confirmBtn[language]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QualificationPopup;