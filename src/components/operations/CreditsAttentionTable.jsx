// src/components/operations/CreditsAttentionTable.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

function CreditsAttentionTable({ credits }) {
  const { language } = useLanguage();

  const getStatusClass = (statut) => {
    switch(statut) {
      case 'overdue': return 'status-overdue';
      case 'warning': return 'status-warning';
      default: return 'status-active';
    }
  };

  const getStatusIcon = (statut) => {
    switch(statut) {
      case 'overdue': return <AlertTriangle size={16} />;
      case 'warning': return <Clock size={16} />;
      default: return <CheckCircle size={16} />;
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
      <div style={{ overflowX: 'auto' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #003399, #0055cc)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      {credit.client.charAt(0)}
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#003399' }}>{credit.client}</strong>
                      <small style={{ color: '#666' }}>Crédit #{credit.creditRef}</small>
                    </div>
                  </div>
                </td>
                <td><strong style={{ color: '#003399' }}>{credit.montant}</strong></td>
                <td><strong style={{ color: '#ff4757' }}>{credit.resteDu}</strong></td>
                <td>
                  <div>
                    <strong style={{ display: 'block' }}>{credit.prochaineEcheance.date}</strong>
                    <small style={{ color: '#666' }}>{credit.prochaineEcheance.montant}</small>
                  </div>
                </td>
                <td>
                  <span className={getStatusClass(credit.statut)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    {getStatusIcon(credit.statut)}
                    {getStatusText(credit.statut)}
                  </span>
                </td>
                <td style={{ 
                  color: credit.joursRetard > 5 ? '#ff4757' : credit.joursRetard ? '#ffa502' : '#2ed573', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  {credit.joursRetard ? `${credit.joursRetard} ${language === 'fr' ? 'jours' : 'andro'}` : '—'}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {credit.actions.map((action, index) => {
                      const btn = getActionButton(action, credit.statut);
                      return (
                        <button 
                          key={index}
                          className={`btn ${btn.class}`}
                        >
                          {btn.text[language]}
                        </button>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CreditsAttentionTable;