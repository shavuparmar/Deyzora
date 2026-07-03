/**
 * Utility functions to prevent XSS and ensure data safety
 */

export const escapeHTML = (str) => {
  if (typeof str !=='string') return str;
  return str
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
};

export const stripTags = (str) => {
  if (typeof str !=='string') return str;
  return str.replace(/<\/?[^>]+(>|$)/g,"");
};

export const trimWhitespace = (str) => {
  if (typeof str !=='string') return str;
  return str.trim();
};

export const sanitizeInput = (input) => {
  if (typeof input !=='string') return input;
  // First strip all HTML tags, then trim whitespace, then escape any remaining special chars
  return escapeHTML(trimWhitespace(stripTags(input)));
};

export const sanitizeFormData = (formData) => {
  const sanitized = {};
  for (const key in formData) {
    if (Object.prototype.hasOwnProperty.call(formData, key)) {
      if (typeof formData[key] ==='string') {
        sanitized[key] = sanitizeInput(formData[key]);
      } else if (Array.isArray(formData[key])) {
        sanitized[key] = formData[key].map(item => sanitizeInput(item));
      } else {
        sanitized[key] = formData[key];
      }
    }
  }
  return sanitized;
};
