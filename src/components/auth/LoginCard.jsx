// src/components/LoginCard.jsx
import React, { useState } from 'react';
import { translations } from '../../mockData/translations';

function LoginCard({ card, language, onLogin }) {
  const [isLogging, setIsLogging] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogging(true);
    
    // Simuler la connexion
    setTimeout(() => {
      setIsLogging(false);
      onLogin(card.id);
    }, 1500);
  };

  return (
    <div className="login-card">
      <div className="login-icon">{card.icon}</div>
      <div className="login-title">{card.title[language]}</div>
      <div className="login-description">{card.description[language]}</div>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            {translations.common.username[language]}
          </label>
          <input 
            type="text" 
            className="form-input" 
            placeholder={card.placeholder}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={isLogging}
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
            disabled={isLogging}
          />
        </div>
        
        <button 
          type="submit" 
          className="login-btn"
          disabled={isLogging}
        >
          {isLogging 
            ? translations.common.loggingIn[language]
            : translations.common.login[language]
          }
        </button>
        
        <div className="forgot-password">
          <a href="#">
            {translations.common.forgotPassword[language]}
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginCard;