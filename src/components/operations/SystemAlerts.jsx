// src/components/operations/SystemAlerts.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function SystemAlerts({ alerts, onAction }) {
  const { language } = useLanguage();

  const getAlertClass = (type) => {
    return type === 'warning' ? 'alert-item warning' : 'alert-item';
  };

  const getButtonClass = (type) => {
    return type === 'warning' ? 'btn-warning' : 'btn-danger';
  };

  return (
    <div className="card">
      <h3>■ {language === 'fr' ? 'Alertes Système' : 'Fampitandrehana rafitra'}</h3>
      <div className="alerts-list">
        {alerts.map((alert) => (
          !alert.processed && (
            <div key={alert.id} className={getAlertClass(alert.type)}>
              <div className="alert-info">
                <div className="alert-title">{alert.title[language]}</div>
                <div className="alert-description">{alert.description[language]}</div>
              </div>
              <button 
                className={`btn ${getButtonClass(alert.type)}`}
                onClick={() => onAction(alert.id)}
              >
                {alert.action[language]}
              </button>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default SystemAlerts;