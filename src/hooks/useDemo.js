// src/hooks/useDemo.js
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  formatAmount, 
  formatDuration, 
  calculateCreditCapacity,
  getHealthColor,
  getArrowPosition,
  getProductLimits
} from '../utils/demoUtils';

export function useDemo() {
  const { language } = useLanguage();
  
  // États
  const [selectedProduct, setSelectedProduct] = useState('herijika');
  const [productIndex, setProductIndex] = useState(0);
  const [amount, setAmount] = useState(10000000);
  const [duration, setDuration] = useState(24);
  const [income, setIncome] = useState(3000000);
  const [expenses, setExpenses] = useState(1000000);
  const [showPopup, setShowPopup] = useState(false);
  const [otherLoans, setOtherLoans] = useState(0);
  const [guarantee, setGuarantee] = useState('salary');
  
  // Résultats calculés
  const [results, setResults] = useState({
    monthlyPayment: 0,
    rav: 0,
    debtRatio: 0,
    capacity: 0
  });

  // Mettre à jour les limites quand le produit change
  useEffect(() => {
    const limits = getProductLimits(selectedProduct);
    if (amount > limits.maxAmount) {
      setAmount(limits.maxAmount * 0.2);
    }
    if (duration > limits.maxDuration) {
      setDuration(Math.floor(limits.maxDuration * 0.7));
    }
  }, [selectedProduct, amount, duration]);

  // Recalculer à chaque changement
  useEffect(() => {
    const newResults = calculateCreditCapacity(amount, duration, income, expenses);
    setResults(newResults);
  }, [amount, duration, income, expenses]);

  const handleProductSelect = (productId, index) => {
    setSelectedProduct(productId);
    setProductIndex(index);
  };

  const handleAmountChange = (value) => {
    const limits = getProductLimits(selectedProduct);
    setAmount(Math.min(value, limits.maxAmount));
  };

  const handleDurationChange = (value) => {
    const limits = getProductLimits(selectedProduct);
    setDuration(Math.min(value, limits.maxDuration));
  };

  const handleQuickAmount = (value) => {
    setAmount(value);
  };

  const handleCalculate = () => {
    if (results.debtRatio <= 45) {
      setShowPopup(true);
    } else {
      showCreditAlert();
    }
  };

  const showCreditAlert = () => {
    const message = language === 'mg'
      ? `Fanadihadiana ny fangatahanao crédit ${selectedProduct.toUpperCase()}:\n\n` +
        `Vola: ${formatAmount(amount)}\n` +
        `Fotoana: ${formatDuration(duration)}\n` +
        `Vola averina isam-bolana: ${formatAmount(results.monthlyPayment)}\n` +
        `\n$ Fandoavam-bola azo antoka amin'ny PAOSITRA MONEY\n` +
        `● paositramoney.mg - API misy\n` +
        `RAV: ${formatAmount(results.rav)}\n` +
        `Tahan'ny trosa: ${results.debtRatio.toFixed(1)}%\n\n` +
        (results.debtRatio <= 33 
          ? "▶ Tsara be ny mombamomba anao ! Azo ekena ny fangatahanao."
          : "▲ Azo ekena. Mila dinihina kokoa ny antontan-taratasy.")
      : `Analyse de votre demande de crédit ${selectedProduct.toUpperCase()}:\n\n` +
        `Montant: ${formatAmount(amount)}\n` +
        `Durée: ${formatDuration(duration)}\n` +
        `Mensualité estimée: ${formatAmount(results.monthlyPayment)}\n` +
        `\n$ Paiement sécurisé via PAOSITRA MONEY\n` +
        `● paositramoney.mg - API disponible\n` +
        `RAV: ${formatAmount(results.rav)}\n` +
        `Taux d'endettement: ${results.debtRatio.toFixed(1)}%\n\n` +
        (results.debtRatio <= 33 
          ? "▶ Excellent profil ! Votre demande a de fortes chances d'être approuvée."
          : "▲ Profil acceptable. Conditions à négocier selon votre dossier.");

    alert(message);
  };

  const handlePopupSubmit = () => {
    const message = language === 'mg'
      ? `Misaotra anao ! Nalefa ny fangatahanao.\n\n` +
        `Famerenam-bola hafa: ${formatAmount(otherLoans)}\n` +
        `Antoka: ${guarantee === 'salary' ? 'Karama' : guarantee === 'material' ? 'Antoka materialy' : 'Antoka Tany/Trano'}\n\n` +
        `Hifandray aminao izahay ao anatin'ny 24 ora.`
      : `Merci ! Votre demande a été transmise.\n\n` +
        `Autres emprunts: ${formatAmount(otherLoans)}\n` +
        `Garantie: ${guarantee === 'salary' ? 'Salaire' : guarantee === 'material' ? 'Garantie matérielle' : 'Garantie Terrain/Maison'}\n\n` +
        `Nous vous contacterons dans les 24 heures.`;

    alert(message);
    setShowPopup(false);
    setOtherLoans(0);
    setGuarantee('salary');
  };

  return {
    // États
    selectedProduct,
    productIndex,
    amount,
    duration,
    income,
    expenses,
    showPopup,
    otherLoans,
    guarantee,
    results,
    
    // Setters
    setIncome,
    setExpenses,
    setOtherLoans,
    setGuarantee,
    setShowPopup,
    
    // Handlers
    handleProductSelect,
    handleAmountChange,
    handleDurationChange,
    handleQuickAmount,
    handleCalculate,
    handlePopupSubmit,
    
    // Utilitaires
    formatAmount,
    formatDuration,
    getHealthColor: () => getHealthColor(results.debtRatio, results.rav),
    getArrowPosition: () => getArrowPosition(results.debtRatio),
    productLimits: getProductLimits(selectedProduct)
  };
}