// src/components/operations/DailySchedule.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function DailySchedule({ schedule }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>● {language === 'fr' ? 'Échéancier du Jour' : 'Fandaharam-potoana androany'}</h3>
      
      <div style={{ marginBottom: '1rem' }}>
        <strong>
          {language === 'fr' ? "Aujourd'hui - " : "Androany - "}
          {schedule.date[language]}
        </strong>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{language === 'fr' ? 'Échéances attendues:' : 'Fandoavam-bola andrasana:'}</span>
          <span><strong>{schedule.total.count} {language === 'fr' ? 'paiements' : 'fandoavana'}</strong></span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{language === 'fr' ? 'Montant total:' : 'Volany:'}</span>
          <span><strong>{schedule.total.montant}</strong></span>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: schedule.paye.color }}>
          <span>● {language === 'fr' ? 'Payé:' : 'Voaloa:'}</span>
          <span><strong>{schedule.paye.count} ({schedule.paye.montant})</strong></span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: schedule.enAttente.color }}>
          <span>▶ {language === 'fr' ? 'En attente:' : 'Miandry:'}</span>
          <span><strong>{schedule.enAttente.count} ({schedule.enAttente.montant})</strong></span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: schedule.enRetard.color }}>
          <span>■ {language === 'fr' ? 'En retard:' : 'Tara:'}</span>
          <span><strong>{schedule.enRetard.count} ({schedule.enRetard.montant})</strong></span>
        </div>
      </div>

      <button className="btn" style={{ width: '100%' }}>
        {language === 'fr' ? 'Voir Détail Complet' : 'Jereo ny antsipiriany'}
      </button>
    </div>
  );
}

export default DailySchedule;