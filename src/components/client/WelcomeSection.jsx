// src/components/client/WelcomeSection.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function WelcomeSection({ clientName }) {
  const { language } = useLanguage();

  const welcomeMessages = {
    fr: {
      title: `Bienvenue, ${clientName} !`,
      subtitle: "Gérez vos crédits et suivez vos remboursements en toute simplicité"
    },
    mg: {
      title: `Tonga soa, ${clientName} !`,
      subtitle: "Raharo ny trosanao ary araho ny fandoavam-bola mora foana"
    }
  };

  return (
    <div className="welcome-section">
      <h1 className="welcome-title">{welcomeMessages[language].title}</h1>
      <p className="welcome-subtitle">{welcomeMessages[language].subtitle}</p>
    </div>
  );
}

export default WelcomeSection;