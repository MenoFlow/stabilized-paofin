// src/components/operations/OperationsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../common/Header';
import LanguageToggle from '../common/LanguageToggle';
import OperationalStats from './OperationalStats';
import CreditsAttentionTable from './CreditsAttentionTable';
import SystemAlerts from './SystemAlerts';
import OperationalKPIs from './OperationalKPIs';
import DailySchedule from './DailySchedule';
import {
  operationalStats,
  creditsAttention,
  systemAlerts,
  operationalKPIs,
  dailySchedule,
  userInfo
} from '../../mockData/operationsData';

function OperationsDashboard() {
  const { language } = useLanguage();
  const [alerts, setAlerts] = useState(systemAlerts);

  useEffect(() => {
    // Simulation de mise à jour temps réel
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        const newAlert = {
          id: Date.now(),
          type: 'danger',
          title: { fr: 'Nouveau Retard', mg: 'Fahatarana Vaovao' },
          description: { 
            fr: 'Client XYZ - Paiement en retard détecté',
            mg: 'Mpanjifa XYZ - Hita fa tara ny fandoavana'
          },
          action: { fr: 'Action', mg: 'Hetsika' }
        };
        setAlerts(prev => [newAlert, ...prev]);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const handleAlertAction = (alertId) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, processed: true } : alert
    ));
  };

  return (
    <>
      <LanguageToggle />
      
      <Header 
        user={{
          name: userInfo.name,
          role: userInfo.role[language],
          avatar: userInfo.avatar
        }}
        onLogout={handleLogout}
      />

      <div className="container">
        <OperationalStats stats={operationalStats} />

        <div className="dashboard-grid">
          <CreditsAttentionTable credits={creditsAttention} />
          <SystemAlerts alerts={alerts} onAction={handleAlertAction} />
          <OperationalKPIs kpis={operationalKPIs} />
          <DailySchedule schedule={dailySchedule} />
        </div>
      </div>
    </>
  );
}

export default OperationsDashboard;