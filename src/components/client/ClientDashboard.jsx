// src/components/client/ClientDashboard.jsx
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Header from '../common/Header';
import LanguageToggle from '../common/LanguageToggle';
import WelcomeSection from './WelcomeSection';
import QuickActions from './QuickActions';
import CreditRequests from './CreditRequests';
import ActiveCredit from './ActiveCredit';
import PaymentSchedule from './PaymentSchedule';
import Notifications from './Notifications';
import Documents from './Documents';
import SupportSection from './SupportSection';
import PaositraMoney from './PaositraMoney';
import { useClient } from '../../hooks/useClient';
import '../../styles/client/ClientDashboard.css';

function ClientDashboard() {
  const { language } = useLanguage();
  
  const {
    clientInfo,
    creditRequests,
    activeCredit,
    paymentSchedule,
    notifications,
    documents,
    supportInfo,
    paositraMoney,
    unreadCount,
    markAsRead,
    getDateByLanguage
  } = useClient();

  useEffect(() => {
    // Mettre à jour le titre de la page avec le nombre de notifications non lues
    if (unreadCount > 0) {
      document.title = `VINA - ${language === 'fr' ? 'Mon Espace Client' : 'Toeran\'ny Mpanjifa'} (${unreadCount})`;
    } else {
      document.title = `VINA - ${language === 'fr' ? 'Mon Espace Client' : 'Toeran\'ny Mpanjifa'}`;
    }
  }, [unreadCount, language]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const handleSimulate = () => {
    alert(language === 'mg' 
      ? 'Fandefasana mankany amin\'ny simulation trosa...' 
      : 'Redirection vers le simulateur de crédit...');
  };

  const handlePayment = () => {
    if (window.confirm(language === 'mg' 
      ? 'Manao fandoavana 1,200,000 Ar amin\'ny PAOSITRA MONEY ?'
      : 'Effectuer le paiement de 1,200,000 Ar via PAOSITRA MONEY ?')) {
      
      alert(language === 'mg' 
        ? '▶ Fandoavana amin\'ny PAOSITRA MONEY...\n\nFandoavana azo antoka...'
        : '▶ Redirection vers PAOSITRA MONEY...\n\nPaiement sécurisé en cours...');
      
      // Simulation du paiement
      setTimeout(() => {
        alert(language === 'mg'
          ? '▶ Fandoavana vita soa aman-tsara !\n\nFanamafisana alefa amin\'ny mailaka sy SMS'
          : '▶ Paiement effectué avec succès !\n\nConfirmation envoyée par email et SMS');
      }, 2000);
    }
  };

  const handleDownload = () => {
    alert(language === 'mg'
      ? 'Fisintonana ny tatitry ny kaonty...\n\nNy rakitra dia ho ao amin\'ny lahatahiry misintona.'
      : 'Téléchargement du relevé de compte en cours...\n\nLe fichier sera dans votre dossier téléchargements.');
  };

  const handleSupport = () => {
    alert(language === 'mg'
      ? 'Fifandraisana:\n\n@ +261 20 22 123 45\n@ support@paofin.mg'
      : 'Options de contact:\n\n@ +261 20 22 123 45\n@ support@paofin.mg');
  };

  const handleViewAllRequests = () => {
    alert(language === 'mg' ? 'Jereo ny fangatahana rehetra' : 'Voir toutes les demandes');
  };

  const handleViewCreditDetails = () => {
    alert(language === 'mg' ? 'Jereo ny antsipirian\'ny trosa' : 'Voir détails du crédit');
  };

  const handleNotificationClick = (id) => {
    markAsRead(id);
  };

  const handleDocumentDownload = (docId) => {
    const docNames = {
      contract: language === 'fr' ? 'Contrat de Crédit' : 'Fanekena Trosa',
      schedule: language === 'fr' ? 'Échéancier' : 'Fandaharam-potoana',
      statement: language === 'fr' ? 'Relevé de Compte' : 'Tatitry ny Kaonty',
      insurance: language === 'fr' ? 'Attestation Assurance' : 'Fanekena Antoka',
      payment: language === 'fr' ? 'Reçus de Paiement' : 'Tsatia Fandoavana'
    };
    
    alert(language === 'mg'
      ? `Fisintonana: ${docNames[docId]}\n\nHo azo afaka fotoana fohy.`
      : `Téléchargement: ${docNames[docId]}\n\nDisponible dans quelques instants.`);
  };

  const handleDocumentUpload = () => {
    alert(language === 'mg'
      ? 'Fampidirana antontan-taratasy:\n\n• Porofon\'ny fidiram-bola\n• Kara-panondro\n• Antontan-taratasy hafa'
      : 'Téléchargement de documents:\n\n• Justificatifs de revenus\n• Pièces d\'identité\n• Autres documents requis');
  };

  const handleChat = () => {
    alert(language === 'mg'
      ? '💬 Resaka an-tserasera\n\nMifandray amin\'ny service client...'
      : '💬 Chat en ligne\n\nConnexion au service client...');
  };

  const handleScheduleCall = () => {
    alert(language === 'mg'
      ? '● Fandaminana fotoana\n\nFandefasana mankany amin\'ny kalandrie...'
      : '● Prise de rendez-vous\n\nRedirection vers le calendrier...');
  };

  const handleFAQ = () => {
    alert(language === 'mg'
      ? '❓ Fanontaniana matetika\n\n• Ahoana no fandoavana ?\n• Ahoana no fanovana fandaharam-potoana ?\n• Inona no atao raha tara ?'
      : '❓ Foire Aux Questions\n\n• Comment effectuer un paiement ?\n• Comment modifier mon échéancier ?\n• Que faire en cas de retard ?');
  };

  const handleLearnMorePaositra = () => {
    alert(language === 'mg'
      ? '$ PAOSITRA MONEY\n\n● paositramoney.mg\n\n▶ Tombontsoa:\n• Fandoavana haingana\n• Fiarovana avo lenta\n• Saran-dalana kely'
      : '$ PAOSITRA MONEY\n\n● Site web: paositramoney.mg\n\n▶ Avantages:\n• Paiements instantanés\n• Sécurité renforcée\n• Frais réduits');
  };

  return (
    <>
      <LanguageToggle />
      
      <Header 
        user={{
          name: clientInfo.name,
          // CORRECTION: Utiliser une chaîne directement au lieu d'un objet
          role: language === 'fr' ? 'Client' : 'Mpanjifa',
          avatar: '@'
        }}
        onLogout={handleLogout}
      />

      <div className="container">
        <WelcomeSection clientName={clientInfo.name} />
        
        <QuickActions 
          onSimulate={handleSimulate}
          onPayment={handlePayment}
          onDownload={handleDownload}
          onSupport={handleSupport}
        />

        <div className="dashboard-grid">
          <CreditRequests 
            requests={creditRequests}
            onViewAll={handleViewAllRequests}
          />
          
          <ActiveCredit 
            credit={activeCredit}
            onViewDetails={handleViewCreditDetails}
          />

          <PaymentSchedule 
            schedule={paymentSchedule}
            onMakePayment={handlePayment}
          />

          <Notifications 
            notifications={notifications}
            onNotificationClick={handleNotificationClick}
          />
        </div>

        <Documents 
          documents={documents}
          onDownload={handleDocumentDownload}
          onUpload={handleDocumentUpload}
        />

        <SupportSection 
          supportInfo={supportInfo}
          onChat={handleChat}
          onSchedule={handleScheduleCall}
          onFAQ={handleFAQ}
        />

        <PaositraMoney 
          data={paositraMoney}
          onLearnMore={handleLearnMorePaositra}
        />
      </div>
    </>
  );
}

export default ClientDashboard;