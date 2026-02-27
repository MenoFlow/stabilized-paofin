// src/mockData/loginData.js
export const loginCards = [
  {
    id: 'dg',
    icon: '🏢',
    title: {
      fr: 'Direction Générale',
      mg: 'Fitantanana Ankapobeny'
    },
    description: {
      fr: 'Accès aux tableaux de bord exécutifs et aux KPIs stratégiques',
      mg: 'Fidirana amin\'ny tondriky mpanatanteraka sy ny KPI paikady'
    },
    placeholder: 'directeur.general@paofin.mg',
    dashboard: 'dashboard-dg.html'
  },
  {
    id: 'operations',
    icon: '⚙️',
    title: {
      fr: 'Directeur Opérations',
      mg: 'Talen\'ny Asa'
    },
    description: {
      fr: 'Gestion des crédits actifs, alertes et suivi opérationnel',
      mg: 'Fitantanana ny trosa mavitrika, fampilazana ary fanaraha-maso ny asa'
    },
    placeholder: 'directeur.operations@paofin.mg',
    dashboard: 'dashboard-operations.html'
  },
  {
    id: 'marketing',
    icon: '📊',
    title: {
      fr: 'Marketing & Commercial',
      mg: 'Marketing sy Varotra'
    },
    description: {
      fr: 'Analyse des performances marketing et suivi des conversions',
      mg: 'Famakafakana ny fahombiazana marketing sy fanaraha-maso ny fiovana'
    },
    placeholder: 'directeur.marketing@paofin.mg',
    dashboard: 'dashboard-marketing.html'
  },
  {
    id: 'commercial',
    icon: '👤',
    title: {
      fr: 'Agent Commercial',
      mg: 'Mpivarotra'
    },
    description: {
      fr: 'Suivi des leads, gestion des rendez-vous et pipeline de ventes',
      mg: 'Fanaraha-maso ny mpanjifa, fitantanana ny fotoana fihaonana ary fandalovan\'ny varotra'
    },
    placeholder: 'agent.commercial@paofin.mg',
    dashboard: 'dashboard-commercial.html'
  }
];

// src/mockData/loginData.js
export const clientSection = {
  title: {
    fr: '@ Espace Client',
    mg: '@ Toeran\'ny Mpanjifa'
  },
  description: {
    fr: 'Créez votre compte client pour accéder à nos services de crédit',
    mg: 'Mamorona ny kaontinao mpanjifa mba hahazoana ny tolotra fampindramam-bola'
  },
  buttons: [
    {
      text: { fr: 'Créer un compte', mg: 'Mamorona kaonty' },
      link: '/signup',
      className: 'signup-btn'
    },
    {
      text: { fr: 'Connexion Client', mg: 'Fidiran\'ny Mpanjifa' },
      link: '/espace-client',
      className: 'signup-btn demo-btn'
    },
    {
      text: { fr: 'Démo Mobile', mg: 'Demo Finday' },
      link: '/demo', // Chemin vers la page demo
      className: 'signup-btn demo-btn'
    }
  ]
};