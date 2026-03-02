// src/components/signup/ProfessionalSection.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { professionOptions } from '../../mockData/signupData';

function ProfessionalSection({ formData, handleChange }) {
  const { language } = useLanguage();

  return (
    <div className="form-section">
      <div className="section-title">
        <Briefcase className="section-icon" size={20} />
        <span>{language === 'fr' ? 'Informations professionnelles' : 'Mombamomba arak\'asa'}</span>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Profession' : 'Asa'}
          </label>
          <select
            className="form-select"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
          >
            {professionOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label[language]}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Revenus mensuels (Ar)' : 'Vola miditra isam-bolana (Ar)'}
          </label>
          <input
            type="number"
            className="form-input"
            name="monthlyIncome"
            placeholder={language === 'fr' ? 'Ex: 2000000' : 'Ohatra: 2000000'}
            value={formData.monthlyIncome}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          {language === 'fr' ? 'Employeur / Entreprise' : 'Mpampiasa / Orinasa'}
        </label>
        <input
          type="text"
          className="form-input"
          name="employer"
          placeholder={language === 'fr' ? 'Ex: Société ABC' : 'Ohatra: Orinasa ABC'}
          value={formData.employer}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}

export default ProfessionalSection;