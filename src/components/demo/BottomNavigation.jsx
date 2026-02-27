// src/components/demo/BottomNavigation.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoContent } from '../../mockData/demoData';
import '../../styles/demo/DemoPage.css';

function BottomNavigation() {
  const { language } = useLanguage();

  return (
    <div className="demo-bottom-navigation">
      {demoContent.bottomNav.map((item, index) => (
        <div key={index} className={`demo-nav-item ${item.active ? 'active' : ''}`}>
          <div className="demo-nav-icon">{item.icon}</div>
          <span>{item.label[language]}</span>
        </div>
      ))}
    </div>
  );
}

export default BottomNavigation;