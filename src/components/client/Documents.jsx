// src/components/client/Documents.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function Documents({ documents, onDownload, onUpload }) {
  const { language } = useLanguage();

  // Fonction locale pour obtenir la date selon la langue
  const getDateText = (doc) => {
    if (doc.isUpload) {
      return language === 'fr' ? 'Nouveau' : 'Vaovao';
    }
    // Si doc.date est un objet avec fr/mg
    if (doc.date && typeof doc.date === 'object') {
      return doc.date[language];
    }
    // Si doc.dateMG existe pour le malgache
    if (language === 'mg' && doc.dateMG) {
      return doc.dateMG;
    }
    // Sinon retourner doc.date directement
    return doc.date || '';
  };

  return (
    <div className="card full-width">
      <h3>{language === 'fr' ? '📁 Mes Documents' : '📁 Ny antontan-taratasiko'}</h3>

      <div className="documents-grid">
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className="document-item" 
            onClick={() => doc.isUpload ? onUpload() : onDownload(doc.id)}
          >
            <div className="document-icon">{doc.icon}</div>
            <div className="document-name">{doc.name[language]}</div>
            <div className="document-date">{getDateText(doc)}</div> {/* CORRIGÉ */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documents;