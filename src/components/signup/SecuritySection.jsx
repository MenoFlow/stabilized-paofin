// src/components/signup/SecuritySection.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function SecuritySection({ formData, handleChange }) {
  const { language } = useLanguage();

  return (
    <div className="form-section">
      <div className="section-title">
        <span>🔒</span>
        <span>{language === 'fr' ? 'Sécurité du compte' : 'Fiarovana ny kaonty'}</span>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Mot de passe' : 'Teny miafina'}
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Confirmer le mot de passe' : 'Hamafy ny teny miafina'}
          </label>
          <input
            type="password"
            className="form-input"
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>
      </div>
    </div>
  );
}

export default SecuritySection;