// src/hooks/useClient.js
import { useState, useEffect } from 'react';
import { 
  clientInfo, 
  creditRequests, 
  activeCredit, 
  paymentSchedule, 
  notifications,
  documents,
  supportInfo,
  paositraMoney
} from '../mockData/clientData';

export function useClient() {
  const [notificationsList, setNotificationsList] = useState(notifications);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    updateUnreadCount();
  }, [notificationsList]);

  useEffect(() => {
    // Simulation de nouvelles notifications
    const interval = setInterval(() => {
      if (Math.random() > 0.95) { // 5% de chance
        const newNotification = {
          id: Date.now(),
          icon: "Megaphone",
          title: { fr: "Nouvelle information", mg: "Vaovao vaovao" },
          text: { fr: "Une mise à jour importante concernant votre crédit", mg: "Vaovao vaovao momba ny trosanao" },
          time: { fr: "À l'instant", mg: "Amin'izao fotoana izao" },
          unread: true
        };
        setNotificationsList(prev => [newNotification, ...prev]);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const updateUnreadCount = () => {
    const count = notificationsList.filter(n => n.unread).length;
    setUnreadCount(count);
  };

  const markAsRead = (notificationId) => {
    setNotificationsList(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, unread: false } : notif
      )
    );
  };

  const getDateByLanguage = (item, language) => {
    return language === 'fr' ? item.date : (item.dateMG || item.date);
  };

  return {
    clientInfo,
    creditRequests,
    activeCredit,
    paymentSchedule,
    notifications: notificationsList,
    documents,
    supportInfo,
    paositraMoney,
    unreadCount,
    markAsRead,
    getDateByLanguage
  };
}