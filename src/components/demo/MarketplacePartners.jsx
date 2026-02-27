// src/components/demo/MarketplacePartners.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoContent } from '../../mockData/demoData';
import '../../styles/demo/DemoPage.css';

function MarketplacePartners() {
  const { language } = useLanguage();

  return (
    <div className="demo-marketplace-section">
      <h2>{demoContent.marketplace.title[language]}</h2>
      <div className="demo-partners-banner">
        {demoContent.marketplace.partners.map((partner, index) => (
          <div key={index} className="demo-partner-logo">{partner}</div>
        ))}
      </div>
    </div>
  );
}

export default MarketplacePartners;