import { useEffect, useState } from'react';
import { useLocation } from'react-router-dom';
import { PRICING_PLANS } from'../data/pricingData';

export const usePricingPrefill = () => {
  const location = useLocation();
  const [prefillData, setPrefillData] = useState(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const planTitle = params.get('plan');
      
      if (!planTitle) {
        setPrefillData(null);
        return;
      }

      // Check if plan exists (case insensitive)
      const foundPlan = PRICING_PLANS.find(p => p.title.toLowerCase() === planTitle.toLowerCase());

      if (foundPlan) {
        setPrefillData({
          selectedPackage: foundPlan.title,
          packagePrice: foundPlan.price.replace('₹',''),
          timeline: foundPlan.timeline,
          serviceType:'Website Design' // Default or derive from plan
        });
      } else {
        // Fallback for custom or invalid plans
        setPrefillData({
          selectedPackage: planTitle,
          packagePrice: params.get('price') ||'',
          timeline: params.get('timeline') ||'',
          serviceType: params.get('service') ||'Website Design'
        });
      }
    } catch (error) {
      console.warn("Pricing prefill error:", error);
      setPrefillData(null);
    }
  }, [location.search]);

  return prefillData;
};
