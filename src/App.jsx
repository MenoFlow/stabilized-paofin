// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext'; // Ajout
import HomePage from './pages/HomePage';
import LoginPortal from './components/auth/LoginPortal';
import DGDashboardPage from './pages/DGDashboardPage';
import OperationsPage from './pages/OperationsPage';
import MarketingPage from './pages/MarketingPage';
import CommercialPage from './pages/CommercialPage';
import ClientPage from './pages/ClientPage';
import SignupPage from './pages/SignupPage';
import DemoPage from './pages/DemoPage'; // Importer la page demo

// import './App.css';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('currentUser');
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <LanguageProvider> {/* Wrapper avec LanguageProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPortal />} />
            
            <Route 
              path="/dashboard-dg" 
              element={
                <ProtectedRoute>
                  <DGDashboardPage />
                </ProtectedRoute>
              } 
            />
            {/* Plus besoin de route -mg séparée */}
            
            <Route 
              path="/dashboard-operations" 
              element={
                <ProtectedRoute>
                  <OperationsPage />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/dashboard-marketing" 
              element={
                <ProtectedRoute>
                  <MarketingPage />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/dashboard-commercial" 
              element={
                <ProtectedRoute>
                  <CommercialPage />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/espace-client" 
              element={
                  <ClientPage />
              } 
            />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/demo-mobile" element={<DemoPage />} /> {/* Route pour la demo */}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;