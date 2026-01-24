
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../constants';

interface TestimonialsProps {
  language: 'bn' | 'en';
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("আমাদের গ্রাহকদের মতামত", "What Our Customers Say")}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t("শতাধিক সন্তুষ্ট গ্রাহকের ভালোবাসা আমাদের এগিয়ে চলার প্রেরণা", "The love from hundreds of satisfied customers drives us forward")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <div key={idx} className="relative bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="absolute top-6 right-8 text-blue-100">
                <Quote className="w-12 h-12 fill-current" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-8 relative z-10">
                "{t(testimonial.text_bn, testimonial.text_en)}"
              </p>

              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={t(testimonial.name_bn, testimonial.name_en)} 
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t(testimonial.name_bn, testimonial.name_en)}</h4>
                  <p className="text-sm text-gray-500">{t(testimonial.role_bn, testimonial.role_en)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
