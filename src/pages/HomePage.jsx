import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/common/LanguageToggle';
import logoPaositra from '../assets/logo-paositra.png';
import logo from '../assets/logo.jpeg';
import '../styles/HomePage.css';

function HomePage() {
  const { language } = useLanguage();

  const content = {
    title: {
      fr: 'VINA',
      mg: 'VINA'
    },
    subtitle: {
      fr: 'Votre partenaire financier',
      mg: 'Mpiara-miasa ara-bola'
    },
    description: {
      fr: 'Simulez votre crédit en quelques minutes et découvrez les solutions de financement adaptées à vos besoins à Madagascar.',
      mg: 'Kajy ny trosa afaka alaina ao anatin\'ny minitra vitsivitsy ary mahita vahaolana ara-bola mifanaraka amin\'ny filàna eto Madagasikara.'
    },
    welcomeTitle: {
      fr: 'Tongasoa',
      mg: 'Tongasoa'
    },
    welcomeSubtitle: {
      fr: 'Ianao paré, vinanao tratra e',
      mg: 'Ianao paré, vinanao tratra e'
    },
    simulateButton: {
      fr: 'Simuler un crédit',
      mg: 'Kajy trosa'
    },
    connectButton: {
      fr: 'Se connecter',
      mg: 'Hiditra'
    },
    signupButton: {
      fr: 'S\'inscrire',
      mg: 'Hisoratra anarana'
    }
  };

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="header-left">
          <img src={logoPaositra} alt="PAOSITRA Logo" className="header-logo" />
        </div>
        <div className="header-right">
          <LanguageToggle />
        </div>
      </header>

      <main className="home-main">
        <div className="home-content-card">
          <div className="welcome-section">
            <img 
              src={logo} 
              alt="PAOFIN Logo" 
              className="logo-large"
            />
            <h2 className="welcome-title">{content.welcomeTitle[language]}</h2>
            <h3 className="welcome-subtitle-text">
              {content.welcomeSubtitle[language]}
            </h3>
          </div>

          <div className="hero-section">
            <h2 className="hero-title">{content.title[language]}</h2>
            <h3 className="hero-subtitle">{content.subtitle[language]}</h3>
            <p className="hero-description">{content.description[language]}</p>

            <div className="action-buttons">
              <Link to="/demo-mobile" className="btn btn-primary">
                <Smartphone size={20} />
                {content.simulateButton[language]}
              </Link>
              <Link to="/login" className="btn btn-secondary">
                {content.connectButton[language]}
              </Link>
              <Link to="/signup" className="btn btn-tertiary">
                {content.signupButton[language]}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
