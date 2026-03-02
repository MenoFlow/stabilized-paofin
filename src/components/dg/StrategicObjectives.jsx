// src/components/dg/StrategicObjectives.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function StrategicObjectives({ objectives, onObjectiveClick }) {
  const { language } = useLanguage();

  const title = {
    fr: "● Objectifs Stratégiques 2026",
    mg: "● Tanjona Stratejika 2026"
  };

  const labels = {
    objectif: { fr: "Objectif", mg: "Tanjona" },
    actuel: { fr: "Actuel", mg: "Ankehitriny" }
  };

  return (
    <div className="card">
      <h3>{title[language]}</h3>
      <ul className="objectives-list">
        {objectives.map((obj, index) => (
          <li 
            key={index} 
            className="objective-item"
            onClick={() => onObjectiveClick(obj.title)}
          >
            <div className="objective-info">
              <div className="objective-title">{obj.title[language]}</div>
              <div className="objective-progress">
                {labels.objectif[language]}: {obj.target} | {labels.actuel[language]}: {obj.current}
              </div>
            </div>
            <div>
              <div className="progress-bar">
                <div 
                  className={`progress-fill ${obj.status}`} 
                  style={{ width: `${obj.progress}%` }}
                ></div>
              </div>
              <strong>{obj.progress}%</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StrategicObjectives;