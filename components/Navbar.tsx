
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search, Languages } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

interface NavbarProps {
  onSearch: (query: string) => void;
  language: 'bn' | 'en';
  onToggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, language, onToggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(val);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  return (
    <nav 
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-white py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <a href="#home" onClick={handleLinkClick} className="flex items-center space-x-2" aria-label="BD Hosting Pro Home">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Globe className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="hidden sm:inline text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                {t("বিডি হোস্টিং প্রো", "BD Hosting Pro")}
              </span>
            </a>
          </div>

          <div className="hidden lg:flex flex-1 max-w-sm mx-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="search"
              value={query}
              onChange={handleSearchChange}
              placeholder={t("সার্ভিস খুঁজতে এখানে লিখুন...", "Search for services...")}
              aria-label={t("সার্ভিস সার্চ করুন", "Search services")}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" onClick={handleLinkClick} className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">{t("হোম", "Home")}</a>
            <a href="#services" onClick={handleLinkClick} className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">{t("সার্ভিসসমূহ", "Services")}</a>
            <a href="#guides" onClick={handleLinkClick} className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">{t("টিউটোরিয়াল", "Guides")}</a>
            
            <button 
              onClick={onToggleLanguage}
              className="flex items-center space-x-1.5 text-gray-600 hover:text-blue-600 font-bold text-xs bg-gray-100 px-3 py-1.5 rounded-full transition-colors border border-gray-200"
              aria-label={t("ভাষা পরিবর্তন করুন", "Change Language")}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'ENGLISH' : 'বাংলা'}</span>
            </button>

            <a 
              href={AFFILIATE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
            >
              {t("এখনই কিনুন", "Buy Now")}
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-3">
             <button 
                onClick={onToggleLanguage}
                className="text-gray-600 p-2 bg-gray-100 rounded-full text-xs font-bold border border-gray-200"
                aria-label="Toggle Language"
             >
               {language === 'bn' ? 'EN' : 'BN'}
             </button>
             <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isOpen}
             >
               {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="bg-white p-4 space-y-4 shadow-xl">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="search"
              value={query}
              onChange={handleSearchChange}
              placeholder={t("সার্ভিস খুঁজতে এখানে লিখুন...", "Search for services...")}
              aria-label="Search mobile"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
            />
          </div>
          <a href="#home" className="block text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-50" onClick={handleLinkClick}>{t("হোম", "Home")}</a>
          <a href="#services" className="block text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-50" onClick={handleLinkClick}>{t("সার্ভিসসমূহ", "Services")}</a>
          <a href="#guides" className="block text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-50" onClick={handleLinkClick}>{t("টিউটোরিয়াল", "Guides")}</a>
          <a href="#faq" className="block text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-50" onClick={handleLinkClick}>{t("এফএকিউ", "FAQ")}</a>
          <a 
            href={AFFILIATE_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white px-5 py-3 rounded-lg text-center font-semibold mt-4 shadow-md"
          >
            {t("সার্ভিস দেখুন", "Explore Services")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
