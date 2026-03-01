// src/components/marketing/AcquisitionChannels.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LucideIcon from '../common/LucideIcon';

function AcquisitionChannels({ channels }) {
  const { language } = useLanguage();

  return (
    <div className="card">
      <h3>■ {language === 'fr' ? 'Canaux d\'Acquisition' : 'Fantsona fahazoana mpanjifa'}</h3>
      <div className="channels-grid">
        {channels.channels.map((channel, index) => (
          <div key={index} className="channel-item">
            <div className="channel-icon">
              <LucideIcon name={channel.icon} size={24} />
            </div>
            <div className="channel-name">{channel.name[language]}</div>
            <div className="channel-conversion">
              {channel.conversion} {language === 'fr' ? 'des conversions' : 'ny fiovana'}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h4>{language === 'fr' ? 'Performance par Canal' : 'Fahombiazana isaky ny fantsona'}</h4>
        <div style={{ marginTop: '1rem' }}>
          {channels.performance.map((item, index) => (
            <div key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>{item.name[language]}</span>
                <span>{item.value}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${item.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AcquisitionChannels;