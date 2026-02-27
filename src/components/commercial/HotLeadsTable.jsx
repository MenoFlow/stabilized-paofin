// src/components/commercial/HotLeadsTable.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function HotLeadsTable({ leads }) {
  const { language } = useLanguage();

  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  const headers = {
    client: { fr: "Client", mg: "Mpanjifa" },
    montant: { fr: "Montant", mg: "Vola" },
    score: { fr: "Score", mg: "Naoty" },
    priorite: { fr: "Priorité", mg: "Laharam-pahamehana" },
    derniereAction: { fr: "Dernière Action", mg: "Hetsika Farany" },
    actions: { fr: "Actions", mg: "Hetsika" }
  };

  const actionLabels = {
    appeler: { fr: "Appeler", mg: "Antso" },
    rdv: { fr: "RDV", mg: "Fihaonana" }
  };

  return (
    <div className="card full-width">
      <h3>{language === 'fr' ? '▲ Leads Chauds - Action Requise' : '▲ Mpanjifa Mafana - Mila Hetsika'}</h3>
      <table className="leads-table">
        <thead>
          <tr>
            <th>{headers.client[language]}</th>
            <th>{headers.montant[language]}</th>
            <th>{headers.score[language]}</th>
            <th>{headers.priorite[language]}</th>
            <th>{headers.derniereAction[language]}</th>
            <th>{headers.actions[language]}</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>
                <strong>{lead.name}</strong><br />
                <small>{lead.phone}</small>
              </td>
              <td>{lead.montant}</td>
              <td>{lead.score}/1000</td>
              <td>
                <span className={getPriorityClass(lead.priority)}>
                  {lead.priorityText[language]}
                </span>
              </td>
              <td>{lead.lastAction[language]}</td>
              <td>
                {lead.actions.map((action, index) => (
                  <button 
                    key={index}
                    className="btn"
                    style={{ marginRight: '0.5rem' }}
                  >
                    {actionLabels[action][language]}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HotLeadsTable;