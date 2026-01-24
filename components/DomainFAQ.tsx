
import React from 'react';
import { HelpCircle, ShieldCheck, Globe, Settings2, PlusCircle } from 'lucide-react';

interface DomainFAQProps {
  language: 'bn' | 'en';
}

const DomainFAQ: React.FC<DomainFAQProps> = ({ language }) => {
  const t = (bn: string, en: string) => language === 'bn' ? bn : en;

  const faqs = [
    {
      question_bn: "ডোমেইন কিভাবে রেজিস্ট্রেশন করবো?",
      question_en: "How to register a domain?",
      answer_bn: "খুবই সহজ! আমাদের ডোমেইন সার্চ বারে আপনার পছন্দের নামটি লিখে 'খুঁজুন' বাটনে ক্লিক করুন। ডোমেইনটি অ্যাভেইলেবল থাকলে আপনি সরাসরি পুতুলহোস্ট প্যানেলে গিয়ে আপনার তথ্য দিয়ে এবং বিকাশ/নগদ পেমেন্ট করে কয়েক মিনিটেই রেজিস্ট্রেশন সম্পন্ন করতে পারবেন।",
      answer_en: "Very simple! Type your desired name in our search bar and click 'Search'. If available, proceed to PutulHost panel, enter your details, pay via bKash/Nagad, and your registration will be complete in minutes.",
      icon: <PlusCircle className="w-6 h-6 text-blue-500" />
    },
    {
      question_bn: "ডোমেইন প্রাইভেসি (ID Protection) কি এবং কেন প্রয়োজন?",
      question_en: "What is domain privacy (ID Protection)?",
      answer_bn: "ডোমেইন প্রাইভেসি বা WHOIS প্রোটেকশন আপনার ব্যক্তিগত তথ্য যেমন নাম, ইমেইল এবং ফোন নম্বর পাবলিক ডাটাবেস থেকে লুকিয়ে রাখে। এটি আপনাকে অনাকাঙ্ক্ষিত স্প্যাম কল, ইমেইল এবং পটেনশিয়াল হ্যাকিং থেকে সুরক্ষা দেয়।",
      answer_en: "Domain privacy (WHOIS protection) hides your personal information like name, email, and phone from public databases. It protects you from unwanted spam calls, emails, and potential hacking attempts.",
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />
    },
    {
      question_bn: "ডিএনএস (DNS) রেকর্ড কিভাবে ম্যানেজ করবো?",
      question_en: "How to manage DNS records?",
      answer_bn: "আমাদের প্রতিটি ডোমেইনের সাথে আপনি একটি ফ্রি এবং পাওয়ারফুল কন্ট্রোল প্যানেল পাবেন। সেখান থেকে আপনি সহজেই A Record, CNAME, MX Record, এবং TXT Record ম্যানেজ করতে পারবেন। কোনো টেকনিক্যাল সাহায্যের প্রয়োজন হলে আমাদের ২৪/৭ সাপোর্ট টিম তো আছেই!",
      answer_en: "Every domain comes with a free powerful control panel. You can easily manage A Records, CNAME, MX, and TXT records there. If you need technical help, our 24/7 support team is always available!",
      icon: <Settings2 className="w-6 h-6 text-purple-500" />
    },
    {
      question_bn: "আমি কি অন্য প্রোভাইডার থেকে ডোমেইন ট্রান্সফার করে আনতে পারবো?",
      question_en: "Can I transfer domain from another provider?",
      answer_bn: "হ্যাঁ, অবশ্যই! আপনি আপনার বর্তমান প্রোভাইডার থেকে ডোমেইন অথরাইজেশন কোড (EPP Code) সংগ্রহ করে আমাদের এখানে ট্রান্সফার করতে পারবেন। ট্রান্সফারের সাথে সাধারণত ১ বছরের রিনিউয়াল ফ্রি পাওয়া যায়।",
      answer_en: "Yes, definitely! Get the EPP Code (Auth Code) from your current provider and start the transfer here. You usually get a free 1-year renewal with the transfer.",
      icon: <Globe className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-10 justify-center md:justify-start">
          <div className="bg-blue-100 p-2 rounded-lg">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("ডোমেইন সংক্রান্ত প্রশ্নোত্তর", "Domain Related Q&A")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1 transform group-hover:scale-110 transition-transform">
                  {faq.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {t(faq.question_bn, faq.question_en)}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(faq.answer_bn, faq.answer_en)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainFAQ;
