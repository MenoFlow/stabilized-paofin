// src/mockData/clientData.js

export const clientInfo = {
  name: "Rakoto Hery",
  email: "rakoto.hery@email.com",
  phone: "+261 34 12 345 67",
  clientSince: "2025-12-15"
};

export const creditRequests = [
  {
    id: "CR-2026-045",
    status: "active",
    statusText: { fr: "ACTIF", mg: "MAVITRIKA" },
    type: "Herijika",
    montant: "25M Ar",
    duree: "24 mois",
    date: "15 janvier 2026",
    dateMG: "15 Janoary 2026"
  },
  {
    id: "CR-2026-078",
    status: "pending",
    statusText: { fr: "EN COURS", mg: "AM-PANATONTOSANA" },
    type: "Ketrika",
    montant: "15M Ar",
    duree: "18 mois",
    date: "20 janvier 2026",
    dateMG: "20 Janoary 2026"
  }
];

export const activeCredit = {
  id: "CR-2026-045",
  type: "Herijika",
  montantInitial: "25M Ar",
  capitalRestant: "18.5M Ar",
  rembourse: "6.5M Ar",
  progression: 26,
  mensualite: "1,200,000 Ar"
};

export const paymentSchedule = [
  {
    date: "25 Janvier 2026",
    dateMG: "25 Janoary 2026",
    echeance: "#6",
    montant: "1,200,000 Ar",
    status: "next",
    statusText: { fr: "À PAYER", mg: "HOVOAINA" }
  },
  {
    date: "25 Février 2026",
    dateMG: "25 Febroary 2026",
    echeance: "#7",
    montant: "1,200,000 Ar",
    status: "scheduled",
    statusText: { fr: "PROGRAMMÉ", mg: "VOALAMINA" }
  },
  {
    date: "25 Mars 2026",
    dateMG: "25 Martsa 2026",
    echeance: "#8",
    montant: "1,200,000 Ar",
    status: "scheduled",
    statusText: { fr: "PROGRAMMÉ", mg: "VOALAMINA" }
  },
  {
    date: "25 Décembre 2025",
    dateMG: "25 Desambra 2025",
    echeance: "#5",
    montant: "1,200,000 Ar",
    status: "paid",
    statusText: { fr: "PAYÉ", mg: "VOALOA" }
  }
];

export const notifications = [
  {
    id: 1,
    icon: "$",
    title: { fr: "Échéance dans 3 jours", mg: "Fandoavam-bola ao anatin'ny 3 andro" },
    text: { fr: "Votre prochaine échéance de 1,200,000 Ar est due le 25 janvier", mg: "Ny fandoavam-bola manaraka 1,200,000 Ar dia tokony haloa ny 25 Janoary" },
    time: { fr: "Il y a 2h", mg: "2 ora lasa izay" },
    unread: true
  },
  {
    id: 2,
    icon: "Play",
    title: { fr: "Paiement confirmé", mg: "Fandoavana voamarina" },
    text: { fr: "Votre paiement de 1,200,000 Ar a été traité avec succès", mg: "Ny fandoavana 1,200,000 Ar dia voaray soa aman-tsara" },
    time: { fr: "Il y a 1 jour", mg: "1 andro lasa izay" },
    unread: false
  },
  {
    id: 3,
    icon: "■",
    title: { fr: "Nouvelle demande en cours", mg: "Fangatahana vaovao" },
    text: { fr: "Votre demande de crédit Ketrika est en cours d'analyse", mg: "Ny fangatahana trosa Ketrika dia am-panadinana" },
    time: { fr: "Il y a 2 jours", mg: "2 andro lasa izay" },
    unread: false
  },
  {
    id: 4,
    icon: "✓",
    title: { fr: "Crédit approuvé", mg: "Trosa nekena" },
    text: { fr: "Félicitations ! Votre crédit Herijika a été approuvé", mg: "Arahabaina ! Neken ny trosa Herijika" },
    time: { fr: "Il y a 1 semaine", mg: "1 herinandro lasa izay" },
    unread: false
  }
];

export const documents = [
  {
    id: "contract",
    icon: "■",
    name: { fr: "Contrat de Crédit", mg: "Fanekena Trosa" },
    date: "15 Jan 2026",
    dateMG: "15 Jan 2026"
  },
  {
    id: "schedule",
    icon: "■",
    name: { fr: "Échéancier", mg: "Fandaharam-potoana" },
    date: "15 Jan 2026",
    dateMG: "15 Jan 2026"
  },
  {
    id: "statement",
    icon: "▲",
    name: { fr: "Relevé de Compte", mg: "Tatitry ny Kaonty" },
    date: "22 Jan 2026",
    dateMG: "22 Jan 2026"
  },
  {
    id: "insurance",
    icon: "Shield",
    name: { fr: "Attestation Assurance", mg: "Fanekena Antoka" },
    date: "15 Jan 2026",
    dateMG: "15 Jan 2026"
  },
  {
    id: "payment",
    icon: "Receipt",
    name: { fr: "Reçus de Paiement", mg: "Tsatia Fandoavana" },
    date: "25 Déc 2025",
    dateMG: "25 Des 2025"
  },
  {
    id: "upload",
    icon: "Upload",
    name: { fr: "Télécharger Document", mg: "Hampiditra antontan-taratasy" },
    date: { fr: "Nouveau", mg: "Vaovao" },
    isUpload: true
  }
];

export const supportInfo = {
  phone: "+261 20 22 123 45",
  email: "support@paofin.mg",
  hours: { fr: "Lundi - Vendredi, 8h - 17h", mg: "Alatsinainy - Zoma, 8h - 17h" },
  address: { fr: "Antananarivo, Madagascar", mg: "Antananarivo, Madagasikara" }
};

export const paositraMoney = {
  title: { fr: "PAOSITRA MONEY - Paiements Sécurisés", mg: "PAOSITRA MONEY - Fandoavana Azo Antoka" },
  benefits: [
    { fr: "Paiements instantanés et sécurisés", mg: "Fandoavana haingana sy azo antoka" },
    { fr: "Interface simple et intuitive", mg: "Fampiasana mora sy tsotra" },
    { fr: "Confirmations SMS et email", mg: "Fanamafisana amin'ny SMS sy mailaka" },
    { fr: "Historique complet des transactions", mg: "Tantaran'ny fifampiraharahana feno" }
  ],
  apiInfo: {
    title: { fr: "Intégration API", mg: "Fampidirana API" },
    description: { fr: "Intégration complète disponible", mg: "Fampidirana feno misy" },
    url: "paositramoney.mg"
  }
};