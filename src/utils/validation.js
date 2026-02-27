// src/utils/validation.js

export const validatePassword = (password, confirmPassword, language) => {
  if (password !== confirmPassword) {
    return {
      isValid: false,
      message: language === 'mg' 
        ? 'Ny teny miafina tsy mitovy'
        : 'Les mots de passe ne correspondent pas'
    };
  }
  
  if (password.length < 8) {
    return {
      isValid: false,
      message: language === 'mg'
        ? 'Ny teny miafina dia tokony ho 8 litera farafahakeliny'
        : 'Le mot de passe doit contenir au moins 8 caractères'
    };
  }
  
  return { isValid: true, message: '' };
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^\+?[0-9]{10,15}$/;
  return re.test(phone.replace(/\s/g, ''));
};