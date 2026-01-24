
import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieConsentProps {
  language: 'bn' | 'en';
}

const CookieConsent: React.FC<CookieConsentProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const CONSENT_KEY = 'bd_hosting_cookie_consent';

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: 'granted' | 'denied') => {
    localStorage.setItem(CONSENT_KEY, choice);
    setIsVisible(false);
  };

  const t = (bn: string, en: string) => (language === 'bn' ? bn : en);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[110] p-4 md:p-6 animate-in slide-in-from-bottom duration-500"
      role="alert"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-6 md:flex md:items-center md:justify-between gap-6">
          <div className="flex items-start space-x-4 mb-6 md:mb-0">
            <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                {t("আপনার গোপনীয়তা আমাদের অগ্রাধিকার", "Your Privacy is Our Priority")}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                {t(
                  "আমরা আমাদের ওয়েবসাইটে আপনার অভিজ্ঞতা উন্নত করতে এবং আমাদের ট্রাফিক বিশ্লেষণ করতে কুকি ব্যবহার করি। 'সম্মতি দিন' ক্লিক করার মাধ্যমে আপনি আমাদের কুকি ব্যবহারে একমত পোষণ করছেন।",
                  "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept', you consent to our use of cookies."
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => handleConsent('denied')}
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t("প্রত্যাখ্যান করুন", "Decline")}
            </button>
            <button
              onClick={() => handleConsent('granted')}
              className="w-full sm:w-auto px-8 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              {t("সম্মতি দিন", "Accept All")}
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="hidden md:block text-gray-400 hover:text-gray-600 ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
