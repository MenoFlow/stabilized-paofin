// src/hooks/useDemo.js
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function useDemo() {
  const { language } = useLanguage();
  
  // États correspondant aux variables du script
  const [selectedProduct, setSelectedProduct] = useState('herijika');
  const [maxAmount, setMaxAmount] = useState(50000000);
  const [maxDuration, setMaxDuration] = useState(24);
  const [productIndex, setProductIndex] = useState(0);
  
  // États pour les inputs
  const [amount, setAmount] = useState(10000000);
  const [duration, setDuration] = useState(24);
  const [income, setIncome] = useState(3000000);
  const [expenses, setExpenses] = useState(1000000);
  
  // États pour les résultats
  const [healthScore, setHealthScore] = useState(0);
  const [debtRatio, setDebtRatio] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [rav, setRav] = useState(0);
  const [capacity, setCapacity] = useState(0);
  
  // États pour le popup
  const [showPopup, setShowPopup] = useState(false);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [otherLoans, setOtherLoans] = useState(0);
  const [guarantee, setGuarantee] = useState('salary');
  
  // États pour l'affichage formaté
  const [amountDisplay, setAmountDisplay] = useState('10M Ar');
  const [durationDisplay, setDurationDisplay] = useState('24 mois');

  // Fonction de formatage du montant (identique au script)
  const formatAmount = (amount) => {
    if (amount >= 1000000) {
      return (amount / 1000000).toFixed(amount % 1000000 === 0 ? 0 : 1) + 'M Ar';
    } else if (amount >= 1000) {
      return (amount / 1000).toFixed(0) + 'K Ar';
    }
    return amount + ' Ar';
  };

  // Fonction de formatage de la durée (identique au script)
  const formatDuration = (months) => {
    const value = parseInt(months);
    if (value < 12) {
      return value + ' mois';
    } else if (value % 12 === 0) {
      const years = value / 12;
      return years === 1 ? '1 an' : years + ' ans';
    } else {
      const years = Math.floor(value / 12);
      const remainingMonths = value % 12;
      return years + 'a ' + remainingMonths + 'm';
    }
  };

  // Fonction de calcul de capacité (EXACTEMENT comme calculateCapacity dans le script)
  const calculateCapacity = () => {
    // Mensualité estimée: M = Montant / Durée
    const monthly = amount / duration;

    // RAV = Revenus - Charges - Mensualité - Autres emprunts
    const remaining = income - expenses - monthly - otherLoans;

    // Taux d'endettement: T = (Charges + M + Autres emprunts) / Revenus * 100
    let debt = 0;
    let cap = 0;

    if (income > 0) {
      debt = ((expenses + monthly + otherLoans) / income) * 100;
      cap = Math.max(0, 100 - debt);

      // Zone Rouge: Forcer à 0% si T > 45% OU RAV < 500k
      if (debt > 45 || remaining < 500000) {
        cap = 0;
      }
    }

    return { monthly, remaining, debt, cap };
  };

  // Mise à jour de la santé financière (EXACTEMENT comme updateHealthBar dans le script)
  const updateHealthScore = () => {
    const { monthly, remaining, debt, cap } = calculateCapacity();
    
    // Score de santé (100 - taux d'endettement)
    const health = Math.max(0, 100 - debt);
    
    setMonthlyPayment(monthly);
    setRav(remaining);
    setDebtRatio(debt);
    setCapacity(cap);
    setHealthScore(Math.round(health));
  };

  // Mise à jour du montant affiché
  const updateAmount = (value) => {
    setAmount(value);
    setAmountDisplay(formatAmount(value));
    updateHealthScore();
  };

  // Mise à jour de la durée affichée
  const updateDuration = (value) => {
    setDuration(value);
    setDurationDisplay(formatDuration(value));
    updateHealthScore();
  };

  // Sélection d'un produit (EXACTEMENT comme selectProduct dans le script)
  const handleProductSelect = (productId, index) => {
    setSelectedProduct(productId);
    setProductIndex(index);

    // Mettre à jour les limites
    if (productId === 'herijika') {
      setMaxAmount(50000000);
      setMaxDuration(24);
    } else {
      setMaxAmount(10000000);
      setMaxDuration(30);
    }

    // Ajuster les valeurs si elles dépassent les nouvelles limites
    setTimeout(() => {
      if (amount > maxAmount) {
        updateAmount(maxAmount * 0.2);
      }
      if (duration > maxDuration) {
        updateDuration(Math.floor(maxDuration * 0.7));
      }
    }, 0);
  };

  // Gestion des montants rapides
  const handleQuickAmount = (value) => {
    setAmount(value);
    setAmountDisplay(formatAmount(value));
    updateHealthScore();
  };

  // Fonction pour obtenir la couleur de santé
  const getHealthColor = () => {
    if (rav < 500000) return '#e74c3c';
    if (debtRatio <= 33) return '#2ecc71';
    if (debtRatio <= 45) return '#f39c12';
    return '#e74c3c';
  };

  // Fonction pour obtenir la position de la flèche
  const getArrowPosition = () => {
    const arrowPosition = Math.min(debtRatio, 100);
    return (arrowPosition / 100) * 284; // 284px max
  };

  // Fonction pour afficher le popup de qualification
  const showQualificationPopup = () => {
    setShowPopup(true);
  };

  // Fonction pour fermer le popup
  const closeQualificationPopup = () => {
    setShowPopup(false);
  };

  // Fonction pour soumettre la qualification (étape 1)
  const handlePopupSubmit = () => {
    // Fermer le questionnaire et afficher la confirmation
    closeQualificationPopup();
    setShowConfirmation(true);
  };

  // Fonction pour calculer le crédit (EXACTEMENT comme calculateCredit dans le script)
  const handleCalculate = () => {
    // Toujours afficher le modal d'analyse, jamais le questionnaire
    setShowAnalysisModal(true);
  };

  // Fonction pour tester le popup directement (étape 1: questionnaire)
  const handleTestPopup = () => {
    // Afficher d'abord le questionnaire
    setShowPopup(true);
  };

  // Gérer la confirmation (étape 2)
  const handleConfirmRequest = () => {
    setShowConfirmation(false);
    setShowContactForm(true);
  };

  const handleCancelRequest = () => {
    setShowConfirmation(false);
    // Réinitialiser les données du questionnaire
    setOtherLoans(0);
    setGuarantee('salary');
  };

  // Gérer la soumission du formulaire de contact (étape 3)
  const handleContactSubmit = ({ phone, availableTime }) => {
    setShowContactForm(false);
    
    // Simuler l'enregistrement des données
    const requestData = {
      product: selectedProduct,
      amount: formatAmount(amount),
      duration: formatDuration(duration),
      income: formatAmount(income),
      expenses: formatAmount(expenses),
      otherLoans: formatAmount(otherLoans),
      guarantee: guarantee,
      phone: phone,
      availableTime: availableTime,
      timestamp: new Date().toISOString()
    };
    
    console.log('Demande de crédit enregistrée:', requestData);
    
    const guaranteeText = language === 'mg'
      ? (guarantee === 'salary' ? 'Karama' : guarantee === 'material' ? 'Antoka materialy' : 'Antoka Tany/Trano')
      : (guarantee === 'salary' ? 'Salaire' : guarantee === 'material' ? 'Garantie matérielle' : 'Garantie Terrain/Maison');
    
    const message = language === 'fr'
      ? `✅ Demande enregistrée avec succès !\n\nProduit: ${selectedProduct.toUpperCase()}\nMontant: ${formatAmount(amount)}\nDurée: ${formatDuration(duration)}\nAutres emprunts: ${formatAmount(otherLoans)}\nGarantie: ${guaranteeText}\nNuméro: ${phone}\nHoraire: ${availableTime}\n\nNous vous contacterons dans les 24 heures.`
      : `✅ Vokatry ny fangatahana!\n\nVokatra: ${selectedProduct.toUpperCase()}\nVola: ${formatAmount(amount)}\nFaharetan: ${formatDuration(duration)}\nTrosa hafa: ${formatAmount(otherLoans)}\nAntoka: ${guaranteeText}\nNuméro: ${phone}\nFotoana: ${availableTime}\n\nHifandray aminao izahay ao anatin'ny 24 ora.`;
    
    alert(message);
    
    // Réinitialiser les données
    setOtherLoans(0);
    setGuarantee('salary');
  };

  // Initialisation (équivalent à DOMContentLoaded)
  useEffect(() => {
    updateAmount(10000000);
    updateDuration(24);
    updateHealthScore();
  }, []);

  // Recalculer quand les inputs changent
  useEffect(() => {
    updateHealthScore();
  }, [amount, duration, income, expenses, otherLoans]);

  // Mettre à jour l'affichage formaté quand la langue change
  useEffect(() => {
    setAmountDisplay(formatAmount(amount));
    setDurationDisplay(formatDuration(duration));
  }, [language, amount, duration]);

  return {
    // États
    selectedProduct,
    productIndex,
    amount,
    duration,
    income,
    expenses,
    healthScore,
    debtRatio,
    monthlyPayment,
    rav,
    capacity,
    amountDisplay,
    durationDisplay,
    showPopup,
    showAnalysisModal,
    showConfirmation,
    showContactForm,
    otherLoans,
    guarantee,
    maxAmount,
    maxDuration,
    
    // Setters
    setIncome,
    setExpenses,
    setOtherLoans,
    setGuarantee,
    setShowPopup,
    setShowAnalysisModal,
    setShowConfirmation,
    setShowContactForm,
    
    // Handlers
    handleProductSelect,
    handleQuickAmount,
    handleCalculate,
    handleTestPopup,
    handlePopupSubmit,
    closeQualificationPopup,
    handleConfirmRequest,
    handleCancelRequest,
    handleContactSubmit,
    
    // Fonctions
    formatAmount,
    formatDuration,
    getHealthColor,
    getArrowPosition,
    
    // Pour l'input range
    onAmountChange: (value) => updateAmount(parseInt(value)),
    onDurationChange: (value) => updateDuration(parseInt(value))
  };
}