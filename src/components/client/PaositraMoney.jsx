// src/components/client/PaositraMoney.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function PaositraMoney({ data, onLearnMore }) {
  const { language } = useLanguage();

  return (
    <div className="card full-width" style={{ background: 'linear-gradient(135deg, #003399, #00AEEF)', color: 'white' }}>
      <h3 style={{ color: 'white' }}>{data.title[language]}</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
        <div>
          <h4 style={{ color: '#FFC107', marginBottom: '1rem' }}>
            {language === 'fr' ? '● Moyen de Paiement Privilégié' : '● Fomba fandoavana'}
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {data.benefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                ▶ {benefit[language]}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#FFC107', marginBottom: '1rem' }}>
            {data.apiInfo.title[language]}
          </h4>
          <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>{language === 'fr' ? 'API PAOSITRA MONEY' : 'API PAOSITRA MONEY'}</strong>
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{data.apiInfo.description[language]}</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>{data.apiInfo.url}</p>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <button 
              className="btn" 
              style={{ background: '#FFC107', color: '#003399' }}
              onClick={onLearnMore}
            >
              {language === 'fr' ? 'En savoir plus' : 'Hamantatra bebe kokoa'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaositraMoney;