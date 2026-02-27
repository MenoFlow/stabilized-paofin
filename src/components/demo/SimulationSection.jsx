// src/components/demo/SimulationSection.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { demoContent } from '../../mockData/demoData';
import '../../styles/demo/DemoPage.css';

function SimulationSection({ 
  income, 
  expenses, 
  onIncomeChange, 
  onExpensesChange,
  onCalculate,
  onTestPopup,
  debtRatio // Ajouter cette prop
}) {
  const { language } = useLanguage();

  // Masquer le bouton questionnaire si le taux d'endettement > 45%
  const showQuestionnaire = debtRatio <= 45;

  return (
    <div className="demo-simulation-section">
      <h2>{demoContent.simulation.title[language]}</h2>

      <div className="demo-financial-inputs">
        <div className="demo-input-group">
          <label>{demoContent.simulation.incomeLabel[language]}</label>
          <input
            type="number"
            value={income}
            onChange={(e) => onIncomeChange(parseInt(e.target.value) || 0)}
            placeholder="Ex: 3000000"
          />
        </div>
        <div className="demo-input-group">
          <label>{demoContent.simulation.expensesLabel[language]}</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => onExpensesChange(parseInt(e.target.value) || 0)}
            placeholder="Ex: 1000000"
          />
        </div>
      </div>

      <button className="demo-action-button" onClick={onCalculate}>
        {demoContent.simulation.calculateBtn[language]}
      </button>

      {showQuestionnaire && (
        <button 
          className="demo-action-button demo-test-button" 
          onClick={onTestPopup}
          style={{ background: '#28a745', marginTop: '10px' }}
        >
          {demoContent.simulation.questionnaireBtn[language]}
        </button>
      )}
    </div>
  );
}

export default SimulationSection;