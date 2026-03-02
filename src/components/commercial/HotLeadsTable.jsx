// src/components/commercial/HotLeadsTable.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Calendar, TrendingUp, TrendingDown, Minus } from 'lucide-react';

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

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 'high': return <TrendingUp size={16} />;
      case 'medium': return <Minus size={16} />;
      case 'low': return <TrendingDown size={16} />;
      default: return null;
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

  const getScoreColor = (score) => {
    if (score >= 800) return '#2ed573';
    if (score >= 700) return '#ffa502';
    return '#ff4757';
  };

  return (
    <div className="card full-width">
      <h3>▲ {language === 'fr' ? 'Leads Chauds - Action Requise' : 'Mpanjifa Mafana - Mila Hetsika'}</h3>
      <div style={{ overflowX: 'auto' }}>
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
                      {lead.name.charAt(0)}
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#003399' }}>{lead.name}</strong>
                      <small style={{ color: '#666', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Phone size={12} />
                        {lead.phone}
                      </small>
                    </div>
                  </div>
                </td>
                <td><strong style={{ color: '#003399', fontSize: '1.1rem' }}>{lead.montant}</strong></td>
                <td>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    background: `${getScoreColor(lead.score)}20`,
                    border: `2px solid ${getScoreColor(lead.score)}`,
                    color: getScoreColor(lead.score),
                    fontWeight: 'bold'
                  }}>
                    {lead.score}/1000
                  </div>
                </td>
                <td>
                  <span className={getPriorityClass(lead.priority)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    {getPriorityIcon(lead.priority)}
                    {lead.priorityText[language]}
                  </span>
                </td>
                <td>
                  <small style={{ color: '#666' }}>{lead.lastAction[language]}</small>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {lead.actions.map((action, index) => (
                      <button 
                        key={index}
                        className="btn"
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.3rem' 
                        }}
                      >
                        {action === 'appeler' && <Phone size={14} />}
                        {action === 'rdv' && <Calendar size={14} />}
                        {actionLabels[action][language]}
                      </button>
                    ))}
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

export default HotLeadsTable;