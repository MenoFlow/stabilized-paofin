// src/components/client/PaymentSchedule.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getPaymentItemClass, getPaymentStatusStyle } from '../../utils/clientUtils';

function PaymentSchedule({ schedule, onMakePayment }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>{language === 'fr' ? '▶ Mes Prochaines Échéances' : '▶ Ny fandoavam-bola manaraka'}</h3>

      <div className="payment-schedule">
        {schedule.map((payment, index) => (
          <div key={index} className={getPaymentItemClass(payment.status)}>
            <div>
              <div className="payment-date">{language === 'fr' ? payment.date : payment.dateMG}</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                {language === 'fr' ? `Échéance ${payment.echeance}` : `Fandoavana ${payment.echeance}`}
              </div>
            </div>
            <div>
              <div className="payment-amount">{payment.montant}</div>
              <div className="payment-status" style={getPaymentStatusStyle(payment.status)}>
                {payment.statusText[language]} {/* CORRIGÉ: utilisation de language */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-success" style={{ width: '100%', marginTop: '1rem' }} onClick={onMakePayment}>
        {language === 'fr' 
          ? `■ Payer avec PAOSITRA MONEY - ${schedule[0].montant}`
          : `■ Aloavy amin'ny PAOSITRA MONEY - ${schedule[0].montant}`
        }
      </button>
    </div>
  );
}

export default PaymentSchedule;