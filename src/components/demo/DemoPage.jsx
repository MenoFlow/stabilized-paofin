// src/components/demo/DemoPage.jsx
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import DemoHeader from './DemoHeader';
import HealthScoreSection from './HealthScoreSection';
import CreditParameters from './CreditParameters';
import SimulationSection from './SimulationSection';
import ProductCarousel from './ProductCarousel';
import MarketplacePartners from './MarketplacePartners';
import QualificationPopup from './QualificationPopup';
import LegalInfo from './LegalInfo';
import BottomNavigation from './BottomNavigation';
import { useDemo } from '../../hooks/useDemo';
import { demoContent, userInfo } from '../../mockData/demoData';
import '../../styles/demo/DemoPage.css';

function DemoPage() {
  const { language, toggleLanguage } = useLanguage();
  
  const {
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
    setIncome,
    setExpenses,
    setOtherLoans,
    setGuarantee,
    setShowPopup,
    handleProductSelect,
    handleAmountChange,
    handleDurationChange,
    handleQuickAmount,
    handleCalculate,
    handlePopupSubmit,
    formatAmount,
    formatDuration,
    getHealthColor,
    getArrowPosition,
    productLimits
  } = useDemo();

  useEffect(() => {
    // Désactiver le Service Worker en développement
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(registration => {
          console.log('VINA PAOFIN SW: Enregistrement réussi', registration.scope);
        })
        .catch(error => {
          console.log('VINA PAOFIN SW: Échec de l\'enregistrement', error);
        });
    } else {
      console.log('Service Worker désactivé en mode développement');
    }
  }, []);

  return (
    <div className="demo-container">
      <DemoHeader onLanguageToggle={toggleLanguage} user={userInfo} />

      <HealthScoreSection
        healthScore={results.capacity}
        debtRatio={results.debtRatio}
        rav={results.rav}
        getHealthColor={getHealthColor}
        getArrowPosition={getArrowPosition}
        formatAmount={formatAmount}
      />

      <CreditParameters
        amount={amount}
        duration={duration}
        onAmountChange={handleAmountChange}
        onDurationChange={handleDurationChange}
        onQuickAmount={handleQuickAmount}
        formatAmount={formatAmount}
        formatDuration={formatDuration}
        productLimits={productLimits}
      />

      <SimulationSection
        income={income}
        expenses={expenses}
        onIncomeChange={setIncome}
        onExpensesChange={setExpenses}
        onCalculate={handleCalculate}
        onTestPopup={() => setShowPopup(true)}
      />

      <ProductCarousel
        products={demoContent.products}
        selectedIndex={productIndex}
        onSelect={handleProductSelect}
      />

      <MarketplacePartners />

      <QualificationPopup
        show={showPopup}
        otherLoans={otherLoans}
        guarantee={guarantee}
        onOtherLoansChange={setOtherLoans}
        onGuaranteeChange={setGuarantee}
        onClose={() => setShowPopup(false)}
        onSubmit={handlePopupSubmit}
      />

      <LegalInfo />
      
      <BottomNavigation />
    </div>
  );
}

export default DemoPage;