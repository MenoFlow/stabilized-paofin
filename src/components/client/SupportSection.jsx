// src/components/client/SupportSection.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function SupportSection({ supportInfo, onChat, onSchedule, onFAQ }) {
  const { language } = useLanguage();

  return (
    <div className="card full-width">
      <h3>{language === 'fr' ? '@ Besoin d\'Aide ?' : '@ Mila fanampiana ?'}</h3>

      <div className="contact-info">
        <div className="contact-title">
          {language === 'fr' ? 'Service Client PAOFIN' : 'Service Client PAOFIN'}
        </div>
        <div className="contact-details">
          @ {language === 'fr' ? 'Téléphone' : 'Telefaona'}: {supportInfo.phone}<br />
          @ Email: {supportInfo.email}<br />
          ● {language === 'fr' ? 'Horaires' : 'Ora'}: {supportInfo.hours[language]}<br />
          ● {language === 'fr' ? 'Adresse' : 'Adiresy'}: {supportInfo.address[language]}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
        <button className="btn" onClick={onChat}>
          {language === 'fr' ? '@ Chat en Ligne' : '@ Resaka an-tserasera'}
        </button>
        <button className="btn btn-outline" onClick={onSchedule}>
          {language === 'fr' ? '● Prendre RDV' : '● Manao fotoana'}
        </button>
        <button className="btn btn-outline" onClick={onFAQ}>
          {language === 'fr' ? '? FAQ' : '? Fanontaniana'}
        </button>
      </div>
    </div>
  );
}

export default SupportSection;