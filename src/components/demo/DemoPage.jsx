// src/components/demo/DemoPage.jsx
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../common/LanguageToggle';
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
  const { language } = useLanguage();
  
  const {
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
    amountDisplay,
    durationDisplay,
    showPopup,
    otherLoans,
    guarantee,
    maxAmount,
    maxDuration,
    setIncome,
    setExpenses,
    setOtherLoans,
    setGuarantee,
    handleProductSelect,
    handleQuickAmount,
    handleCalculate,
    handleTestPopup,
    handlePopupSubmit,
    closeQualificationPopup,
    formatAmount,
    formatDuration,
    getHealthColor,
    getArrowPosition,
    onAmountChange,
    onDurationChange
  } = useDemo();

  return (
    <div className="demo-container">
      <DemoHeader user={userInfo} />
      
      {/* LanguageToggle est déjà inclus dans DemoHeader, mais si vous voulez le garder séparé : */}
      {/* <LanguageToggle /> */}

      <HealthScoreSection
        healthScore={healthScore}
        debtRatio={debtRatio}
        rav={rav}
        getHealthColor={getHealthColor}
        getArrowPosition={getArrowPosition}
        formatAmount={formatAmount}
      />

      <div className="demo-simulation-product-wrapper">
        <div className="demo-left-column">
          <SimulationSection
            income={income}
            expenses={expenses}
            onIncomeChange={setIncome}
            onExpensesChange={setExpenses}
            onCalculate={handleCalculate}
            onTestPopup={handleTestPopup}
            debtRatio={debtRatio}
          />

          <CreditParameters
            amount={amount}
            duration={duration}
            amountDisplay={amountDisplay}
            durationDisplay={durationDisplay}
            onAmountChange={onAmountChange}
            onDurationChange={onDurationChange}
            onQuickAmount={handleQuickAmount}
            productLimits={{ maxAmount, maxDuration }}
          />
        </div>

        <ProductCarousel
          products={demoContent.products}
          selectedIndex={productIndex}
          onSelect={handleProductSelect}
        />
      </div>

      <MarketplacePartners />

      <QualificationPopup
        show={showPopup}
        otherLoans={otherLoans}
        guarantee={guarantee}
        onOtherLoansChange={setOtherLoans}
        onGuaranteeChange={setGuarantee}
        onClose={closeQualificationPopup}
        onSubmit={handlePopupSubmit}
      />

      <LegalInfo />
      
      <BottomNavigation />
    </div>
  );
}

export default DemoPage;