// src/mockData/demoTranslations.js
export const demoTranslations = {
  healthScore: {
    title: {
      fr: "Score de Santé Financière",
      mg: "Hatsaran'ny toe-bolana"
    },
    capacityLabel: {
      fr: "Capacité de crédit estimée",
      mg: "Tombana ny fahafahana mihindram-bola"
    },
    debtLabel: {
      fr: "Votre taux d'endettement",
      mg: "Ny tahan'ny trosanao"
    },
    labels: [
      { fr: "Excellent<br>(0-33%)", mg: "Tena tsara<br>(0-33%)" },
      { fr: "Modéré<br>(33-45%)", mg: "Antonony<br>(33-45%)" },
      { fr: "Risqué<br>(45%+)", mg: "Atahorana<br>(45%+)" }
    ]
  },
  creditParameters: {
    title: {
      fr: "Paramètres de Crédit",
      mg: "Fepetra momba ny fihindramam-bola"
    },
    amountLabel: {
      fr: "Montant souhaité",
      mg: "Vola tiana hindramina"
    },
    durationLabel: {
      fr: "Durée de remboursement",
      mg: "Faharetan'ny famerenam-bola"
    }
  },
  simulation: {
    title: {
      fr: "Simulation de Crédit",
      mg: "Fanaovana tombana findramam-bola"
    },
    incomeLabel: {
      fr: "Revenus mensuels (Ar)",
      mg: "Vola miditra isam-bolana (Ar)"
    },
    expensesLabel: {
      fr: "Charges mensuelles (Ar)",
      mg: "Fandaniana isam-bolana (Ar)"
    },
    calculateBtn: {
      fr: "Calculer ma capacité",
      mg: "Kajio ny fahafahako mihindram-bola"
    },
    questionnaireBtn: {
      fr: "Veuillez répondre à ce questionnaire",
      mg: "Miangavy anao hamaly ireto fanontaniana manaraka ireto"
    }
  },
  products: {
    title: {
      fr: "Choisissez votre produit",
      mg: "Safidio ny tolotra mety aminao"
    },
    herijika: {
      description: {
        fr: "Crédit pour équipements et matériels professionnels",
        mg: "Fihindramam-bola ho an'ny fitaovana sy kojakoja ampiasaina amin'ny asa"
      }
    },
    ketrika: {
      description: {
        fr: "Crédit pour besoins personnels et familiaux",
        mg: "Fihindramam-bola ho an'ny filàna manokana sy ny ankohonana"
      }
    }
  },
  marketplace: {
    title: {
      fr: "Nos Partenaires Marketplace",
      mg: "Ireo mpiara-miombon'antoka aminay"
    }
  },
  qualificationPopup: {
    title: {
      fr: "Souhaitez-vous introduire votre demande de crédit ?",
      mg: "Maniry ny hampiditra ny fangatahana ve ianao ?"
    },
    subtitle: {
      fr: "Votre profil est éligible. Veuillez compléter ces informations.",
      mg: "Azo raisina ny mombamomba anao. Azafady, mba fenoy ireto fampahalalana ireto."
    },
    phoneLabel: {
      fr: "Votre numéro",
      mg: "Numerao ahazoana anao"
    },
    timeLabel: {
      fr: "Heure où vous serez libre pour appel",
      mg: "Fotoana ahafahana miantso anao"
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
      property: { fr: "Garantie Terrain/Maison", mg: "Antoka trano/tany" }
    },
    cancelBtn: { fr: "Annuler", mg: "Aoka ihany" },
    confirmBtn: { fr: "Valider", mg: "Ekeo" }
  },
  confirmationPopup: {
    title: {
      fr: "Souhaitez-vous introduire votre demande de crédit ?",
      mg: "Maniry ny hampiditra ny fangatahana ve ianao ?"
    },
    message: {
      fr: "Votre profil est éligible pour ce crédit.",
      mg: "Azo raisina ny mombamomba anao ho an'ity trosa ity."
    },
    yesBtn: {
      fr: "Oui",
      mg: "Eny"
    },
    noBtn: {
      fr: "Non",
      mg: "Tsia"
    }
  },
  contactForm: {
    title: {
      fr: "Informations de contact",
      mg: "Fampahalalana momba ny fifandraisana"
    },
    subtitle: {
      fr: "Nous vous contacterons pour finaliser votre demande.",
      mg: "Hifandray aminao izahay mba hamita ny fangatahanao."
    },
    phoneLabel: {
      fr: "Votre numéro",
      mg: "Numerao ahazoana anao"
    },
    timeLabel: {
      fr: "Heure où vous serez libre pour appel",
      mg: "Fotoana ahafahana miantso anao"
    },
    selectTime: {
      fr: "Sélectionnez une plage horaire",
      mg: "Safidio ny fotoana"
    },
    cancelBtn: {
      fr: "Annuler",
      mg: "Aoka ihany"
    },
    submitBtn: {
      fr: "Envoyer",
      mg: "Alefaso"
    }
  },
  legalInfo: {
    title: {
      fr: "Informations importantes",
      mg: "Fampahalalana manan-danja"
    },
    items: [
      {
        fr: "Cette simulation est indicative et ne constitue pas un engagement de PAOSITRA Finances",
        mg: "Ity tombana ity dia fanoroana fotsiny ihany ary tsy midika ho fifanekena raikitra"
      },
      {
        fr: "Les conditions définitives seront communiquées après étude de votre dossier",
        mg: "Ny fepetra farany sy raikitra aorian'ny fandinihana ny antontan-taratasinao"
      },
      {
        fr: "Taux d'intérêt variable selon profil de risque",
        mg: "Zanabola mety hiova"
      },
      {
        fr: "Un crédit vous engage et doit être remboursé",
        mg: "Ny fihindramam-bola dia andraikitrao feno ka tsy maintsy averina"
      }
    ]
  },
  bottomNav: [
    { fr: "Simulateur", mg: "Fanaovana tombana" },
    { fr: "Documents", mg: "Antontan-taratasy" },
    { fr: "RDV", mg: "Fotoana ifanomezana" },
    { fr: "Profil", mg: "Mombamomba ahy" }
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
  },
  analysisModal: {
    title: {
      fr: "Analyse de votre demande de crédit",
      mg: "Fanadihadiana ny fangatahanao crédit"
    },
    amount: {
      fr: "Montant:",
      mg: "Vola:"
    },
    duration: {
      fr: "Durée:",
      mg: "Fotoana:"
    },
    monthlyPayment: {
      fr: "Mensualité estimée:",
      mg: "Vola averina isam-bolana:"
    },
    rav: {
      fr: "RAV (Reste à Vivre):",
      mg: "RAV:"
    },
    debtRatio: {
      fr: "Taux d'endettement:",
      mg: "Tahan'ny trosa:"
    },
    capacity: {
      fr: "Capacité de crédit:",
      mg: "Fahafaha-maka trosa:"
    },
    payment: {
      fr: "Paiement sécurisé via PAOSITRA MONEY",
      mg: "Fandoavam-bola azo antoka amin'ny PAOSITRA MONEY"
    },
    apiAvailable: {
      fr: "API disponible",
      mg: "API misy"
    },
    closeBtn: {
      fr: "Fermer",
      mg: "Hidio"
    },
    excellentProfile: {
      fr: "Excellent profil !",
      mg: "Tena tsara ny mombamomba anao !"
    },
    excellentMessage: {
      fr: "Votre demande a de fortes chances d'être approuvée.",
      mg: "Azo ekena ny fangatahanao."
    },
    acceptableProfile: {
      fr: "Profil acceptable",
      mg: "Antonony"
    },
    acceptableMessage: {
      fr: "Conditions à négocier selon votre dossier.",
      mg: "Mila dinihina kokoa ny antontan-taratasy."
    },
    riskProfile: {
      fr: "Profil à risque",
      mg: "Atahorana"
    },
    riskMessage: {
      fr: "Nous vous conseillons de réduire le montant ou d'améliorer votre situation financière.",
      mg: "Mila ovaina ny vola kasainao hindramina"
    },
    insufficientRav: {
      fr: "Reste à vivre insuffisant",
      mg: "Tsy ampy ny vola sisa tavela iainana"
    }
  }
};