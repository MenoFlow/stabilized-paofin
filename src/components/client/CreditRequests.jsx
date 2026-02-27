// src/components/client/CreditRequests.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getStatusClass } from '../../utils/clientUtils';

function CreditRequests({ requests, onViewAll }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>{language === 'fr' ? '▶ Mes Demandes de Crédit' : '▶ Ny fangatahana trosa'}</h3>

      {requests.map((request, index) => (
        <div key={request.id} style={{ marginBottom: index < requests.length - 1 ? '1.5rem' : 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <strong>Demande #{request.id}</strong>
            <span className={`status-badge ${getStatusClass(request.status)}`}>
              {request.statusText[language]} {/* CORRIGÉ: utilisation de language */}
            </span>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
            {language === 'fr' 
              ? `Crédit ${request.type} - ${request.montant} sur ${request.duree}`
              : `Trosa ${request.type} - ${request.montant} mandritra ny ${request.duree}`
            }
          </div>
          <div style={{ fontSize: '0.8rem', color: '#999' }}>
            {language === 'fr' ? 'Approuvé le' : 'Neken tamin\'ny'} {language === 'fr' ? request.date : request.dateMG}
          </div>
        </div>
      ))}

      <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }} onClick={onViewAll}>
        {language === 'fr' ? 'Voir Toutes les Demandes' : 'Jereo ny fangatahana rehetra'}
      </button>
    </div>
  );
}

export default CreditRequests;