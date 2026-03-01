// src/mockData/marketingData.js

export const marketingStats = [
  {
    id: 'visiteurs',
    value: "2,847",
    label: { fr: "Visiteurs/Mois", mg: "Mpitsidika/isam-bolana" },
    trend: "+23%",
    trendUp: true
  },
  {
    id: 'conversion',
    value: "18.5%",
    label: { fr: "Taux Conversion", mg: "Tahan'ny fiovana" },
    trend: "+2.1%",
    trendUp: true
  },
  {
    id: 'nouveauxClients',
    value: "156",
    label: { fr: "Nouveaux Clients", mg: "Mpanjifa vaovao" },
    trend: "+15%",
    trendUp: true
  },
  {
    id: 'cac',
    value: "2,450 Ar",
    label: { fr: "Coût/Acquisition", mg: "Vidin'ny fahazoana mpanjifa" },
    trend: "-8%",
    trendUp: false
  },
  {
    id: 'roi',
    value: "4.2",
    label: { fr: "ROI Marketing", mg: "ROI Marketing" },
    trend: "+0.3",
    trendUp: true
  },
  {
    id: 'satisfaction',
    value: "73%",
    label: { fr: "Satisfaction Client", mg: "Fahafaham-po mpanjifa" },
    trend: "+5%",
    trendUp: true
  }
];

export const conversionFunnel = {
  steps: [
    { label: { fr: "Visiteurs Site/App", mg: "Mpitsidika tranokala/fampiasa" }, count: 2847, percentage: 100 },
    { label: { fr: "Simulations Crédit", mg: "Fanahafana trosa" }, count: 1420, percentage: 49.9 },
    { label: { fr: "Dossiers Complets", mg: "Rakitra feno" }, count: 684, percentage: 24.0 },
    { label: { fr: "Crédits Approuvés", mg: "Trosa nekena" }, count: 412, percentage: 14.5 },
    { label: { fr: "Crédits Déboursés", mg: "Trosa navoaka" }, count: 356, percentage: 12.5 }
  ],
  globalConversion: "12.5%",
  objectifMensuel: "15%",
  ecart: "-2.5%"
};

export const acquisitionChannels = {
  channels: [
    { icon: "■", name: { fr: "Mobile App", mg: "Fampiasa finday" }, conversion: "45%" },
    { icon: "●", name: { fr: "Site Web", mg: "Tranokala" }, conversion: "28%" },
    { icon: "Users", name: { fr: "Référencement", mg: "Fanondroana" }, conversion: "18%" },
    { icon: "Megaphone", name: { fr: "Publicité", mg: "Dokam-barotra" }, conversion: "9%" }
  ],
  performance: [
    { name: { fr: "Mobile App", mg: "Fampiasa finday" }, value: 45 },
    { name: { fr: "Site Web", mg: "Tranokala" }, value: 28 },
    { name: { fr: "Référencement", mg: "Fanondroana" }, value: 18 }
  ]
};

export const productPerformance = [
  {
    name: "Herijika",
    credits: "142",
    montant: "180M Ar",
    trend: "+25%",
    trendUp: true,
    description: { fr: "Leader avec 39% du volume", mg: "Lohalaharana amin'ny 39% ny volany" }
  },
  {
    name: "Ketrika",
    credits: "98",
    montant: "125M Ar",
    trend: "+18%",
    trendUp: true,
    description: { fr: "Croissance stable, segment personnel", mg: "Fandrosoana milamina, ho an'ny tena manokana" }
  },
  {
    name: "Marketplace",
    credits: "67",
    montant: "60M Ar",
    trend: "+8%",
    trendUp: false,
    description: { fr: "Potentiel d'amélioration", mg: "Mety hatomboka" }
  }
];

export const activeCampaigns = [
  {
    id: 1,
    name: { fr: "Campagne Herijika - Équipements Pro", mg: "Kampana Herijika - Fitaovana matihanina" },
    budget: "2.5M Ar",
    depense: "1.8M Ar",
    ctr: "3.2%",
    performance: "excellent",
    performanceText: { fr: "Excellent", mg: "Tena tsara" }
  },
  {
    id: 2,
    name: { fr: "Promo Ketrika - Crédit Personnel", mg: "Promo Ketrika - Trosa manokana" },
    budget: "1.8M Ar",
    depense: "1.2M Ar",
    ctr: "2.1%",
    performance: "good",
    performanceText: { fr: "Bon", mg: "Tsara" }
  },
  {
    id: 3,
    name: { fr: "Marketplace - Scan & Buy", mg: "Marketplace - Scan & Buy" },
    budget: "1.2M Ar",
    depense: "900K Ar",
    ctr: "1.4%",
    performance: "poor",
    performanceText: { fr: "À améliorer", mg: "Mila hatsaraina" }
  },
  {
    id: 4,
    name: { fr: "Référencement - Programme Parrain", mg: "Fanondroana - Fandaharan'asa fanolorana" },
    budget: "800K Ar",
    depense: "650K Ar",
    conversions: "45",
    performance: "excellent",
    performanceText: { fr: "Excellent", mg: "Tena tsara" }
  }
];

export const insights = {
  opportunities: [
    { fr: "Augmenter le budget Herijika (+30% ROI potentiel)", mg: "Ampitomboina ny teti-bola Herijika (+30% ROI mety)" },
    { fr: "Optimiser la campagne Marketplace (CTR faible)", mg: "Hatsaraina ny kampana Marketplace (ambany ny CTR)" },
    { fr: "Développer le canal mobile (45% des conversions)", mg: "Hampitomboina ny fantsona finday (45% ny fiovana)" }
  ],
  prediction: {
    month: { fr: "Février 2026", mg: "Febroary 2026" },
    nouveauxClients: { fr: "185 nouveaux clients (+18%)", mg: "Mpanjifa vaovao 185 (+18%)" },
    volume: { fr: "420M Ar (+15%)", mg: "420M Ar (+15%)" }
  },
  kpis: [
    { value: "85%", label: { fr: "Objectif Mensuel", mg: "Tanjona isam-bolana" } },
    { value: "4.2x", label: { fr: "ROI Moyen", mg: "ROI antonontonony" } }
  ]
};

export const userInfo = {
  name: "Raharison Marie",
  role: { fr: "Dir. Marketing", mg: "Talen'ny Marketing" },
  avatar: "User"
};