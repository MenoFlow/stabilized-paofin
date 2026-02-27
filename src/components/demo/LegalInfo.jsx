// src/components/demo/LegalInfo.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoContent } from '../../mockData/demoData';
import '../../styles/demo/DemoPage.css';

function LegalInfo() {
  const { language } = useLanguage();

  return (
    <div className="demo-legal-info">
      <h3>{demoContent.legalInfo.title[language]}</h3>
      <ul>
        {demoContent.legalInfo.items.map((item, index) => (
          <li key={index}>{item[language]}</li>
        ))}
      </ul>
    </div>
  );
}

export default LegalInfo;