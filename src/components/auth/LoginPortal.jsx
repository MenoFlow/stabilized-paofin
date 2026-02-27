// src/components/LoginPortal.jsx
import React, { useState, useEffect } from 'react';
import LanguageToggle from '../common/LanguageToggle';
import LoginForm from './LoginForm';
import ClientSignup from './ClientSignup';
import { clientSection } from '../../mockData/loginData';
import { Link } from 'react-router-dom';
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
      ? `✅ Connexion réussie !\n\nBienvenue ${user.roleName.fr}\nRedirection vers votre tableau de bord...`
      : `✅ Fidirana nahomby !\n\nTonga soa eto ${user.roleName.mg}\nAlefa any amin'ny tontonana...`;
    
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
    <div className="login-page"> {/* Ajout de la classe */}
    <div className="login-container">
      <LanguageToggle 
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />

      <div className="header-portal">
        <div className="logo">
          <img 
            src="../mobile/assets/images/Logo_paofin.png.png" 
            alt="PAOFIN" 
            onError={(e) => e.target.style.display = 'none'}
          />
          <div>
            <h1 className="title">
              {language === 'fr' ? 'VINA Platform' : 'Sehatra VINA'}
            </h1>
            <p className="subtitle">
              {language === 'fr' 
                ? 'Portail de Connexion Sécurisé' 
                : 'Vavahadin\'ny Fidirana Azo Antoka'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="login-single">
        <LoginForm 
          language={language}
          onLoginSuccess={handleLoginSuccess}
        />
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