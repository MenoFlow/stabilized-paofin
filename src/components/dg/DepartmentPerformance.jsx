// src/components/dg/DepartmentPerformance.jsx
import React from 'react';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

function DepartmentPerformance({ departments }) {
  const { language } = useLanguage();

  const title = {
    fr: "Performance par Département",
    mg: "Fahombiazana isaky ny Sampana"
  };

  return (
    <div className="card full-width">
      <h3><Building2 className="inline-icon" size={20} /> {title[language]}</h3>
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div key={index} className="department-card">
            <div className="department-name">{dept.name[language]}</div>
            {dept.metrics.map((metric, i) => (
              <React.Fragment key={i}>
                <div className="department-kpi" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="department-label">{metric.label[language]}</div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentPerformance;