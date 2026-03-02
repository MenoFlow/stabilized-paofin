// src/components/signup/PersonalInfoSection.jsx
import React from 'react';
import { User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { genderOptions } from '../../mockData/signupData';

function PersonalInfoSection({ formData, handleChange }) {
  const { language } = useLanguage();

  return (
    <div className="form-section">
      <div className="section-title">
        <User className="section-icon" size={20} />
        <span>{language === 'fr' ? 'Informations personnelles' : 'Mombamomba ahy'}</span>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Prénom' : 'Fanampin\'Anarana'}
          </label>
          <input
            type="text"
            className="form-input"
            name="firstName"
            placeholder={language === 'fr' ? 'Ex: Rakoto' : 'Ohatra: Rakoto'}
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Nom' : 'Anarana'}
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            placeholder={language === 'fr' ? 'Ex: Hery' : 'Ohatra: Hery'}
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Date de naissance' : 'Daty nahaterahana'}
          </label>
          <input
            type="date"
            className="form-input"
            name="birthDate"
            placeholder={language === 'fr' ? 'jj/mm/aaaa' : 'jj/mm/aaaa'}
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Sexe' : 'Lahy / Vavy'}
          </label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            {genderOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label[language]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          {language === 'fr' ? 'Numéro CIN' : 'Laharan\'ny Karapanondro (CIN)'}
        </label>
        <input
          type="text"
          className="form-input"
          name="cinNumber"
          placeholder={language === 'fr' ? 'Ex: 101234567890' : 'Ohatra: 101234567890'}
          value={formData.cinNumber}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}

export default PersonalInfoSection;