// src/mockData/dgData.js

// 1. Executive Summary
export const executiveSummary = {
  encoursTotal: { 
    value: "2.1B Ar", 
    trend: "+12.5%", 
    positive: true,
    label: { fr: "Encours Total", mg: "Totaliny" }
  },
  creditsActifs: { 
    value: "342", 
    trend: "+8.2%", 
    positive: true,
    label: { fr: "Crédits Actifs", mg: "Trosa Mavitrika" }
  },
  tauxRecouvrement: { 
    value: "96.8%", 
    trend: "+1.2%", 
    positive: true,
    label: { fr: "Taux Recouvrement", mg: "Tahan'ny Fandoavana" }
  },
  tauxConversion: { 
    value: "18.5%", 
    trend: "+2.1%", 
    positive: true,
    label: { fr: "Taux Conversion", mg: "Tahan'ny Fiovana" }
  },
  roiMarketing: { 
    value: "4.2x", 
    trend: "+0.3", 
    positive: true,
    label: { fr: "ROI Marketing", mg: "ROI Marketing" }
  }
};

// 2. Performance Data
export const performanceData = {
  mois: { fr: "Janvier 2026", mg: "Janoary 2026" },
  nouveauxCredits: "365M Ar",
  nouveauxClients: "156",
  delaiMoyen: "24h",
  graphique: { 
    fr: "Graphique de Performance Mensuelle", 
    mg: "Sarin'ny Fahombiazana Isam-bolana" 
  },
  labels: {
    nouveauxCredits: { fr: "Nouveaux Crédits", mg: "Trosa Vaovao" },
    nouveauxClients: { fr: "Nouveaux Clients", mg: "Mpanjifa Vaovao" },
    delaiMoyen: { fr: "Délai Moyen", mg: "Fotoana Antonontonony" }
  }
};

// 3. Executive Alerts
export const executiveAlerts = [
  {
    type: "critical",
    icon: "▲",
    title: { fr: "Encours Limite", mg: "Fetra Totaliny" },
    description: { 
      fr: "85% de la limite réglementaire atteinte",
      mg: "85% amin'ny fetra ara-dalàna no tratra"
    }
  },
  {
    type: "warning",
    icon: "▲",
    title: { fr: "Croissance Forte", mg: "Fitomboana Lehibe" },
    description: { 
      fr: "+23% nouveaux clients ce mois",
      mg: "+23% mpanjifa vaovao ity volana ity"
    }
  },
  {
    type: "info",
    icon: "●",
    title: { fr: "Objectif Atteint", mg: "Tanjon'ny Nahatratra" },
    description: { 
      fr: "ROI Marketing dépasse les prévisions",
      mg: "Mihoatra ny vinavina ny ROI Marketing"
    }
  },
  {
    type: "critical",
    icon: "⏰",
    title: { fr: "Retards Critiques", mg: "Fahatarana Mavesatra" },
    description: { 
      fr: "12 clients avec retards > 7 jours",
      mg: "Mpanjifa 12 mihoatra ny 7 andro no tara"
    }
  }
];

// 4. Strategic Objectives
export const strategicObjectives = [
  {
    title: { fr: "Croissance Encours", mg: "Fitomboan'ny Totaliny" },
    current: "2.1B Ar",
    target: "3B Ar",
    progress: 70,
    status: "excellent"
  },
  {
    title: { fr: "Nouveaux Clients", mg: "Mpanjifa Vaovao" },
    current: "1247",
    target: "2000",
    progress: 62,
    status: "excellent"
  },
  {
    title: { fr: "Taux Recouvrement", mg: "Tahan'ny Fandoavana" },
    current: "96.8%",
    target: "98%",
    progress: 98.8,
    status: "warning"
  },
  {
    title: { fr: "Digitalisation", mg: "Fampiharana Teknolojia" },
    current: "73%",
    target: "90%",
    progress: 81,
    status: "warning"
  }
];

// 5. Risk Analysis
export const riskAnalysis = {
  global: {
    level: { fr: "MODÉRÉ", mg: "ANTONONTONONY" },
    status: "medium",
    description: { 
      fr: "Surveillance Renforcée",
      mg: "Fanaraha-maso Fanampiny"
    }
  },
  credit: {
    name: { fr: "Risque de Crédit", mg: "Loza momba ny Trosa" },
    value: 15,
    detail: { 
      fr: "Taux de défaut: 2.1% (Limite: 5%)",
      mg: "Tahan'ny tsy fandoavana: 2.1% (Fetra: 5%)"
    },
    status: "warning"
  },
  liquidity: {
    name: { fr: "Risque de Liquidité", mg: "Loza momba ny Vola" },
    value: 8,
    detail: { 
      fr: "Ratio liquidité: 92% (Minimum: 80%)",
      mg: "Tahan'ny vola: 92% (Fetran'ny ambany: 80%)"
    },
    status: "excellent"
  },
  operational: {
    name: { fr: "Risque Opérationnel", mg: "Loza momba ny Asa" },
    value: 5,
    detail: { 
      fr: "Incidents: 3 ce mois (Tolérance: 10)",
      mg: "Olana: 3 ity volana ity (Fandeferana: 10)"
    },
    status: "excellent"
  },
  recommendation: {
    fr: "Maintenir la surveillance sur l'encours et renforcer les procédures de recouvrement.",
    mg: "Tohizo ny fanaraha-maso ny totaliny ary hamafiso ny fomba fandoavana."
  }
};

// 6. Department Performance (AJOUTÉ)
export const departmentPerformance = [
  {
    name: { fr: "Commercial", mg: "Varotra" },
    metrics: [
      { value: "156", label: { fr: "Nouveaux clients", mg: "Mpanjifa vaovao" }, color: "#2ed573" },
      { value: "73%", label: { fr: "Taux conversion", mg: "Tahan'ny fiovana" }, color: "#2ed573" }
    ]
  },
  {
    name: { fr: "Opérations", mg: "Asa" },
    metrics: [
      { value: "96.8%", label: { fr: "Taux recouvrement", mg: "Tahan'ny fandoavana" }, color: "#2ed573" },
      { value: "24h", label: { fr: "Délai traitement", mg: "Fotoana fanodinana" }, color: "#ffa502" }
    ]
  },
  {
    name: { fr: "Marketing", mg: "Marketing" },
    metrics: [
      { value: "4.2x", label: { fr: "ROI Marketing", mg: "ROI Marketing" }, color: "#2ed573" },
      { value: "18.5%", label: { fr: "Taux conversion", mg: "Tahan'ny fiovana" }, color: "#2ed573" }
    ]
  },
  {
    name: { fr: "Technologie", mg: "Teknolojia" },
    metrics: [
      { value: "99.8%", label: { fr: "Disponibilité", mg: "Fahafahana" }, color: "#2ed573" },
      { value: "2.1s", label: { fr: "Temps réponse", mg: "Fotoana valiny" }, color: "#2ed573" }
    ]
  }
];

// 7. Financial Summary
export const financialSummary = {
  monthly: {
    amount: "365M Ar",
    label: { fr: "Revenus Mensuels", mg: "Tombony isam-bolana" },
    trend: "+15.2%",
    positive: true
  },
  total: {
    amount: "2.1B Ar",
    label: { fr: "Encours Total", mg: "Totaliny" },
    trend: "+12.5%",
    positive: true
  },
  forecast: {
    title: { fr: "Prévisions Q1 2026", mg: "Vinavina Q1 2026" },
    metrics: [
      { value: "1.2B Ar", label: { fr: "Nouveaux crédits", mg: "Trosa vaovao" } },
      { value: "450", label: { fr: "Nouveaux clients", mg: "Mpanjifa vaovao" } },
      { value: "97.5%", label: { fr: "Taux recouvrement", mg: "Tahan'ny fandoavana" } }
    ]
  }
};

// 8. Recommended Actions
export const recommendedActions = [
  {
    priority: "urgent",
    title: { fr: "URGENT:", mg: "MAIKA:" },
    description: { 
      fr: "Réviser les limites d'encours avec la BCM",
      mg: "Avereno jerena ny fetran'ny totaliny miaraka amin'ny BCM"
    }
  },
  {
    priority: "important",
    title: { fr: "IMPORTANT:", mg: "ZAVA-DEHIBE:" },
    description: { 
      fr: "Renforcer l'équipe recouvrement (+2 agents)",
      mg: "Hanamafy ny ekipa mpandoa trosa (+2 mpiasa)"
    }
  },
  {
    priority: "opportunity",
    title: { fr: "OPPORTUNITÉ:", mg: "FAHASOAVANA:" },
    description: { 
      fr: "Augmenter budget marketing Herijika",
      mg: "Ampitomboy ny teti-bola marketing Herijika"
    }
  },
  {
    priority: "strategic",
    title: { fr: "STRATÉGIQUE:", mg: "STRATÉJIKA:" },
    description: { 
      fr: "Préparer expansion vers 3 nouvelles régions",
      mg: "Miomana amin'ny fanitarana any amin'ny faritra 3 vaovao"
    }
  }
];

// 9. User Info
export const userInfo = {
  name: "Rakotonirina Jean",
  role: { fr: "Directeur Général", mg: "Tale Jeneraly" },
  avatar: "👤"
};