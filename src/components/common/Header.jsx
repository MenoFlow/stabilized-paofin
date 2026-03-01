// src/components/common/Header.jsx
import React from 'react';
import logoPaositra from '../../assets/logo-paositra.png';
import LucideIcon from './LucideIcon';

function Header({ user, onLogout }) {
  return (
    // <div className="">
    <div className="header">
      <div className="logo">
        <img 
          src={logoPaositra} 
          alt="PAOSITRA Logo" 
          className="header-logo-img"
        />
        <div>
          <h2>VINA Platform</h2>
          <p>Dashboard Direction Générale</p>
        </div>
      </div>
      <div className="user-info">
        <span>
          <LucideIcon name={user.avatar} size={18} className="inline-icon" /> {user.name} ({user.role})
        </span>
        <button className="btn" onClick={onLogout}>Déconnexion</button>
      </div>
    </div>
  );
}

export default Header;