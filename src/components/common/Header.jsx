// src/components/common/Header.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import logoPaositra from '../../assets/logo-paositra.png';
import LucideIcon from './LucideIcon';
import LanguageToggle from './LanguageToggle';

function Header({ user, onLogout, dashboardTitle }) {
  const { language } = useLanguage();

  const translations = {
    logout: { fr: 'Déconnexion', mg: 'Hivoaka' }
  };

  return (
    <div className="header">
      <div className="logo">
        <img 
          src={logoPaositra} 
          alt="PAOSITRA Logo" 
          className="header-logo-img"
        />
        <div>
          <h2>VINA</h2>
          <p>{dashboardTitle ? dashboardTitle[language] : 'Dashboard'}</p>
        </div>
      </div>
      <div className="user-info">
        <LanguageToggle />
        <span>
          <LucideIcon name={user.avatar} size={18} className="inline-icon" /> {user.name} ({user.role})
        </span>
        <button className="btn" onClick={onLogout}>{translations.logout[language]}</button>
      </div>
    </div>
  );
}

export default Header;