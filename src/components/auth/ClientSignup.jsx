// src/components/ClientSignup.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // IMPORTANT: Ajouter cet import

function ClientSignup({ data, language }) {
  return (
    <div className="client-signup">
      <div className="signup-title">{data.title[language]}</div>
      <div className="signup-description">{data.description[language]}</div>
      
      {data.buttons.map((button, index) => (
        // Remplacer <a> par <Link>
        <Link
          key={index}
          to={button.link} // 'href' devient 'to'
          className={button.className}
        >
          {button.text[language]}
        </Link>
      ))}
    </div>
  );
}

export default ClientSignup;