
import React from 'react';
import { Globe, Heart } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

interface FooterProps {
  language: 'bn' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold">{t("বিডি হোস্টিং প্রো", "BD Hosting Pro")}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("বাংলাদেশের সেরা ডোমেইন এবং হোস্টিং গাইড। আমরা আপনাকে সাহায্য করি সঠিক সার্ভিস বেছে নিতে এবং লোকাল কারেন্সিতে দ্রুত পেমেন্ট সম্পন্ন করতে।", "Bangladesh's best domain and hosting guide. We help you choose the right service and complete payments quickly in local currency.")}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{t("প্রয়োজনীয় লিংক", "Useful Links")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-blue-500 transition">{t("হোস্টিং সার্ভিসসমূহ", "Hosting Services")}</a></li>
              <li><a href="#guides" className="hover:text-blue-500 transition">{t("ডোমেইন রেজিস্ট্রেশন", "Domain Registration")}</a></li>
              <li><a href="#faq" className="hover:text-blue-500 transition">{t("পেমেন্ট মেথড", "Payment Methods")}</a></li>
              <li><a href={AFFILIATE_LINK} className="hover:text-blue-500 transition">{t("অ্যাফিলিয়েট পার্টনার", "Affiliate Partner")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t("গাইডসমূহ", "Guides")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition">{t("সিপ্যানেল টিউটোরিয়াল", "cPanel Tutorials")}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">{t("ওয়ার্ডপ্রেস সেটআপ", "WordPress Setup")}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">{t("এসএসএল সার্টিফিকেশন", "SSL Certification")}</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">{t("সাইট ট্রান্সফার", "Site Transfer")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t("পেমেন্ট সাপোর্ট", "Payment Support")}</h4>
            <div className="flex flex-wrap gap-4 grayscale opacity-70">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BKash_Logo.png/640px-BKash_Logo.png" alt="bKash" className="h-6" />
              <img src="https://www.nagad.com.bd/wp-content/uploads/2021/04/nagad-logo.png" alt="Nagad" className="h-6" />
            </div>
            <p className="mt-6 text-sm text-gray-400">
              {t("কোন আন্তর্জাতিক ক্রেডিট কার্ডের প্রয়োজন নেই।", "No international credit card required.")}
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center">
            &copy; {new Date().getFullYear()} {t("বিডি হোস্টিং প্রো। তৈরি করা হয়েছে", "BD Hosting Pro. Made with")} <Heart className="w-4 h-4 mx-1 text-red-500" /> {t("দিয়ে বাংলাদেশের ওয়েব ক্রিয়েটরদের জন্য।", "for creators in Bangladesh.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
