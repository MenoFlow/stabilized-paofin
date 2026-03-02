import React, { useEffect } from 'react';
import LanguageToggle from '../common/LanguageToggle';
import LoginForm from './LoginForm';
import { clientSection } from '../../mockData/loginData';
import { translations } from '../../mockData/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import logoPaositra from '../../assets/logo-paositra.png';
import '../../styles/auth/LoginPortal.css';

function LoginPortal() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language === 'mg' ? 'mg' : 'fr';
  }, [language]);

  const handleLoginSuccess = (user) => {
    // Message de bienvenue personnalisé
    const welcomeMessage = language === 'fr'
      ? `Connexion réussie !\n\nBienvenue ${user.roleName.fr}\nRedirection vers votre tableau de bord...`
      : `Fidirana nahomby !\n\nTonga soa eto ${user.roleName.mg}\nAlefa any amin'ny tontonana...`;
    
    alert(welcomeMessage);
    
    // Redirection vers le dashboard spécifique à l'utilisateur
    let targetDashboard = user.dashboard;
    if (language === 'mg') {
      targetDashboard = targetDashboard.replace('.html', '-mg.html');
    }
    
    // Simulation de redirection (à remplacer par votre logique de routage)
    console.log(`Redirection vers: ${targetDashboard} pour ${user.role}`);
    window.location.href = targetDashboard;
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="header-portal">
          <div className="logo">
            <img 
              src={logoPaositra} 
              alt="PAOSITRA Logo" 
              className="header-logo"
            />
          </div>
          
          <LanguageToggle />
        </div>

        <div className="login-content">
          <div className="login-unified-card">
            <div className="welcome-section">
              <img 
                src={logo} 
                alt="PAOFIN Logo" 
                className="logo-large"
              />
              <h2 className="welcome-title">{translations.loginPortal.welcomeTitle[language]}</h2>
              <h3 className="welcome-subtitle">
                {translations.loginPortal.welcomeSubtitle[language]}
              </h3>
            </div>

            <div className="login-single">
              <LoginForm 
                onLoginSuccess={handleLoginSuccess}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPortal;