// src/components/signup/SignupForm.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PersonalInfoSection from './PersonalInfoSection';
import ContactSection from './ContactSection';
import ProfessionalSection from './ProfessionalSection';
import SecuritySection from './SecuritySection';
import TermsSection from './TermsSection';

function SignupForm({ formData, handleChange, handleSubmit, isLoading }) {
  const { language } = useLanguage();

  return (
    <form onSubmit={handleSubmit}>
      <PersonalInfoSection formData={formData} handleChange={handleChange} />
      <ContactSection formData={formData} handleChange={handleChange} />
      <ProfessionalSection formData={formData} handleChange={handleChange} />
      <SecuritySection formData={formData} handleChange={handleChange} />
      
      <TermsSection formData={formData} handleChange={handleChange} />

      <button
        type="submit"
        className="signup-btn"
        disabled={isLoading}
      >
        {isLoading
          ? (language === 'mg' ? 'Mamorona...' : 'Création en cours...')
          : (language === 'mg' ? 'Hanokatra ny kaontiko' : 'Créer mon compte')
        }
      </button>
    </form>
  );
}

export default SignupForm;