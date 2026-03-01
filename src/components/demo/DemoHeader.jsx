// src/components/demo/DemoHeader.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import logoPaositra from '../../assets/logo-paositra.png';
import LucideIcon from '../common/LucideIcon';
import '../../styles/demo/DemoPage.css';

function DemoHeader({ onLanguageToggle, user }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="demo-header">
      <div className="demo-header-left">
        <div className="demo-logo-section">
          <img 
            src={logoPaositra} 
            alt="PAOSITRA Logo" 
            className="demo-logo-img"
          />
        </div>
      </div>
      <div className="demo-header-right">
        <button className="demo-language-toggle" onClick={onLanguageToggle || toggleLanguage}>
          {language === 'fr' ? 'FR | MG' : 'MG | FR'}
        </button>
        <div className="demo-profile-btn">
          <LucideIcon name={user.avatar} size={20} />
        </div>
      </div>
    </div>
  );
}

export default DemoHeader;