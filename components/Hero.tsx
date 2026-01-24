
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

interface HeroProps {
  language: 'bn' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  return (
    <section id="home" className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              {t("#১ হোস্টিং গাইড বাংলাদেশ", "#1 Hosting Guide Bangladesh")}
            </span>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
              {t("বিকাশ বা নগদে কিনুন", "Buy with bKash or Nagad")} <br />
              <span className="text-blue-600">{t("সেরা ওয়েব হোস্টিং", "Best Web Hosting")}</span>
            </h1>
            <p className="mt-4 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              {t("ডোমেইন এবং হোস্টিং কেনা এখন পানির মতো সহজ! ইন্টারন্যাশনাল ক্রেডিট কার্ড ছাড়াই লোকাল পেমেন্ট মেথড ব্যবহার করে আজই আপনার অনলাইন যাত্রা শুরু করুন।", "Buying domain and hosting is now easier than ever! Start your online journey today using local payment methods without an international credit card.")}
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-lg transition-transform hover:scale-105"
                >
                  {t("এখনই শুরু করুন", "Get Started Now")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#guides"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  {t("টিউটোরিয়াল দেখুন", "Watch Tutorials")}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                t('তাত্ক্ষণিক অ্যাক্টিভেশন', 'Instant Activation'),
                t('ফ্রি এসএসএল সার্টিফিকেট', 'Free SSL Certificate'),
                t('২৪/৭ এক্সপার্ট সাপোর্ট', '24/7 Expert Support')
              ].map((item) => (
                <div key={item} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             <div className="relative mx-auto w-full rounded-lg shadow-2xl overflow-hidden bg-white p-2">
                <img 
                  src="https://picsum.photos/seed/hosting/800/600" 
                  alt="Web Hosting Dashboard" 
                  className="w-full h-auto rounded-md"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-600/10 backdrop-blur-[2px]">
                   <div className="bg-white/90 p-4 rounded-xl shadow-xl flex items-center space-x-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BKash_Logo.png/640px-BKash_Logo.png" alt="bKash" className="h-8 w-auto" />
                      <span className="font-bold text-gray-800">{t("লোকাল পেমেন্ট সাপোর্ট", "Local Payment Support")}</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
