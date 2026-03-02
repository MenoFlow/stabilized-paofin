// src/mockData/signupData.js

export const signupContent = {
  title: {
    fr: "Créer votre compte",
    mg: "Hanokatra kaonty"
  },
  subtitle: {
    fr: "Rejoignez VINA et accédez à nos services de crédit",
    mg: "Midira ao amin'i VINA mba hisitraka ny tolotra fihindramam-bola haingana sy azo antoka"
  },
  benefits: {
    title: {
      fr: "● Pourquoi choisir VINA ?",
      mg: "● Nahoana no misafidy an'i VINA?"
    },
    list: [
      {
        fr: "Simulation de crédit instantanée et gratuite",
        mg: "Ahafahako mikajy ny fihindramam-bola eo no ho eo ary maimaim-poana"
      },
      {
        fr: "Processus 100% digital avec E-KYC mobile",
        mg: "Dingana 100% nomerika miaraka amin'ny E-KYC amin'ny finday"
      },
      {
        fr: "Paiements sécurisés via PAOSITRA MONEY",
        mg: "Fandoavam-bola azo antoka amin'ny alalan'ny PAOSITRA MONEY"
      },
      {
        fr: "Marketplace partenaire pour vos achats à crédit",
        mg: "Mpiara-miombon'antoka ahafahanao mividy entana aloa tsikelikely"
      },
      {
        fr: "Support client dédié en français et malagasy",
        mg: "Torolàlana sy fanampiana ny mpanjifa amin'ny teny frantsay sy malagasy"
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
    mg: "fepetra sy ny politika momba ny fikirakiràna ny mombamomba ny kaontiko aho"
  },
  and: {
    fr: " et la ",
    mg: ""
  },
  privacyLink: {
    fr: "politique de confidentialité",
    mg: ""
  },
  newsletter: {
    fr: "Je souhaite recevoir les actualités et offres spéciales de PAOFIN",
    mg: "Maniry handray vaovao sy tolotra manokana avy amin'i PAOFIN aho"
  }
};

export const loginLink = {
  text: {
    fr: "Vous avez déjà un compte ? ",
    mg: "Efa manana kaonty ve ianao? "
  },
  linkText: {
    fr: "Se connecter",
    mg: "Hiditra"
  },
  linkUrl: "/espace-client"
};