// src/components/client/QuickActions.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function QuickActions({ onSimulate, onPayment, onDownload, onSupport }) {
  const { language } = useLanguage();

  const actions = [
    { icon: "$", label: { fr: "Nouvelle Simulation", mg: "Fanaovana simulation vaovao" }, onClick: onSimulate },
    { icon: "■", label: { fr: "Effectuer un Paiement", mg: "Manao fandoavana" }, onClick: onPayment },
    { icon: "■", label: { fr: "Télécharger Relevé", mg: "Misintona tatitra" }, onClick: onDownload },
    { icon: "●", label: { fr: "Contacter Support", mg: "Mifandray amin'ny Support" }, onClick: onSupport }
  ];

  return (
    <div className="card full-width">
      <h3>{language === 'fr' ? '▶ Actions Rapides' : '▶ Hetsika haingana'}</h3>
      <div className="quick-actions">
        {actions.map((action, index) => (
          <div key={index} className="action-item" onClick={action.onClick}>
            <div className="action-icon">{action.icon}</div>
            <div className="action-label">{action.label[language]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;