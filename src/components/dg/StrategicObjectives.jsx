// src/components/dg/StrategicObjectives.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function StrategicObjectives({ objectives, onObjectiveClick }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>● Objectifs Stratégiques 2026</h3>
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
                Objectif: {obj.target} | Actuel: {obj.current}
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