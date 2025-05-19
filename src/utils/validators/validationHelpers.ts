export const isValidEmailOrPhone = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{9,15}$/;
  return emailRegex.test(value) || phoneRegex.test(value);
};

export const isValidPassword = (value: string): boolean => {
  return /^(?=.*\d)(?=.*[^\d]).{8,}$/.test(value);
};
