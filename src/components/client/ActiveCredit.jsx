// src/components/client/ActiveCredit.jsx
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

function ActiveCredit({ credit, onViewDetails }) {
  const { language } = useLanguage();

  useEffect(() => {
    // Animation de la barre de progression
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
      progressBar.style.width = '0%';
      setTimeout(() => {
        progressBar.style.width = `${credit.progression}%`;
      }, 100);
    }
  }, [credit.progression]);

  return (
    <div className="card">
      <h3>{language === 'fr' ? '■ Mon Crédit Actif' : '■ Ny trosa mavitrika'}</h3>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div style={{ fontSize: '1.1rem', color: '#666' }}>
          {language === 'fr' ? `Crédit ${credit.type} #${credit.id}` : `Trosa ${credit.type} #${credit.id}`}
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003399', margin: '0.5rem 0' }}>
          {credit.capitalRestant}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#666' }}>
          {language === 'fr' ? 'Capital restant dû' : 'Tavela'}
        </div>
      </div>

      <div className="loan-summary">
        <div className="summary-item">
          <div className="summary-value">{credit.montantInitial}</div>
          <div className="summary-label">{language === 'fr' ? 'Montant initial' : 'Vola niandohana'}</div>
        </div>
        <div className="summary-item">
          <div className="summary-value">{credit.rembourse}</div>
          <div className="summary-label">{language === 'fr' ? 'Déjà remboursé' : 'Efa voaloa'}</div>
        </div>
      </div>

      <div style={{ margin: '1rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span>{language === 'fr' ? 'Progression du remboursement' : 'Fivoaran\'ny fandoavana'}</span>
          <span><strong>{credit.progression}%</strong></span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${credit.progression}%` }}></div>
        </div>
      </div>

      <button className="btn" style={{ width: '100%' }} onClick={onViewDetails}>
        {language === 'fr' ? 'Voir Détails Complets' : 'Jereo ny antsipiriany'}
      </button>
    </div>
  );
}

export default ActiveCredit;