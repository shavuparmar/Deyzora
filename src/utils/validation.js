export const validateEmail = (email) => {
  if (!email) return false;
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).trim().toLowerCase());
};

export const validatePhone = (phone) => {
  if (!phone) return false;
  // Allows +, -, spaces, and numbers. Must be at least 7 digits in total.
  const digits = String(phone).replace(/\D/g,'');
  if (digits.length < 7 || digits.length > 15) return false;
  const re = /^[\d\+\-\(\)\s]+$/;
  return re.test(String(phone).trim());
};

export const isEmpty = (val) => {
  if (val === undefined || val === null) return true;
  if (typeof val ==='string' && val.trim() ==='') return true;
  return false;
};

export const validateMinLength = (str, min) => {
  if (isEmpty(str)) return false;
  return String(str).trim().length >= min;
};
