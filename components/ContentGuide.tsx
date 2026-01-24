
import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface GuideItem {
  id: string;
  title: string;
  description: string;
  steps?: string[];
  note?: string;
  image: string;
  linkText: string;
  link: string;
}

interface ContentGuideProps {
  guides: GuideItem[];
  language: 'bn' | 'en';
}

const ContentGuide: React.FC<ContentGuideProps> = ({ guides, language }) => {
  if (guides.length === 0) return null;
  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  return (
    <section id="guides" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("কিভাবে ডোমেইন কিনবেন এবং সেটআপ করবেন?", "How to Buy & Setup Domain?")}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t("নতুনদের জন্য কমপ্লিট স্টেপ-বাই-স্টেপ গাইড", "Complete step-by-step guide for beginners")}
          </p>
        </div>

        <div className="space-y-24">
          {guides.map((guide, index) => (
            <div 
              key={guide.id} 
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 flex-shrink-0" />
                  {guide.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {guide.description}
                </p>
                {guide.steps && (
                  <ul className="space-y-3 mb-8">
                    {guide.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start">
                        <span className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold mr-3 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {guide.note && (
                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-8">
                    <p className="font-medium text-blue-900 mb-1">{t("গুরুত্বপূর্ণ নোট:", "Important Note:")}</p>
                    <p className="text-blue-800 text-sm italic">
                      {guide.note}
                    </p>
                  </div>
                )}
                <a 
                  href={guide.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-600 font-bold hover:underline"
                >
                  {guide.linkText} <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <img src={guide.image} alt={guide.title} className="w-full h-auto transform hover:scale-105 transition duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGuide;
