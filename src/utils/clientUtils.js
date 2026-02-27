// src/utils/clientUtils.js

export const getStatusClass = (status) => {
  switch(status) {
    case 'active': return 'status-active';
    case 'pending': return 'status-pending';
    case 'approved': return 'status-approved';
    case 'completed': return 'status-completed';
    default: return '';
  }
};

export const getPaymentItemClass = (status) => {
  switch(status) {
    case 'next': return 'payment-item next';
    case 'paid': return 'payment-item paid';
    case 'overdue': return 'payment-item overdue';
    default: return 'payment-item';
  }
};

export const getPaymentStatusStyle = (status) => {
  switch(status) {
    case 'next':
      return { background: '#ffc107', color: '#212529' };
    case 'scheduled':
      return { background: '#6c757d', color: 'white' };
    case 'paid':
      return { background: '#28a745', color: 'white' };
    default:
      return { background: '#6c757d', color: 'white' };
  }
};

export const formatCurrency = (amount) => {
  return amount;
};