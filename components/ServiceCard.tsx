
import React from 'react';
import { Check, Star } from 'lucide-react';
import { ServiceCardProps } from '../types';

interface ExtendedServiceCardProps extends ServiceCardProps {
  billingInfo?: string;
  language: 'bn' | 'en';
}

const ServiceCard: React.FC<ExtendedServiceCardProps> = ({ title, price, billingInfo, features, link, icon, popular, language }) => {
  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  return (
    <div className={`relative group flex flex-col p-8 bg-white border rounded-2xl transition-all duration-500 transform ${
      popular 
        ? 'border-blue-500 shadow-xl scale-105 z-10 hover:scale-[1.07] hover:shadow-2xl' 
        : 'border-gray-200 shadow-sm hover:shadow-xl hover:scale-[1.03] hover:border-blue-200 hover:z-10'
    }`}>
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-20 shadow-lg flex items-center space-x-1 whitespace-nowrap border-2 border-white animate-bounce-subtle">
          <Star className="w-3 h-3 fill-current" aria-hidden="true" />
          <span>{t("সবচেয়ে জনপ্রিয়", "MOST POPULAR")}</span>
        </div>
      )}
      
      <div className="mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" aria-hidden="true">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="flex flex-col mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-extrabold text-blue-600">{price}</span>
          <span className="ml-1 text-gray-500 text-sm">{t("থেকে", "from")}</span>
        </div>
        {billingInfo && (
          <span className="text-xs text-gray-400 font-medium mt-1">{billingInfo}</span>
        )}
      </div>

      <ul className="flex-1 space-y-4 mb-8" aria-label={`${title} features`}>
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-600">
            <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Buy ${title} now`}
        className={`w-full py-3 px-6 rounded-xl font-bold text-center transition-all duration-300 ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg' 
            : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
        }`}
      >
        {t("এখনই কিনুন", "Buy Now")}
      </a>
    </div>
  );
};

export default ServiceCard;
