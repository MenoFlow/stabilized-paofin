// src/components/dg/RecommendedActions.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function RecommendedActions({ actions }) {
  const { language } = useLanguage();

  const getActionStyle = (priority) => {
    switch(priority) {
      case 'urgent':
        return { background: '#fff5f5', borderLeftColor: '#ff4757' };
      case 'important':
        return { background: '#fffbf0', borderLeftColor: '#ffa502' };
      case 'opportunity':
      case 'strategic':
        return { background: '#f0f8ff', borderLeftColor: '#003399' };
      default:
        return { background: '#f0f8ff', borderLeftColor: '#003399' };
    }
  };

  return (
    <div className="card">
      <h3>■ Actions Recommandées</h3>
      <div style={{ spaceY: '1rem' }}>
        {actions.map((action, index) => (
          <div
            key={index}
            style={{
              padding: '1rem',
              borderLeft: '4px solid',
              borderRadius: '6px',
              marginBottom: '1rem',
              ...getActionStyle(action.priority)
            }}
          >
            <strong>{action.title[language]}</strong> {action.description[language]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedActions;