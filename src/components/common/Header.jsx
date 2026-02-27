// src/components/common/Header.jsx
import React from 'react';

function Header({ user, onLogout }) {
  return (
    // <div className="">
    <div className="header">
      <div className="logo">
        <img 
          src="../mobile/assets/images/Logo_paofin.png.png" 
          alt="PAOFIN" 
          onError={(e) => e.target.style.display = 'none'}
        />
        <div>
          <h2>VINA Platform</h2>
          <p>Dashboard Direction Générale</p>
        </div>
      </div>
      <div className="user-info">
        <span>{user.avatar} {user.name} ({user.role})</span>
        <button className="btn" onClick={onLogout}>Déconnexion</button>
      </div>
    </div>
  );
}

export default Header;