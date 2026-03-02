// src/components/demo/DemoHeader.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LucideIcon from '../../components/common/LucideIcon';
import logoPaositra from '../../assets/logo-paositra.png';
import '../../styles/demo/DemoPage.css';

function DemoHeader({ user }) {
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <div className="demo-header">
      <div className="demo-header-left">
        <div className="demo-logo-section">
          <img 
            src={logoPaositra} 
            alt="PAOSITRA" 
            className="demo-logo-paositra"
          />
        </div>
      </div>
      <div className="demo-header-right">
        {/* Bouton Retour au Login */}
        <button 
          className="demo-back-to-login"
          onClick={handleBackToLogin}
          title={language === 'fr' ? 'Retour à la page de connexion' : 'Miverina any amin\'ny pejy fidirana'}
        >
          <span className="demo-back-icon">←</span>
          <span className="demo-back-text">
            {language === 'fr' ? 'Login' : 'Hiditra'}
          </span>
        </button>

        {/* Toggle de langue avec deux boutons séparés */}
        <div className="demo-language-toggle-container">
          <button 
            className={`demo-language-toggle ${language === 'fr' ? 'active' : ''}`}
            onClick={() => toggleLanguage('fr')}
          >
            FR
          </button>
          <button 
            className={`demo-language-toggle ${language === 'mg' ? 'active' : ''}`}
            onClick={() => toggleLanguage('mg')}
          >
            MG
          </button>
        </div>

        {/* Profil avec LucideIcon */}
        <div className="demo-profile-btn">
          <LucideIcon name={user.avatar} size={20} />
        </div>
      </div>
    </div>
  );
}

export default DemoHeader;