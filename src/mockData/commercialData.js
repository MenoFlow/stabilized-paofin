// src/mockData/commercialData.js

export const quickStats = [
  {
    id: 'hotLeads',
    value: "24",
    label: { fr: "Leads Chauds", mg: "Mpanjifa Mafana" }
  },
  {
    id: 'rdvToday',
    value: "8",
    label: { fr: "RDV Aujourd'hui", mg: "Fihaonana Androany" }
  },
  {
    id: 'pipeline',
    value: "156M Ar",
    label: { fr: "Pipeline ce mois", mg: "Fandalovana ity volana ity" }
  },
  {
    id: 'conversion',
    value: "73%",
    label: { fr: "Taux de conversion", mg: "Tahan'ny fiovana" }
  }
];

export const hotLeads = [
  {
    id: 1,
    name: "Rabe Hery",
    phone: "+261 34 12 345 67",
    montant: "25M Ar",
    score: 850,
    priority: "high",
    priorityText: { fr: "URGENT", mg: "MAIKA" },
    lastAction: { fr: "Simulation il y a 2h", mg: "Simulation 2 ora lasa izay" },
    actions: ["appeler", "rdv"]
  },
  {
    id: 2,
    name: "Andry Miora",
    phone: "+261 33 98 765 43",
    montant: "15M Ar",
    score: 720,
    priority: "medium",
    priorityText: { fr: "MOYEN", mg: "ANTONONY" },
    lastAction: { fr: "Documents soumis hier", mg: "Antontan-taratasy natolotra omaly" },
    actions: ["appeler", "rdv"]
  },
  {
    id: 3,
    name: "Razafy Naina",
    phone: "+261 32 55 123 89",
    montant: "40M Ar",
    score: 680,
    priority: "high",
    priorityText: { fr: "URGENT", mg: "MAIKA" },
    lastAction: { fr: "Relance nécessaire", mg: "Mila averina" },
    actions: ["appeler", "rdv"]
  },
  {
    id: 4,
    name: "Rakoto Fidy",
    phone: "+261 34 77 654 32",
    montant: "8M Ar",
    score: 590,
    priority: "low",
    priorityText: { fr: "FAIBLE", mg: "AMBANY" },
    lastAction: { fr: "En attente documents", mg: "Miandry antontan-taratasy" },
    actions: ["appeler", "rdv"]
  }
];

export const calendarData = {
  month: { fr: "Janvier 2026", mg: "Janoary 2026" },
  days: [
    { day: "L", label: { fr: "L", mg: "L" } },
    { day: "M", label: { fr: "M", mg: "M" } },
    { day: "M", label: { fr: "M", mg: "M" } },
    { day: "J", label: { fr: "J", mg: "J" } },
    { day: "V", label: { fr: "V", mg: "V" } },
    { day: "S", label: { fr: "S", mg: "S" } },
    { day: "D", label: { fr: "D", mg: "D" } }
  ],
  dates: [
    { day: 1, hasAppointment: false, isToday: false },
    { day: 2, hasAppointment: false, isToday: false },
    { day: 3, hasAppointment: false, isToday: false },
    { day: 4, hasAppointment: false, isToday: false },
    { day: 5, hasAppointment: false, isToday: false },
    { day: 6, hasAppointment: false, isToday: false },
    { day: 7, hasAppointment: false, isToday: false },
    { day: 8, hasAppointment: false, isToday: false },
    { day: 9, hasAppointment: false, isToday: false },
    { day: 10, hasAppointment: false, isToday: false },
    { day: 11, hasAppointment: false, isToday: false },
    { day: 12, hasAppointment: false, isToday: false },
    { day: 13, hasAppointment: false, isToday: false },
    { day: 14, hasAppointment: false, isToday: false },
    { day: 15, hasAppointment: false, isToday: false },
    { day: 16, hasAppointment: false, isToday: false },
    { day: 17, hasAppointment: false, isToday: false },
    { day: 18, hasAppointment: false, isToday: false },
    { day: 19, hasAppointment: false, isToday: false },
    { day: 20, hasAppointment: false, isToday: false },
    { day: 21, hasAppointment: false, isToday: false },
    { day: 22, hasAppointment: true, isToday: true },
    { day: 23, hasAppointment: true, isToday: false },
    { day: 24, hasAppointment: false, isToday: false },
    { day: 25, hasAppointment: true, isToday: false },
    { day: 26, hasAppointment: false, isToday: false },
    { day: 27, hasAppointment: false, isToday: false },
    { day: 28, hasAppointment: false, isToday: false }
  ]
};

export const appointmentsToday = [
  {
    id: 1,
    time: "09:00",
    client: "Rabe Hery",
    montant: "25M Ar",
    description: { fr: "Finalisation crédit", mg: "Famaranana trosa" }
  },
  {
    id: 2,
    time: "14:30",
    client: "Andry Miora",
    montant: "15M Ar",
    description: { fr: "Première rencontre", mg: "Fihaonana voalohany" }
  },
  {
    id: 3,
    time: "16:00",
    client: "Razafy Naina",
    montant: "40M Ar",
    description: { fr: "Négociation conditions", mg: "Fifampiraharahana fepetra" }
  }
];

export const monthlyPerformance = {
  objectif: "500M Ar",
  realise: "365M Ar",
  pourcentage: 73,
  produits: [
    { name: "Herijika", montant: "180M Ar", label: { fr: "Équipements", mg: "Fitaovana" } },
    { name: "Ketrika", montant: "125M Ar", label: { fr: "Personnel", mg: "Manokana" } },
    { name: "Marketplace", montant: "60M Ar", label: { fr: "Marketplace", mg: "Marketplace" } }
  ]
};

export const userInfo = {
  name: "Rakoto Jean",
  role: { fr: "Agent Commercial", mg: "Mpivarotra" },
  avatar: "@"
};