// src/components/demo/LegalInfo.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoTranslations } from '../../mockData/demoTranslations';
import '../../styles/demo/DemoPage.css';

function LegalInfo() {
  const { language } = useLanguage();
  const t = demoTranslations;

  return (
    <div className="demo-legal-info">
      <h3>{t.legalInfo.title[language]}</h3>
      <ul>
        {t.legalInfo.items.map((item, index) => (
          <li key={index}>{item[language]}</li>
        ))}
      </ul>
    </div>
  );
}

export default LegalInfo;