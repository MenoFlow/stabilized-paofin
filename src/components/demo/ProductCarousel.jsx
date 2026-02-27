// src/components/demo/ProductCarousel.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoContent } from '../../mockData/demoData';
import '../../styles/demo/DemoPage.css';

function ProductCarousel({ products, selectedIndex, onSelect }) {
  const { language } = useLanguage();

  return (
    <div className="demo-product-selection">
      <h2>{language === 'fr' ? 'Choisissez votre produit' : 'Fidio ny vokatra tianao'}</h2>
      <div className="demo-products">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`demo-product-card ${selectedIndex === index ? 'selected' : ''}`}
            onClick={() => onSelect(product.id, index)}
          >
            <div className="demo-product-image">{product.name}</div>
            <div className="demo-product-info">
              <div className="demo-product-name">{product.title}</div>
              <div className="demo-product-limits">{product.limits}</div>
              <div className="demo-product-description">{product.description[language]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;