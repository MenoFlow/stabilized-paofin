// src/components/operations/CreditsAttentionTable.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function CreditsAttentionTable({ credits }) {
  const { language } = useLanguage();

  const getStatusClass = (statut) => {
    switch(statut) {
      case 'overdue': return 'status-overdue';
      case 'warning': return 'status-warning';
      default: return 'status-active';
    }
  };

  const getStatusText = (statut) => {
    const statusMap = {
      overdue: { fr: 'EN RETARD', mg: 'TARA' },
      warning: { fr: 'ATTENTION', mg: 'TANDREMO' },
      active: { fr: 'ACTIF', mg: 'MAVITRIKA' }
    };
    return statusMap[statut][language];
  };

  const getActionButton = (action, statut) => {
    const buttonMap = {
      relancer: { text: { fr: 'Relancer', mg: "Hampahatsiahina" }, class: 'btn-danger' },
      contacter: { text: { fr: 'Contacter', mg: 'Hifandray' }, class: 'btn-warning' },
      details: { text: { fr: 'Détails', mg: 'Antsipiriany' }, class: '' },
      echeancier: { text: { fr: 'Voir Échéancier', mg: 'Jereo ny fandaharam-potoana' }, class: '' }
    };
    return buttonMap[action] || { text: { fr: action, mg: action }, class: '' };
  };

  const headers = {
    client: { fr: 'Client', mg: 'Mpanjifa' },
    montant: { fr: 'Montant Crédit', mg: 'Sandan\'ny trosa' },
    resteDu: { fr: 'Reste Dû', mg: 'Tavela' },
    prochaineEcheance: { fr: 'Prochaine Échéance', mg: 'Fandoavam-bola manaraka' },
    statut: { fr: 'Statut', mg: 'Toerana' },
    joursRetard: { fr: 'Jours de Retard', mg: 'Andro fahatarana' },
    actions: { fr: 'Actions', mg: 'Hetsika' }
  };

  return (
    <div className="card full-width">
      <h3>▲ {language === 'fr' ? 'Crédits Nécessitant une Attention' : 'Trosa Mitaky Fiheverana'}</h3>
      <table className="loans-table">
        <thead>
          <tr>
            <th>{headers.client[language]}</th>
            <th>{headers.montant[language]}</th>
            <th>{headers.resteDu[language]}</th>
            <th>{headers.prochaineEcheance[language]}</th>
            <th>{headers.statut[language]}</th>
            <th>{headers.joursRetard[language]}</th>
            <th>{headers.actions[language]}</th>
          </tr>
        </thead>
        <tbody>
          {credits.map((credit) => (
            <tr key={credit.id}>
              <td>
                <strong>{credit.client}</strong><br />
                <small>Crédit #{credit.creditRef}</small>
              </td>
              <td>{credit.montant}</td>
              <td>{credit.resteDu}</td>
              <td>
                {credit.prochaineEcheance.date}<br />
                <small>{credit.prochaineEcheance.montant}</small>
              </td>
              <td>
                <span className={getStatusClass(credit.statut)}>
                  {getStatusText(credit.statut)}
                </span>
              </td>
              <td style={{ 
                color: credit.joursRetard > 5 ? '#ff4757' : '#ffa502', 
                fontWeight: 'bold' 
              }}>
                {credit.joursRetard ? `${credit.joursRetard} jours` : '-'}
              </td>
              <td>
                {credit.actions.map((action, index) => {
                  const btn = getActionButton(action, credit.statut);
                  return (
                    <button 
                      key={index}
                      className={`btn ${btn.class}`}
                      style={{ marginRight: '0.5rem' }}
                    >
                      {btn.text[language]}
                    </button>
                  );
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CreditsAttentionTable;