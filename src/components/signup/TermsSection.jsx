// src/components/signup/TermsSection.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { termsContent } from '../../mockData/signupData';

function TermsSection({ formData, handleChange }) {
  const { language } = useLanguage();

  return (
    <>
      <div className="checkbox-group">
        <input
          type="checkbox"
          className="checkbox-input"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          required
        />
        <label className="checkbox-label" htmlFor="terms">
          {termsContent.accept[language]}
          <a href="#">{termsContent.termsLink[language]}</a>
          {termsContent.and[language]}
          <a href="#">{termsContent.privacyLink[language]}</a>
        </label>
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          className="checkbox-input"
          id="newsletter"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
        <label className="checkbox-label" htmlFor="newsletter">
          {termsContent.newsletter[language]}
        </label>
      </div>
    </>
  );
}

export default TermsSection;