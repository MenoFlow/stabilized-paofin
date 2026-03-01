// src/components/demo/MarketplacePartners.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoTranslations } from '../../mockData/demoTranslations';
import '../../styles/demo/DemoPage.css';

function MarketplacePartners() {
  const { language } = useLanguage();
  const t = demoTranslations;

  const partners = ["MBALIK", "Primimport", "Telma", "Orange", "Airtel"];

  return (
    <div className="demo-marketplace-section">
      <h2>{t.marketplace.title[language]}</h2>
      <div className="demo-partners-banner">
        {partners.map((partner, index) => (
          <div key={index} className="demo-partner-logo">{partner}</div>
        ))}
      </div>
    </div>
  );
}

export default MarketplacePartners;