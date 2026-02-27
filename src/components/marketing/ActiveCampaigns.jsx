// src/components/marketing/ActiveCampaigns.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function ActiveCampaigns({ campaigns }) {
  const { language } = useLanguage();

  const getPerformanceClass = (performance) => {
    switch(performance) {
      case 'excellent': return 'performance-excellent';
      case 'good': return 'performance-good';
      case 'poor': return 'performance-poor';
      default: return '';
    }
  };

  return (
    <div className="card">
      <h3>▶ {language === 'fr' ? 'Campagnes Actives' : 'Kampana mavitrika'}</h3>
      <div className="campaigns-list">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-item">
            <div className="campaign-info">
              <div className="campaign-name">{campaign.name[language]}</div>
              <div className="campaign-stats">
                {language === 'fr' ? 'Budget' : 'Teti-bola'}: {campaign.budget} | 
                {language === 'fr' ? 'Dépensé' : 'Voaloa'}: {campaign.depense} | 
                {campaign.ctr ? `CTR: ${campaign.ctr}` : `${language === 'fr' ? 'Conversions' : 'Fiovana'}: ${campaign.conversions}`}
              </div>
            </div>
            <div className={`performance-indicator ${getPerformanceClass(campaign.performance)}`}>
              {campaign.performanceText[language]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveCampaigns;