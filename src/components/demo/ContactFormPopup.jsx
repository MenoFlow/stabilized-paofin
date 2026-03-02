// src/components/demo/ContactFormPopup.jsx
import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoTranslations } from '../../mockData/demoTranslations';
import '../../styles/demo/ContactFormPopup.css';

function ContactFormPopup({ show, onClose, onSubmit }) {
  const { language } = useLanguage();
  const t = demoTranslations.contactForm;
  
  const [phone, setPhone] = useState('');
  const [availableTime, setAvailableTime] = useState('');

  // Masque de saisie pour le téléphone malgache: +261 (0)XX XX XXX XX
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Garder seulement les chiffres
    
    // Limiter à 10 chiffres (après le 261)
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    
    // Formater: +261 (0)XX XX XXX XX
    let formatted = '';
    if (value.length > 0) {
      formatted = '+261 (0)';
      if (value.length > 0) {
        formatted += value.slice(0, 2); // XX
        if (value.length > 2) {
          formatted += ' ' + value.slice(2, 4); // XX
          if (value.length > 4) {
            formatted += ' ' + value.slice(4, 7); // XXX
            if (value.length > 7) {
              formatted += ' ' + value.slice(7, 9); // XX
            }
          }
        }
      }
    }
    
    setPhone(formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Extraire seulement les chiffres pour validation
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length >= 9 && availableTime) {
      onSubmit({ phone, availableTime });
      setPhone('');
      setAvailableTime('');
    } else if (phoneDigits.length < 9) {
      alert(language === 'fr' ? 'Veuillez entrer un numéro valide (9 chiffres)' : 'Ampidiro ny nomerao feno (9 isa)');
    }
  };

  const handleClose = () => {
    setPhone('');
    setAvailableTime('');
    onClose();
  };

  if (!show) return null;

  return (
    <div className="contact-form-overlay" onClick={handleClose}>
      <div className="contact-form-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose}>×</button>
        
        <h2 className="contact-form-title">
          {t.title[language]}
        </h2>

        <p className="contact-form-subtitle">
          {t.subtitle[language]}
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="phone">{t.phoneLabel[language]}</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="+261 (0)34 00 000 00"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">{t.timeLabel[language]}</label>
            <select
              id="time"
              value={availableTime}
              onChange={(e) => setAvailableTime(e.target.value)}
              required
            >
              <option value="">{t.selectTime[language]}</option>
              <option value="08:00-10:00">08:00 - 10:00</option>
              <option value="10:00-12:00">10:00 - 12:00</option>
              <option value="12:00-14:00">12:00 - 14:00</option>
              <option value="14:00-16:00">14:00 - 16:00</option>
              <option value="16:00-18:00">16:00 - 18:00</option>
            </select>
          </div>

          <div className="form-buttons">
            <button type="button" className="form-btn cancel-btn" onClick={handleClose}>
              {t.cancelBtn[language]}
            </button>
            <button type="submit" className="form-btn submit-btn">
              {t.submitBtn[language]}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactFormPopup;
