// src/components/signup/BenefitsSection.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function BenefitsSection({ content }) {
  const { language } = useLanguage();

  return (
    <div className="benefits-section">
      <div className="benefits-title">
        {content.title[language]}
      </div>
      <ul className="benefits-list">
        {content.list.map((item, index) => (
          <li key={index}>{item[language]}</li>
        ))}
      </ul>
    </div>
  );
}

export default BenefitsSection;