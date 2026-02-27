// src/hooks/useSignup.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { validatePassword } from '../utils/validation';

export function useSignup() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    cinNumber: '',
    phone: '',
    email: '',
    address: '',
    profession: '',
    monthlyIncome: '',
    employer: '',
    password: '',
    confirmPassword: '',
    terms: false,
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation des mots de passe
    const passwordValidation = validatePassword(
      formData.password, 
      formData.confirmPassword, 
      language
    );
    
    if (!passwordValidation.isValid) {
      alert(passwordValidation.message);
      return;
    }

    // Vérification des conditions
    if (!formData.terms) {
      alert(language === 'mg'
        ? 'Tsy maintsy manaiky ny fepetra ianao'
        : 'Vous devez accepter les conditions générales'
      );
      return;
    }

    setIsLoading(true);

    // Simulation d'envoi
    setTimeout(() => {
      setIsLoading(false);
      
      const successMessage = language === 'mg'
        ? '✓ Kaonty voaforona soa aman-tsara !\n\n📧 Mailaka fanamafisana nalefa\n📱 SMS fanamafisana nalefa\n\nRedirection mankany amin\'ny espace client...'
        : '✓ Compte créé avec succès !\n\n📧 Email de confirmation envoyé\n📱 SMS de confirmation envoyé\n\nRedirection vers votre espace client...';
      
      alert(successMessage);
      navigate('/espace-client');
    }, 2000);
  };

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit
  };
}