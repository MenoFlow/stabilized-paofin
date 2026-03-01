// src/components/demo/BottomNavigation.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoTranslations } from '../../mockData/demoTranslations';
import '../../styles/demo/DemoPage.css';

function BottomNavigation() {
  const { language } = useLanguage();
  const t = demoTranslations;
  
  const icons = ["$", "■", "●", "@"];

  return (
    <div className="demo-bottom-navigation">
      {t.bottomNav.map((item, index) => (
        <div key={index} className={`demo-nav-item ${index === 0 ? 'active' : ''}`}>
          <div className="demo-nav-icon">{icons[index]}</div>
          <span>{item[language]}</span>
        </div>
      ))}
    </div>
  );
}

export default BottomNavigation;