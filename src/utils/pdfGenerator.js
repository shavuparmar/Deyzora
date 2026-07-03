import * as html2pdfModule from'html2pdf.js';
const html2pdf = html2pdfModule.default ? html2pdfModule.default : html2pdfModule;

/**
 * Generates a high-quality multi-page PDF from a DOM element using html2pdf
 * @param {HTMLElement} element - The DOM element to capture
 * @param {string} filename - Output filename
 */
export const generatePremiumPDF = async (element, filename ='Quotation.pdf') => {
  if (!element) return;

  const opt = {
    margin:       [10, 0, 10, 0], // Top, Left, Bottom, Right margins in mm
    filename:     filename,
    image:        { type:'jpeg', quality: 1.0 },
    html2canvas:  { 
      scale: 2, 
      useCORS: true, 
      allowTaint: true,
      logging: false, 
      windowWidth: 1000 
    },
    jsPDF:        { unit:'mm', format:'a4', orientation:'portrait' },
    pagebreak:    { mode: ['avoid-all','css','legacy'] }
  };

  // Temporarily force Desktop layout proportions so mobile generation looks identical
  const originalOverflow = element.style.overflow;
  const originalMaxHeight = element.style.maxHeight;
  const originalWidth = element.style.width;
  const originalMaxWidth = element.style.maxWidth;
  
  element.style.overflow ='visible';
  element.style.maxHeight ='none';
  element.style.width ='1000px';
  element.style.maxWidth ='1000px';

  try {
    await html2pdf().set(opt).from(element).save();
  } finally {
    // Restore original styles
    element.style.overflow = originalOverflow;
    element.style.maxHeight = originalMaxHeight;
    element.style.width = originalWidth;
    element.style.maxWidth = originalMaxWidth;
  }
};
