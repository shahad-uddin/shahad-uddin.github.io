
import React, { useState } from 'react';
import { Search, Globe, Loader2, CheckCircle2, Shield, Settings, Lock } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

interface DomainCheckerProps {
  language: 'bn' | 'en';
}

const DomainChecker: React.FC<DomainCheckerProps> = ({ language }) => {
  const [domain, setDomain] = useState('');
  const [tld, setTld] = useState('.com');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const tlds = ['.com', '.net', '.org', '.xyz', '.top', '.fun', '.shop'];
  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    let searchTerm = domain.trim().toLowerCase();
    if (!searchTerm) return;

    // Clean the input: remove protocols, www, and special characters
    searchTerm = searchTerm.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/[^a-z0-9.-]/g, '');
    
    // Determine the full domain string
    // If the user already typed a TLD that we support, use that, otherwise append selected TLD
    const hasExistingTld = tlds.some(ext => searchTerm.endsWith(ext));
    const fullDomain = hasExistingTld ? searchTerm : `${searchTerm}${tld}`;

    setIsSearching(true);
    setShowResult(false);

    // Construct the affiliate URL with WHMCS parameters for direct domain registration search
    const redirectUrl = `${AFFILIATE_LINK}&a=add&domain=register&query=${encodeURIComponent(fullDomain)}`;

    // Simulate a brief "checking" period for better UX before redirecting
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
      
      // Redirect the user to the affiliate link
      window.location.href = redirectUrl;
    }, 1200);
  };

  return (
    <section className="relative -mt-12 pb-12 z-20" aria-labelledby="domain-search-heading">
      <div className="max-w-4xl mx-auto px-4">
        <h2 id="domain-search-heading" className="sr-only">{t("ডোমেইন সার্চ", "Domain Search")}</h2>
        <div className="bg-white rounded-3xl shadow-2xl border border-blue-50 p-2 md:p-3 overflow-hidden">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Globe className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder={t("আপনার পছন্দের ডোমেইন নামটি লিখুন...", "Enter your desired domain name...")}
                aria-label={t("ডোমেইন নাম লিখুন", "Type domain name")}
                className="block w-full pl-12 pr-4 py-4 text-lg border-none rounded-2xl md:rounded-l-2xl focus:ring-2 focus:ring-blue-500 bg-gray-50/50"
                required
              />
            </div>
            
            <div className="flex gap-2">
              <select 
                value={tld}
                onChange={(e) => setTld(e.target.value)}
                aria-label={t("ডোমেইন এক্সটেনশন নির্বাচন করুন", "Select domain extension")}
                className="bg-gray-50 border-none rounded-2xl px-4 py-4 text-lg font-bold text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                {tlds.map(t => <option key={t} value={t}>{t}</option>)}
              </select>

              <button
                type="submit"
                disabled={isSearching}
                aria-busy={isSearching}
                className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-200 flex items-center justify-center min-w-[140px]"
              >
                {isSearching ? (
                  <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" />
                ) : (
                  <>
                    <span>{t("খুঁজুন", "Search")}</span>
                    <Search className="ml-2 w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-4 px-4 flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm font-semibold text-gray-700" role="list" aria-label="TLD Pricing Summary">
            <div className="flex items-center" role="listitem">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-1.5" aria-hidden="true"></span>
              .TOP {t("৳১৮০", "৳180")}
            </div>
            <div className="flex items-center" role="listitem">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-1.5" aria-hidden="true"></span>
              .XYZ {t("৳২৯৫", "৳295")}
            </div>
            <div className="flex items-center" role="listitem">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-1.5" aria-hidden="true"></span>
              .FUN {t("৳৩৮০", "৳380")}
            </div>
            <div className="flex items-center" role="listitem">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-1.5" aria-hidden="true"></span>
              .SHOP {t("৳৩৯০", "৳390")}
            </div>
            <div className="flex items-center" role="listitem">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5" aria-hidden="true"></span>
              .COM {t("৳৯৯০", "৳990")}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="flex items-center text-gray-600 text-xs">
               <Settings className="w-4 h-4 mr-2 text-blue-500" aria-hidden="true" />
               {t("ফ্রি ডিএনএস ম্যানেজমেন্ট", "Free DNS Management")}
             </div>
             <div className="flex items-center text-gray-600 text-xs">
               <Shield className="w-4 h-4 mr-2 text-green-500" aria-hidden="true" />
               {t("ফুল ডোমেইন কন্ট্রোল প্যানেল", "Full Control Panel")}
             </div>
             <div className="flex items-center text-gray-600 text-xs">
               <Lock className="w-4 h-4 mr-2 text-purple-500" aria-hidden="true" />
               {t("ডোমেইন প্রাইভেসি প্রোটেকশন", "Privacy Protection")}
             </div>
          </div>
        </div>

        {showResult && (
          <div className="mt-4 animate-fade-in text-center" aria-live="polite">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-6 py-2 rounded-full border border-blue-100 shadow-sm">
              <CheckCircle2 className="w-5 h-5 mr-2" aria-hidden="true" />
              <span className="font-medium italic">{t("অ্যাভেইলেবিলিটি চেক করা হচ্ছে... রিডাইরেক্ট করা হচ্ছে।", "Checking availability... Redirecting to Secure Panel.")}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainChecker;
