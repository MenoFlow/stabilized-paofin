import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoTranslations } from '../../mockData/demoTranslations';
import '../../styles/demo/CreditAnalysisModal.css';

function CreditAnalysisModal({ 
  show, 
  onClose, 
  selectedProduct,
  amountDisplay,
  durationDisplay,
  monthlyPayment,
  rav,
  debtRatio,
  capacity,
  formatAmount 
}) {
  const { language } = useLanguage();
  const t = demoTranslations.analysisModal;

  if (!show) return null;

  const getStatusMessage = () => {
    if (rav < 500000) {
      return {
        icon: '■',
        color: '#e74c3c',
        title: t.riskProfile[language],
        message: t.insufficientRav[language]
      };
    } else if (debtRatio <= 33) {
      return {
        icon: '✓',
        color: '#2ecc71',
        title: t.excellentProfile[language],
        message: t.excellentMessage[language]
      };
    } else if (debtRatio <= 45) {
      return {
        icon: '▲',
        color: '#f39c12',
        title: t.acceptableProfile[language],
        message: t.acceptableMessage[language]
      };
    } else {
      return {
        icon: '■',
        color: '#e74c3c',
        title: t.riskProfile[language],
        message: t.riskMessage[language]
      };
    }
  };

  const status = getStatusMessage();

  return (
    <div className="credit-analysis-overlay" onClick={onClose}>
      <div className="credit-analysis-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        <h2 className="modal-title">
          {t.title[language]} {selectedProduct.toUpperCase()}
        </h2>

        <div className="modal-content">
          <div className="info-row">
            <span className="info-label">{t.amount[language]}</span>
            <span className="info-value">{amountDisplay}</span>
          </div>

          <div className="info-row">
            <span className="info-label">{t.duration[language]}</span>
            <span className="info-value">{durationDisplay}</span>
          </div>

          <div className="info-row">
            <span className="info-label">{t.monthlyPayment[language]}</span>
            <span className="info-value highlight">{formatAmount(monthlyPayment)}</span>
          </div>

          <div className="info-row">
            <span className="info-label">{t.rav[language]}</span>
            <span className="info-value">{formatAmount(rav)}</span>
          </div>

          <div className="info-row">
            <span className="info-label">{t.debtRatio[language]}</span>
            <span className="info-value">{debtRatio.toFixed(1)}%</span>
          </div>

          <div className="payment-info">
            <p className="payment-title">$ {t.payment[language]}</p>
            <p className="payment-subtitle">● paositramoney.mg - {t.apiAvailable[language]}</p>
          </div>

          <div className="capacity-section">
            <div className="capacity-label">{t.capacity[language]}</div>
            <div className="capacity-bar">
              <div 
                className="capacity-fill" 
                style={{ 
                  width: `${capacity}%`,
                  backgroundColor: status.color
                }}
              ></div>
            </div>
            <div className="capacity-value">{capacity.toFixed(0)}%</div>
          </div>

          <div className="status-message" style={{ borderColor: status.color }}>
            <div className="status-icon" style={{ color: status.color }}>{status.icon}</div>
            <div className="status-content">
              <h3 style={{ color: status.color }}>{status.title}</h3>
              <p>{status.message}</p>
            </div>
          </div>
        </div>

        <button className="modal-action-btn" onClick={onClose}>
          {t.closeBtn[language]}
        </button>
      </div>
    </div>
  );
}

export default CreditAnalysisModal;
