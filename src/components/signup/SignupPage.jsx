// src/components/signup/SignupPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../common/LanguageToggle';
import BenefitsSection from './BenefitsSection';
import SignupForm from './SignupForm';
import { useSignup } from '../../hooks/useSignup';
import { signupContent, loginLink } from '../../mockData/signupData';

function SignupPage() {
  const { language } = useLanguage();
  const { formData, isLoading, handleChange, handleSubmit } = useSignup();

  useEffect(() => {
    // Animation d'entrée
    const card = document.querySelector('.signup-card');
    if (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <div className="signup-page">
      <LanguageToggle />
      
      <div className="signup-container">
        <div className="">
          <div className="logo">
            <img
              src="../mobile/assets/images/Logo_paofin.png.png"
              alt="PAOFIN"
              onError={(e) => e.target.style.display = 'none'}
            />
            <div>
              <h1 className="title">{signupContent.title[language]}</h1>
              <p className="subtitle">{signupContent.subtitle[language]}</p>
            </div>
          </div>
        </div>

        <div className="signup-card">
          <BenefitsSection content={signupContent.benefits} />
          
          <SignupForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />

          <div className="login-link">
            <span>{loginLink.text[language]}</span>
            <Link to="/">{loginLink.linkText[language]}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;