// src/components/demo/DemoHeader.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/demo/DemoPage.css';

function DemoHeader({ onLanguageToggle, user }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="demo-header">
      <div className="demo-header-left">
        <div className="demo-logo-section">
          <img 
            src="./mobile/assets/images/Logo_paofin.png.png" 
            alt="PAOFIN" 
            className="demo-logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="demo-logo" style={{ display: 'none' }}>P</div>
        </div>
      </div>
      <div className="demo-header-right">
        <button className="demo-language-toggle" onClick={onLanguageToggle || toggleLanguage}>
          {language === 'fr' ? 'FR | MG' : 'MG | FR'}
        </button>
        <div className="demo-profile-btn">
          <span>{user.avatar}</span>
        </div>
      </div>
    </div>
  );
}

export default DemoHeader;