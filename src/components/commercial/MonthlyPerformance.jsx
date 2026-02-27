// src/components/commercial/MonthlyPerformance.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function MonthlyPerformance({ performance }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>{language === 'fr' ? '▶ Performance Mensuelle' : '▶ Fahombiazana isam-bolana'}</h3>
      
      <div style={{ margin: '1rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span>{language === 'fr' ? 'Objectif mensuel' : 'Tanjona isam-bolana'}</span>
          <span><strong>{performance.objectif}</strong></span>
        </div>
        <div style={{ background: '#eee', height: '10px', borderRadius: '5px' }}>
          <div style={{ 
            background: '#003399', 
            height: '100%', 
            width: `${performance.pourcentage}%`, 
            borderRadius: '5px' 
          }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
          <span>{language === 'fr' ? 'Réalisé:' : 'Vita:'} {performance.realise}</span>
          <span><strong>{performance.pourcentage}%</strong></span>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h4>{language === 'fr' ? 'Répartition par produit' : 'Fizarana isan-karazany'}</h4>
        <div style={{ marginTop: '1rem' }}>
          {performance.produits.map((produit, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>{produit.name} ({produit.label[language]})</span>
              <span>{produit.montant}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonthlyPerformance;