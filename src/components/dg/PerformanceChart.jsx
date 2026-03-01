// src/components/dg/PerformanceChart.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Données mockées pour le graphique
const performanceHistory = [
  { month: 'Jan', revenus: 280, clients: 120, credit: 320 },
  { month: 'Fév', revenus: 300, clients: 135, credit: 340 },
  { month: 'Mar', revenus: 320, clients: 142, credit: 355 },
  { month: 'Avr', revenus: 340, clients: 150, credit: 365 },
  { month: 'Mai', revenus: 360, clients: 158, credit: 380 },
  { month: 'Juin', revenus: 365, clients: 156, credit: 375 },
];

function PerformanceChart({ data }) {
  const { language } = useLanguage();

  const translations = {
    fr: {
      performance: "Performance Globale",
      revenus: "Revenus (M Ar)",
      clients: "Nouveaux Clients",
      credit: "Crédits (M Ar)"
    },
    mg: {
      performance: "Fahombiazana Ankapobeny",
      revenus: "Tombony (M Ar)",
      clients: "Mpanjifa Vaovao",
      credit: "Trosa (M Ar)"
    }
  };

  const t = translations[language];

  return (
    <div className="card">
      <h3>▶ {t.performance} - {data.mois[language]}</h3>
      
      <div className="chart-container" style={{ height: '300px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={performanceHistory}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #003399',
                borderRadius: '8px'
              }} 
            />
            <Legend />
            <Bar 
              dataKey="revenus" 
              name={t.revenus}
              fill="#003399" 
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
            <Bar 
              dataKey="credit" 
              name={t.credit}
              fill="#00AEEF" 
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
            <Bar 
              dataKey="clients" 
              name={t.clients}
              fill="#FFC107" 
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="metrics-grid">
        <div className="metric-item">
          <div className="metric-value">{data.nouveauxCredits}</div>
          <div className="metric-label">{data.labels.nouveauxCredits[language]}</div>
        </div>
        <div className="metric-item">
          <div className="metric-value">{data.nouveauxClients}</div>
          <div className="metric-label">{data.labels.nouveauxClients[language]}</div>
        </div>
        <div className="metric-item">
          <div className="metric-value">{data.delaiMoyen}</div>
          <div className="metric-label">{data.labels.delaiMoyen[language]}</div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceChart;