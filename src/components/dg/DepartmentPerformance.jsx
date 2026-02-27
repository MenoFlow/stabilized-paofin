// src/components/dg/DepartmentPerformance.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function DepartmentPerformance({ departments }) {
  const { language } = useLanguage();

  return (
    <div className="card full-width">
      <h3>🏢 Performance par Département</h3>
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