// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { mockUsers } from '../../mockData/users';
import { translations } from '../../mockData/translations';

function LoginForm() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const user = mockUsers.find(
        u => (u.email === email || u.username === email) && u.password === password
      );

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        const welcomeMessage = language === 'fr'
          ? `Connexion réussie !\n\nBienvenue ${user.roleName.fr}`
          : `Fidirana nahomby !\n\nTonga soa eto ${user.roleName.mg}`;
        
        alert(welcomeMessage);
        
        // Redirection vers le dashboard (sans suffixe -mg)
        navigate(user.dashboard);
      } else {
        setError(
          language === 'fr' 
            ? 'Email ou mot de passe incorrect'
            : 'Diso ny mailaka na ny teny miafina'
        );
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleDemoClick = (user) => {
    setEmail(user.email);
    setPassword(user.password);
  };

  return (
    <div className="login-card unique-form">
      <div className="login-title">
        {language === 'fr' ? 'Connexion Sécurisée' : 'Fidirana Azo Antoka'}
      </div>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            {translations.common.username[language]}
          </label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="email@paofin.mg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">
            {translations.common.password[language]}
          </label>
          <input 
            type="password" 
            className="form-input" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <button 
          type="submit" 
          className="login-btn"
          disabled={isLoading}
        >
          {isLoading 
            ? translations.common.loggingIn[language]
            : translations.common.login[language]
          }
        </button>
        
        <div className="forgot-password">
          <a href="#">
            {translations.common.forgotPassword[language]}
          </a>
        </div>

        <div className="demo-section">
          <button 
            type="button"
            className="demo-toggle"
            onClick={() => setShowDemo(!showDemo)}
          >
            {language === 'fr' ? 'Comptes de démo' : 'Kaonty demo'}
          </button>
          
          {showDemo && (
            <div className="demo-accounts">
              <p className="demo-note">
                {language === 'fr' 
                  ? 'Cliquez sur un compte pour le remplir automatiquement :'
                  : 'Tsindrio ny kaonty iray mba hamenoana azy ho azy :'
                }
              </p>
              <div className="demo-grid">
                {mockUsers.map((user) => (
                  <button
                    key={user.id}
                    type="button"
                    className="demo-account-btn"
                    onClick={() => handleDemoClick(user)}
                  >
                    <span className="demo-role">{user.roleName[language]}</span>
                    <span className="demo-email">{user.email}</span>
                    <span className="demo-password">••••••••</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;