// src/components/marketing/ProductPerformance.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function ProductPerformance({ products }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>▶ {language === 'fr' ? 'Performance des Produits' : 'Fahombiazan\'ny vokatra'}</h3>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-name">{product.name}</div>
            <div className="product-stats">
              <div>{product.credits} {language === 'fr' ? 'crédits' : 'trosa'}</div>
              <div>{product.montant}</div>
              <div style={{ color: product.trendUp ? '#2ed573' : '#ffa502' }}>
                {product.trendUp ? '↗' : '↘'} {product.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h4>{language === 'fr' ? 'Analyse Détaillée' : 'Famakafakana antsipirihany'}</h4>
        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          {products.map((product, index) => (
            <div key={index} style={{ marginBottom: '0.5rem' }}>
              <strong>{product.name}</strong> - {product.description[language]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPerformance;