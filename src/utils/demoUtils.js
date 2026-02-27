// src/utils/demoUtils.js

export const formatAmount = (amount) => {
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(amount % 1000000 === 0 ? 0 : 1) + 'M Ar';
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(0) + 'K Ar';
  }
  return amount + ' Ar';
};

export const formatDuration = (months) => {
  if (months < 12) {
    return months + ' mois';
  } else if (months % 12 === 0) {
    const years = months / 12;
    return years === 1 ? '1 an' : years + ' ans';
  } else {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return years + 'a ' + remainingMonths + 'm';
  }
};

export const calculateCreditCapacity = (amount, duration, income, expenses) => {
  const monthlyPayment = amount / duration;
  const rav = income - expenses - monthlyPayment;
  let debtRatio = 0;
  let capacity = 0;

  if (income > 0) {
    debtRatio = ((expenses + monthlyPayment) / income) * 100;
    capacity = Math.max(0, 100 - debtRatio);

    if (debtRatio > 45 || rav < 500000) {
      capacity = 0;
    }
  }

  return { monthlyPayment, rav, debtRatio, capacity };
};

export const getHealthColor = (debtRatio, rav) => {
  if (rav < 500000) return '#e74c3c';
  if (debtRatio <= 33) return '#2ecc71';
  if (debtRatio <= 45) return '#f39c12';
  return '#e74c3c';
};

export const getArrowPosition = (debtRatio) => {
  return Math.min(debtRatio, 100);
};

export const getProductLimits = (productId) => {
  if (productId === 'herijika') {
    return { maxAmount: 50000000, maxDuration: 24 };
  }
  return { maxAmount: 10000000, maxDuration: 30 };
};