
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DomainChecker from './components/DomainChecker';
import DomainPricingTable from './components/DomainPricingTable';
import DomainFAQ from './components/DomainFAQ';
import ServiceCard from './components/ServiceCard';
import ContentGuide from './components/ContentGuide';
import AIAssistant from './components/AIAssistant';
import Testimonials from './components/Testimonials';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import { SERVICES_DATA, WHY_US_FEATURES, AFFILIATE_LINK, GUIDES_DATA, CATEGORICAL_SERVICES } from './constants';
import { Shield, Zap, CreditCard, SearchX, ArrowRight } from 'lucide-react';

const ServiceSkeleton = () => (
  <div className="animate-pulse bg-white border border-gray-200 rounded-2xl p-8 h-[450px] flex flex-col">
    <div className="w-12 h-12 bg-gray-200 rounded-lg mb-6"></div>
    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-10 bg-gray-200 rounded w-1/2 mb-8"></div>
    <div className="space-y-4 flex-1">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
    <div className="mt-8">
      <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');

  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingServices(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return SERVICES_DATA;
    const lowerQuery = searchQuery.toLowerCase();
    return SERVICES_DATA.filter(service => 
      service.title_bn.toLowerCase().includes(lowerQuery) || 
      service.title_en.toLowerCase().includes(lowerQuery) ||
      service.features_bn.some(f => f.toLowerCase().includes(lowerQuery)) ||
      service.features_en.some(f => f.toLowerCase().includes(lowerQuery))
    );
  }, [searchQuery]);

  const filteredGuides = useMemo(() => {
    if (!searchQuery.trim()) return GUIDES_DATA;
    const lowerQuery = searchQuery.toLowerCase();
    return GUIDES_DATA.filter(guide => 
      guide.title_bn.toLowerCase().includes(lowerQuery) || 
      guide.title_en.toLowerCase().includes(lowerQuery) ||
      guide.description_bn.toLowerCase().includes(lowerQuery) ||
      guide.description_en.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const hasResults = filteredServices.length > 0 || filteredGuides.length > 0;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'bn' ? 'en' : 'bn');
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar onSearch={setSearchQuery} language={language} onToggleLanguage={toggleLanguage} />
      
      <main className="flex-grow">
        {!searchQuery && <Hero language={language} />}
        {!searchQuery && <DomainChecker language={language} />}
        {!searchQuery && <DomainPricingTable language={language} />}
        {!searchQuery && <DomainFAQ language={language} />}

        {/* Local Payment Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
           <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                 {t("ইন্টারন্যাশনাল কার্ড নেই? কোনো সমস্যা নেই!", "No International Card? No Problem!")}
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center space-x-2 text-white/90">
                   <CreditCard className="w-8 h-8" />
                   <span className="text-lg font-medium">{t("বিকাশ পেমেন্ট", "bKash Payment")}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                   <Shield className="w-8 h-8" />
                   <span className="text-lg font-medium">{t("নগদ পেমেন্ট", "Nagad Payment")}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                   <Zap className="w-8 h-8" />
                   <span className="text-lg font-medium">{t("তাত্ক্ষণিক সক্রিয়করণ", "Instant Activation")}</span>
                </div>
              </div>
           </div>
        </div>

        {searchQuery && !hasResults && (
          <div className="py-20 text-center flex flex-col items-center">
            <SearchX className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">{t("দুঃখিত, কোনো ফলাফল খুঁজে পাওয়া যায়নি", "Sorry, no results found")}</h3>
            <p className="text-gray-500 mt-2">{t("অন্য কোনো কি-ওয়ার্ড দিয়ে চেষ্টা করুন", "Try another keyword")}</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 text-blue-600 font-bold hover:underline"
            >
              {t("সব সার্ভিস দেখুন", "View All Services")}
            </button>
          </div>
        )}

        {/* Main Pricing Grid */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {t("সবচেয়ে সাশ্রয়ী হোস্টিং প্যাকেজসমূহ", "Most Affordable Hosting Packages")}
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                {t("আপনার প্রয়োজন অনুযায়ী সেরা প্ল্যানটি বেছে নিন", "Choose the best plan according to your needs")}
              </p>
            </div>
            
            {isLoadingServices ? (
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <ServiceSkeleton key={i} />
                ))}
              </div>
            ) : filteredServices.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8">
                {filteredServices.map((service, idx) => (
                  <ServiceCard 
                    key={idx} 
                    title={language === 'bn' ? service.title_bn : service.title_en}
                    price={language === 'bn' ? service.price_bn : service.price_en}
                    billingInfo={language === 'bn' ? service.billingInfo_bn : service.billingInfo_en}
                    features={language === 'bn' ? service.features_bn : service.features_en}
                    link={service.link}
                    icon={service.icon}
                    popular={service.popular}
                    language={language}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* Categorical Services Grid */}
        {!searchQuery && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold">{t("আমাদের অন্যান্য সার্ভিসসমূহ", "Our Other Services")}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORICAL_SERVICES.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group bg-gray-50/50">
                    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{t(item.title_bn, item.title_en)}</h3>
                    <p className="text-sm text-gray-500 mb-4">{t(item.desc_bn, item.desc_en)}</p>
                    <div className="text-blue-600 font-bold text-sm mb-4">{t(item.price_bn, item.price_en)}</div>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-xs font-black uppercase tracking-wider text-gray-900 hover:text-blue-600"
                    >
                      {t("প্লাল দেখুন", "View Plan")} <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        {!searchQuery && (
          <section className="py-24 bg-gray-50 border-y border-gray-100">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold">{t("আমাদের বৈশিষ্ট্যসমূহ", "Our Features")}</h2>
               </div>
               <div className="grid md:grid-cols-3 gap-12">
                 {WHY_US_FEATURES.map((feature, idx) => (
                   <div key={idx} className="text-center group cursor-default relative">
                      <div className="relative inline-flex items-center justify-center p-4 bg-white text-blue-600 rounded-2xl mb-6 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl">
                        {feature.icon}
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 p-2 bg-gray-900 text-white text-[10px] leading-tight rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 shadow-xl z-20 text-center">
                          {t(feature.description_bn, feature.description_en)}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-blue-600">
                        {t(feature.title_bn, feature.title_en)}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed px-4">
                        {t(feature.description_bn, feature.description_en)}
                      </p>
                   </div>
                 ))}
               </div>
             </div>
          </section>
        )}

        {/* Rich Content Guides */}
        <ContentGuide guides={filteredGuides.map(g => ({
          ...g,
          title: language === 'bn' ? g.title_bn : g.title_en,
          description: language === 'bn' ? g.description_bn : g.description_en,
          steps: language === 'bn' ? g.steps_bn : g.steps_en,
          note: language === 'bn' ? g.note_bn : g.note_en,
          linkText: language === 'bn' ? g.linkText_bn : g.linkText_en
        }))} language={language} />

        {/* Testimonials Section */}
        {!searchQuery && <Testimonials language={language} />}

        {/* Final CTA */}
        <section className="py-24 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                {t("আজই আপনার ওয়েবসাইট লাইভ করুন!", "Get Your Website Live Today!")}
             </h2>
             <p className="text-blue-100 text-xl mb-12">
                {t("পুতুলহোস্ট-এর মাধ্যমে শুরু করুন আর উপভোগ করুন বাংলাদেশের সেরা কাস্টমার সাপোর্ট এবং লোকাল পেমেন্ট সুবিধা।", "Start with PutulHost and enjoy the best customer support and local payment methods in Bangladesh.")}
             </p>
             <a 
              href={AFFILIATE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-xl shadow-2xl hover:bg-gray-100 transition-transform hover:scale-105"
             >
                {t("সার্ভিসগুলো দেখুন", "Explore Services")}
             </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
             <h2 className="text-3xl font-bold text-center mb-12">{t("সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)", "Frequently Asked Questions")}</h2>
             <div className="space-y-6">
               {[
                 { 
                   q_bn: "কিভাবে আমি বিকাশ দিয়ে পেমেন্ট করবো?", 
                   q_en: "How can I pay via bKash?",
                   a_bn: "অর্ডার করার পর পেমেন্ট গেটওয়েতে বিকাশ লোগো সিলেক্ট করুন এবং আপনার নম্বর দিয়ে ওটিপি ভেরিফাই করে পেমেন্ট সম্পন্ন করুন।",
                   a_en: "Select the bKash logo at the payment gateway after ordering, enter your number, verify the OTP, and complete the payment."
                 },
                 { 
                   q_bn: "ডোমেইন কত দ্রুত অ্যাক্টিভ হয়?", 
                   q_en: "How fast is domain activation?",
                   a_bn: "পেমেন্ট সম্পন্ন করার সাথে সাথেই সাধারণত ডোমেইন এবং হোস্টিং অ্যাক্টিভ হয়ে যায়।",
                   a_en: "Domains and hosting are usually activated immediately after the payment is successfully completed."
                 },
                 { 
                   q_bn: "আমি কি পরে হোস্টিং প্ল্যান পরিবর্তন করতে পারবো?", 
                   q_en: "Can I upgrade my hosting plan later?",
                   a_bn: "হ্যাঁ, যেকোনো সময় আপনি আপনার ক্লায়েন্ট এরিয়া থেকে হোস্টিং প্ল্যান আপগ্রেড করতে পারবেন।",
                   a_en: "Yes, you can upgrade your hosting plan anytime from your client dashboard."
                 }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-2">{t(item.q_bn, item.q_en)}</h5>
                    <p className="text-gray-600">{t(item.a_bn, item.a_en)}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
      <AIAssistant language={language} />
      <BackToTop />
    </div>
  );
};

export default App;
