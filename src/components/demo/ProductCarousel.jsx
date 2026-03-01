// src/components/demo/ProductCarousel.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoContent } from '../../mockData/demoData';
import herijikaImg from '../../assets/herijika.png';
import ketrikaImg from '../../assets/ketrika.png';
import '../../styles/demo/DemoPage.css';

function ProductCarousel({ products, selectedIndex, onSelect }) {
  const { language } = useLanguage();

  const productImages = {
    'herijika': herijikaImg,
    'ketrika': ketrikaImg,
    'marketplace': null // Pas d'image pour marketplace
  };

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
            <div className="demo-product-image">
              {productImages[product.id] ? (
                <img src={productImages[product.id]} alt={product.name} className="product-card-img" />
              ) : (
                <span>{product.name}</span>
              )}
            </div>
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