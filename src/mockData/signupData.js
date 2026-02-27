// src/mockData/signupData.js

export const signupContent = {
  title: {
    fr: "Créer votre compte",
    mg: "Mamorona ny kaontinao"
  },
  subtitle: {
    fr: "Rejoignez VINA et accédez à nos services de crédit",
    mg: "Midira amin'ny VINA ary mahazo ny tolotra fampindramam-bola"
  },
  benefits: {
    title: {
      fr: "● Pourquoi choisir VINA ?",
      mg: "● Nahoana no misafidy VINA ?"
    },
    list: [
      {
        fr: "Simulation de crédit instantanée et gratuite",
        mg: "Simulation trosa avy hatrany sy maimaim-poana"
      },
      {
        fr: "Processus 100% digital avec E-KYC mobile",
        mg: "Dingana 100% nomerika miaraka amin'ny E-KYC finday"
      },
      {
        fr: "Paiements sécurisés via PAOSITRA MONEY",
        mg: "Fandoavam-bola azo antoka amin'ny alalan'ny PAOSITRA MONEY"
      },
      {
        fr: "Marketplace partenaire pour vos achats à crédit",
        mg: "Marketplace mpiara-miombon'antoka ho an'ny fividianana amin'ny trosa"
      },
      {
        fr: "Support client dédié en français et malagasy",
        mg: "Fanampiana mpanjifa natokana amin'ny teny frantsay sy malagasy"
      }
    ]
  }
};

export const professionOptions = [
  { value: "", label: { fr: "Sélectionner", mg: "Safidio" } },
  { value: "employee", label: { fr: "Salarié", mg: "Mpiasa karama" } },
  { value: "self_employed", label: { fr: "Indépendant", mg: "Tsy miankina" } },
  { value: "business_owner", label: { fr: "Chef d'entreprise", mg: "Tompon'orinasa" } },
  { value: "civil_servant", label: { fr: "Fonctionnaire", mg: "Mpanjakana" } },
  { value: "other", label: { fr: "Autre", mg: "Hafa" } }
];

export const genderOptions = [
  { value: "", label: { fr: "Sélectionner", mg: "Safidio" } },
  { value: "M", label: { fr: "Masculin", mg: "Lahy" } },
  { value: "F", label: { fr: "Féminin", mg: "Vavy" } }
];

export const termsContent = {
  accept: {
    fr: "J'accepte les ",
    mg: "Manaiky ny "
  },
  termsLink: {
    fr: "conditions générales d'utilisation",
    mg: "fepetra ankapobeny fampiasana"
  },
  and: {
    fr: " et la ",
    mg: " sy ny "
  },
  privacyLink: {
    fr: "politique de confidentialité",
    mg: "politikan'ny tsiambaratelo"
  },
  newsletter: {
    fr: "Je souhaite recevoir les actualités et offres spéciales de PAOFIN",
    mg: "Te-handray ny vaovao sy ny tolotra manokana avy amin'ny PAOFIN aho"
  }
};

export const loginLink = {
  text: {
    fr: "Vous avez déjà un compte ? ",
    mg: "Efa manana kaonty ve ianao ? "
  },
  linkText: {
    fr: "Se connecter",
    mg: "Hiditra"
  },
  linkUrl: "/espace-client"
};