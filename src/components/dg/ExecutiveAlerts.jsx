// src/components/dg/ExecutiveAlerts.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LucideIcon from '../common/LucideIcon';

function ExecutiveAlerts({ alerts }) {
  const { language } = useLanguage();

  const getAlertClass = (type) => {
    switch(type) {
      case 'critical': return 'alert-executive';
      case 'warning': return 'alert-executive warning';
      case 'info': return 'alert-executive info';
      default: return 'alert-executive';
    }
  };

  return (
    <div className="card">
      <h3>■ Alertes Direction</h3>
      <div className="alerts-executive">
        {alerts.map((alert, index) => (
          <div key={index} className={getAlertClass(alert.type)}>
            <div className="alert-icon">
              <LucideIcon name={alert.icon} size={20} />
            </div>
            <div className="alert-content">
              <div className="alert-title">{alert.title[language]}</div>
              <div className="alert-description">{alert.description[language]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExecutiveAlerts;