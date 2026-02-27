// src/components/signup/ContactSection.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function ContactSection({ formData, handleChange }) {
  const { language } = useLanguage();

  return (
    <div className="form-section">
      <div className="section-title">
        <span>●</span>
        <span>{language === 'fr' ? 'Informations de contact' : 'Fampahalalana fifandraisana'}</span>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Téléphone' : 'Telefaona'}
          </label>
          <input
            type="tel"
            className="form-input"
            name="phone"
            placeholder="+261 34 00 000 00"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            {language === 'fr' ? 'Email' : 'Mailaka'}
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            placeholder="votre.email@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          {language === 'fr' ? 'Adresse complète' : 'Adiresy feno'}
        </label>
        <input
          type="text"
          className="form-input"
          name="address"
          placeholder="Ex: Lot II M 25 Ankadifotsy, Antananarivo"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}

export default ContactSection;