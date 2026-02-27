// src/components/demo/QualificationPopup.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoContent } from '../../mockData/demoData';
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

  if (!show) return null;

  return (
    <div className="demo-qualification-popup">
      <div className="demo-popup-content">
        <div className="demo-popup-title">{demoContent.qualificationPopup.title[language]}</div>
        <div className="demo-popup-subtitle">{demoContent.qualificationPopup.subtitle[language]}</div>

        <div className="demo-popup-input-group">
          <label>{demoContent.qualificationPopup.otherLoansLabel[language]}</label>
          <input
            type="number"
            value={otherLoans}
            onChange={(e) => onOtherLoansChange(parseInt(e.target.value) || 0)}
            placeholder="Ex: 500000"
          />
        </div>

        <div className="demo-popup-input-group">
          <label>{demoContent.qualificationPopup.guaranteeLabel[language]}</label>
          <select value={guarantee} onChange={(e) => onGuaranteeChange(e.target.value)}>
            {demoContent.qualificationPopup.guarantees.map((g, index) => (
              <option key={index} value={g.value}>{g.label[language]}</option>
            ))}
          </select>
        </div>

        <div className="demo-popup-buttons">
          <button className="demo-popup-btn secondary" onClick={onClose}>
            {demoContent.qualificationPopup.cancelBtn[language]}
          </button>
          <button className="demo-popup-btn primary" onClick={onSubmit}>
            {demoContent.qualificationPopup.confirmBtn[language]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QualificationPopup;