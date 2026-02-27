// src/mockData/operationsData.js

export const operationalStats = {
  creditsActifs: { value: "342", label: { fr: "Crédits Actifs", mg: "Trosa Mavitrika" } },
  echeancesJ3: { value: "28", label: { fr: "Échéances J-3", mg: "Fandoavam-bola J-3" }, type: "warning" },
  retardsPaiement: { value: "12", label: { fr: "Retards de Paiement", mg: "Fahatarana Fandoavam-bola" }, type: "danger" },
  encoursTotal: { value: "2.1B Ar", label: { fr: "Encours Total", mg: "Trosa Tanteraka" } },
  tauxRecouvrement: { value: "96.8%", label: { fr: "Taux de Recouvrement", mg: "Tahan'ny Famerenana" } }
};

export const creditsAttention = [
  {
    id: 1,
    client: "Rakoto Fidy",
    creditRef: "CR-2026-001",
    montant: "25M Ar",
    resteDu: "18.5M Ar",
    prochaineEcheance: { date: "25 Jan 2026", montant: "1.2M Ar" },
    statut: "overdue",
    joursRetard: 7,
    actions: ["relancer", "details"]
  },
  {
    id: 2,
    client: "Andry Miora",
    creditRef: "CR-2026-015",
    montant: "15M Ar",
    resteDu: "12.8M Ar",
    prochaineEcheance: { date: "24 Jan 2026", montant: "850K Ar" },
    statut: "warning",
    joursRetard: 2,
    actions: ["contacter", "details"]
  },
  {
    id: 3,
    client: "Razafy Naina",
    creditRef: "CR-2026-032",
    montant: "40M Ar",
    resteDu: "35.2M Ar",
    prochaineEcheance: { date: "26 Jan 2026", montant: "2.1M Ar" },
    statut: "active",
    joursRetard: null,
    actions: ["echeancier"]
  },
  {
    id: 4,
    client: "Rabe Hery",
    creditRef: "CR-2026-008",
    montant: "30M Ar",
    resteDu: "22.4M Ar",
    prochaineEcheance: { date: "28 Jan 2026", montant: "1.5M Ar" },
    statut: "active",
    joursRetard: null,
    actions: ["echeancier"]
  }
];

export const systemAlerts = [
  {
    id: 1,
    type: "danger",
    title: { fr: "Retard Critique", mg: "Fahatarana Lehibe" },
    description: { fr: "Rakoto Fidy - 7 jours de retard sur 1.2M Ar", mg: "Rakoto Fidy - 7 andro tara amin'ny 1.2M Ar" },
    action: { fr: "Action", mg: "Hetsika" }
  },
  {
    id: 2,
    type: "danger",
    title: { fr: "Retard Critique", mg: "Fahatarana Lehibe" },
    description: { fr: "Rasoamalala - 5 jours de retard sur 800K Ar", mg: "Rasoamalala - 5 andro tara amin'ny 800K Ar" },
    action: { fr: "Action", mg: "Hetsika" }
  },
  {
    id: 3,
    type: "warning",
    title: { fr: "Échéance Proche", mg: "Fandoavam-bola akaiky" },
    description: { fr: "28 clients avec échéance dans 3 jours", mg: "Mpanjifa 28 manana fandoavam-bola ao anatin'ny 3 andro" },
    action: { fr: "Voir Liste", mg: "Jereo ny lisitra" }
  },
  {
    id: 4,
    type: "warning",
    title: { fr: "Limite Encours", mg: "Fetra Trosa" },
    description: { fr: "Encours à 85% de la limite autorisée", mg: "Trosa 85% amin'ny fetra azo atao" },
    action: { fr: "Analyser", mg: "Hadinihina" }
  },
  {
    id: 5,
    type: "danger",
    title: { fr: "Paiement Manqué", mg: "Tsy nahomby ny fandoavana" },
    description: { fr: "Andrianina - Paiement automatique échoué", mg: "Andrianina - Tsy nahomby ny fandoavana mandeha ho azy" },
    action: { fr: "Contacter", mg: "Hifandray" }
  }
];

export const operationalKPIs = {
  tauxRecouvrement: { value: 96.8, label: { fr: "Taux de Recouvrement", mg: "Tahan'ny Famerenana" } },
  retards30jours: { value: 2.1, label: { fr: "Retards > 30 jours", mg: "Fahatarana > 30 andro" }, type: "danger" },
  utilisationEncours: { value: 85.2, label: { fr: "Utilisation Encours", mg: "Fampiasana Trosa" }, type: "warning" },
  delaiTraitement: { value: "24h", label: { fr: "Délai Moyen Traitement", mg: "Fotoana antonony fanodinana" } },
  slaRespecte: { value: "98.5%", label: { fr: "SLA Respecté", mg: "SLA voahaja" } },
  nouveauxCredits: { value: "156", label: { fr: "Nouveaux Crédits/Mois", mg: "Trosa vaovao/isam-bolana" } }
};

export const dailySchedule = {
  date: { fr: "22 Janvier 2026", mg: "22 Janoary 2026" },
  total: { count: 45, montant: "68.5M Ar" },
  paye: { count: 32, montant: "52.8M Ar", color: "#2ed573" },
  enAttente: { count: 8, montant: "12.1M Ar", color: "#ffa502" },
  enRetard: { count: 5, montant: "3.6M Ar", color: "#ff4757" }
};

export const userInfo = {
  name: "Randria Paul",
  role: { fr: "Dir. Opérations", mg: "Talen'ny Asa" },
  avatar: "●"
};