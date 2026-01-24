
import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { DOMAIN_PRICING_DATA, AFFILIATE_LINK } from '../constants';

interface DomainPricingTableProps {
  language: 'bn' | 'en';
}

const DomainPricingTable: React.FC<DomainPricingTableProps> = ({ language }) => {
  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  return (
    <div className="max-w-5xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50/30">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{t("ডোমেইন এক্সটেনশন এবং প্রাইজ লিস্ট", "Domain Extensions & Pricing")}</h3>
            <p className="text-gray-500 mt-1">{t("সাশ্রয়ী মূল্যে আপনার পছন্দের ডোমেইনটি আজই রেজিস্ট্রেশন করুন", "Register your favorite domain today at an affordable price")}</p>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
            <span className="text-sm font-medium text-blue-700">{t("স্পেশাল ডিসকাউন্ট অফার চলছে", "Special Discounts Live")}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-gray-600 text-sm uppercase tracking-wider">
                <th scope="col" className="px-8 py-4 font-bold">{t("এক্সটেনশন", "Extension")}</th>
                <th scope="col" className="px-8 py-4 font-bold">{t("ক্যাটাগরি", "Category")}</th>
                <th scope="col" className="px-8 py-4 font-bold text-center">{t("রেজিস্ট্রেশন মূল্য", "Registration Price")}</th>
                <th scope="col" className="px-8 py-4 font-bold text-right">{t("অ্যাকশন", "Action")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {DOMAIN_PRICING_DATA.map((item, idx) => (
                <tr key={idx} className="hover:bg-blue-50/20 transition-colors group">
                  <td className="px-8 py-6 font-black text-xl text-blue-600">
                    <span className="group-hover:scale-110 transition-transform inline-block">
                      {item.tld}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tighter ${
                      item.type_en === 'Popular' ? 'bg-orange-100 text-orange-600' : 
                      item.type_en === 'Trending' ? 'bg-indigo-100 text-indigo-600' :
                      item.type_en === 'Cheap' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {t(item.type_bn, item.type_en)}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-extrabold text-gray-900">{t(item.price_bn, item.price_en)} <span className="text-xs font-normal text-gray-400">/{t("বছর", "Year")}</span></span>
                      <span className="text-xs text-gray-400 line-through" aria-hidden="true">{t(item.original_bn, item.original_en)}</span>
                      <span className="sr-only">Previous price {t(item.original_bn, item.original_en)}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <a 
                      href={`${AFFILIATE_LINK}&a=add&domain=register&query=example${item.tld.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.tld} domain registration`}
                      className="inline-flex items-center space-x-2 bg-white border-2 border-blue-600 text-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95"
                    >
                      <span>{t("রেজিস্ট্রেশন করুন", "Register Now")}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 bg-blue-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="w-6 h-6 text-blue-200" aria-hidden="true" />
            <span className="text-sm md:text-base font-medium">{t("ডোমেইন ট্রান্সফার এবং রিনিউয়াল প্রাইজ জানতে ভিজিট করুন", "Visit for domain transfer and renewal pricing")}</span>
          </div>
          <a 
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
          >
            {t("ফুল প্রাইজ লিস্ট দেখুন", "View Full Price List")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DomainPricingTable;
