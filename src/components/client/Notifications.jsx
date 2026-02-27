// src/components/client/Notifications.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function Notifications({ notifications, onNotificationClick }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>{language === 'fr' ? '● Mes Notifications' : '● Ny fampahafantarana'}</h3>

      <div className="notifications-list">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`notification-item ${notif.unread ? 'unread' : ''}`}
            onClick={() => onNotificationClick(notif.id)}
          >
            <div className="notification-icon">{notif.icon}</div>
            <div className="notification-content">
              <div className="notification-title">{notif.title[language]}</div> {/* CORRIGÉ */}
              <div className="notification-text">{notif.text[language]}</div> {/* CORRIGÉ */}
            </div>
            <div className="notification-time">{notif.time[language]}</div> {/* CORRIGÉ */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;