// src/components/commercial/AppointmentCalendar.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function AppointmentCalendar({ calendarData, appointments, onDateClick }) {
  const { language } = useLanguage();

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <h3>{language === 'fr' ? '● Calendrier des Rendez-vous' : '● Fandaharam-potoana fihaonana'}</h3>
        <div>
          <button className="btn">← {language === 'fr' ? 'Précédent' : 'Teo aloha'}</button>
          <span style={{ margin: '0 1rem' }}>{calendarData.month[language]}</span>
          <button className="btn">{language === 'fr' ? 'Suivant' : 'Manaraka'} →</button>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.days.map((day, index) => (
          <div key={`header-${index}`} className="calendar-day">{day.label[language]}</div>
        ))}

        {calendarData.dates.map((date, index) => (
          <div
            key={index}
            className={`calendar-day ${date.hasAppointment ? 'has-appointment' : ''} ${date.isToday ? 'today' : ''}`}
            onClick={() => date.day && onDateClick(date.day)}
          >
            {date.day || ''}
          </div>
        ))}
      </div>

      <div className="appointments-list">
        <h4>
          {language === 'fr' ? "Rendez-vous d'aujourd'hui (22 Jan)" : "Fihaonana androany (22 Jan)"}
        </h4>
        {appointments.map((apt) => (
          <div key={apt.id} className="appointment-item">
            <div>
              <strong>{apt.time} - {apt.client}</strong><br />
              <small>{apt.description[language]} {apt.montant}</small>
            </div>
            <button className="btn">{language === 'fr' ? 'Détails' : 'Antsipiriany'}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentCalendar;