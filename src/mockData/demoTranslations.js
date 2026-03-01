// src/mockData/demoTranslations.js
export const demoTranslations = {
  healthScore: {
    title: {
      fr: "Score de Santé Financière",
      mg: "Tahan'ny fahafahana ara-bola"
    },
    capacityLabel: {
      fr: "Capacité de crédit estimée",
      mg: "Fahafana mihindrana"
    },
    debtLabel: {
      fr: "Votre taux d'endettement",
      mg: "Tahan'ny fahafahanao mihindram-bola"
    },
    labels: [
      { fr: "Excellent<br>(0-33%)", mg: "Tsara<br>(0-33%)" },
      { fr: "Modéré<br>(33-45%)", mg: "Antonontonony<br>(33-45%)" },
      { fr: "Risqué<br>(45%+)", mg: "Mampidi-doza<br>(45%+)" }
    ]
  },
  creditParameters: {
    title: {
      fr: "Paramètres de Crédit",
      mg: "Fepetra Trosa"
    },
    amountLabel: {
      fr: "Montant souhaité",
      mg: "Vola tadiavina"
    },
    durationLabel: {
      fr: "Durée de remboursement",
      mg: "Fotoana famerenana"
    }
  },
  simulation: {
    title: {
      fr: "Simulation de Crédit",
      mg: "Fanaovana simulation crédit"
    },
    incomeLabel: {
      fr: "Revenus mensuels (Ar)",
      mg: "Fidiram-bola isam-bolana (Ar)"
    },
    expensesLabel: {
      fr: "Charges mensuelles (Ar)",
      mg: "Fandaniana isam-bolana (Ar)"
    },
    calculateBtn: {
      fr: "Calculer ma capacité",
      mg: "Kajio ny fahafahako mihindrana"
    },
    questionnaireBtn: {
      fr: "Veuillez répondre à ce questionnaire",
      mg: "Fanontaniana fanampiny"
    }
  },
  products: {
    herijika: {
      description: {
        fr: "Crédit pour équipements et matériels professionnels",
        mg: "Trosa ho an'ny fitaovana matihanina"
      }
    },
    ketrika: {
      description: {
        fr: "Crédit pour besoins personnels et familiaux",
        mg: "Trosa ho an'ny filana manokana sy fianakaviana"
      }
    }
  },
  marketplace: {
    title: {
      fr: "Nos Partenaires Marketplace",
      mg: "Ireo mpiara-miombon'antoka"
    }
  },
  qualificationPopup: {
    title: {
      fr: "Félicitations !",
      mg: "Arahabaina ianao !"
    },
    subtitle: {
      fr: "Votre demande peut être acceptée. Veuillez répondre aux questions suivantes.",
      mg: "Azo raisina ny fangatahanao. Azafady, mba valio ireto fanontaniana manaraka ireto."
    },
    otherLoansLabel: {
      fr: "Avez-vous d'autres emprunts en cours ? (Mensualité)",
      mg: "Manana famerenam-bola hafa mbola tsy tapitra ve ianao ? (Vola averina isam-bolana)"
    },
    guaranteeLabel: {
      fr: "Type de garantie",
      mg: "Antoka omena"
    },
    guarantees: {
      salary: { fr: "Salaire", mg: "Karama" },
      material: { fr: "Garantie matérielle", mg: "Antoka materialy" },
      property: { fr: "Garantie Terrain/Maison", mg: "Antoka Tany/Trano" }
    },
    cancelBtn: { fr: "Annuler", mg: "Aoka ihany" },
    confirmBtn: { fr: "Valider", mg: "Ekeo" }
  },
  legalInfo: {
    title: {
      fr: "Informations importantes",
      mg: "Fampahalalana manan-danja"
    },
    items: [
      {
        fr: "Cette simulation est indicative et ne constitue pas un engagement de PAOSITRA Finances",
        mg: "Ity simulation ity dia famantarana fotsiny ary tsy fanoloran-tena avy amin'ny PAOSITRA Finances"
      },
      {
        fr: "Les conditions définitives seront communiquées après étude de votre dossier",
        mg: "Ny fepetra farany dia homena rehefa nodinihina ny rakitrao"
      },
      {
        fr: "Taux d'intérêt variable selon profil de risque",
        mg: "Zana-bola miova arakaraka ny profil"
      },
      {
        fr: "Un crédit vous engage et doit être remboursé",
        mg: "Ny trosa dia manery anao ary tsy maintsy averina"
      }
    ]
  },
  bottomNav: [
    { fr: "Simulateur", mg: "Simulateur" },
    { fr: "Documents", mg: "Antontan-taratasy" },
    { fr: "RDV", mg: "Fihaonana" },
    { fr: "Profil", mg: "Profil" }
  ],
  alerts: {
    success: {
      fr: "✓ Compte créé avec succès !\n\n📧 Email de confirmation envoyé\n📱 SMS de confirmation envoyé\n\nRedirection vers votre espace client...",
      mg: "✓ Kaonty voaforona soa aman-tsara !\n\n📧 Mailaka fanamafisana nalefa\n📱 SMS fanamafisana nalefa\n\nRedirection mankany amin'ny espace client..."
    },
    qualification: {
      fr: "Merci ! Votre demande a été transmise.\n\nNous vous contacterons dans les 24 heures.",
      mg: "Misaotra anao ! Nalefa ny fangatahanao.\n\nHifandray aminao izahay ao anatin'ny 24 ora."
    }
  }
};