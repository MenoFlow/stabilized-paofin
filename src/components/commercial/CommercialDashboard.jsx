// src/components/commercial/CommercialDashboard.jsx
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../common/Header';
import QuickStats from './QuickStats';
import HotLeadsTable from './HotLeadsTable';
import AppointmentCalendar from './AppointmentCalendar';
import MonthlyPerformance from './MonthlyPerformance';
import {
  quickStats,
  hotLeads,
  calendarData,
  appointmentsToday,
  monthlyPerformance,
  userInfo
} from '../../mockData/commercialData';
import '../../styles/commercial/CommercialDashboard.css';

function CommercialDashboard() {
  const { language } = useLanguage();

  const dashboardTitle = {
    fr: "Dashboard Commercial",
    mg: "Dashboard Varotra"
  };

  useEffect(() => {
    // Simulation de mise à jour temps réel
    const interval = setInterval(() => {
      console.log('Mise à jour des statistiques...');
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const handleDateClick = (day) => {
    const messages = {
      fr: `Rendez-vous pour le ${day} janvier 2026`,
      mg: `Fihaonana ho an'ny ${day} Janoary 2026`
    };
    alert(messages[language]);
  };

  return (
    <>
      <Header 
        user={{
          name: userInfo.name,
          role: userInfo.role[language],
          avatar: userInfo.avatar
        }}
        onLogout={handleLogout}
        dashboardTitle={dashboardTitle}
      />

      <div className="container">
        <QuickStats stats={quickStats} />

        <div className="dashboard-grid">
          <HotLeadsTable leads={hotLeads} />
          <AppointmentCalendar 
            calendarData={calendarData}
            appointments={appointmentsToday}
            onDateClick={handleDateClick}
          />
          <MonthlyPerformance performance={monthlyPerformance} />
        </div>
      </div>
    </>
  );
}

export default CommercialDashboard;