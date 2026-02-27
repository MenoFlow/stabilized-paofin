// src/components/common/LanguageToggle.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => toggleLanguage('fr')}
      >
        FR
      </button>
      <button 
        className={`lang-btn ${language === 'mg' ? 'active' : ''}`}
        onClick={() => toggleLanguage('mg')}
      >
        MG
      </button>
    </div>
  );
}

export default LanguageToggle;