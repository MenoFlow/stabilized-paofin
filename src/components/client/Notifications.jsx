// src/components/client/Notifications.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LucideIcon from '../common/LucideIcon';

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
            <div className="notification-icon">
              <LucideIcon name={notif.icon} size={20} />
            </div>
            <div className="notification-content">
              <div className="notification-title">{notif.title[language]}</div>
              <div className="notification-text">{notif.text[language]}</div>
            </div>
            <div className="notification-time">{notif.time[language]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;