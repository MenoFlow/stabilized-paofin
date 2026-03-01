import React, { useState, useEffect } from 'react';
import LanguageToggle from '../common/LanguageToggle';
import LoginForm from './LoginForm';
import ClientSignup from './ClientSignup';
import { clientSection } from '../../mockData/loginData';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import '../../styles/auth/LoginPortal.css';

function LoginPortal() {
  const [language, setLanguage] = useState('fr');
  const [loginError, setLoginError] = useState('');

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
            <div>
              <h1 className="title">
                {language === 'fr' ? 'VINA Platform' : 'Sehatra VINA'}
              </h1>
              <p className="subtitle">
                {language === 'fr' 
                  ? 'Portail de Connexion' 
                  : 'Vavahadin\'ny Fidirana'
                }
              </p>
            </div>
          </div>
          
          <LanguageToggle 
            currentLanguage={language}
            onLanguageChange={setLanguage}
          />
        </div>

        <div className="login-content">
          <div className="welcome-section">
            <img 
              src={logo} 
              alt="PAOFIN Logo" 
              className="logo-large"
            />
            <h2 className="welcome-title">Tongasoa</h2>
            <h3 className="welcome-subtitle">
              {language === 'fr' 
                ? 'Ianao paré, vinanao tratra e' 
                : 'Ianao paré, vinanao tratra e'
              }
            </h3>
          </div>

          <div className="login-single">
            <LoginForm 
              language={language}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        </div>

        <ClientSignup 
          data={clientSection}
          language={language}
        />
      </div>
    </div>
  );
}

export default LoginPortal;