
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { getHostingAdvice } from '../services/geminiService';
import { MessageRole, ChatMessage } from '../types';

interface AIAssistantProps {
  language: 'bn' | 'en';
}

const AIAssistant: React.FC<AIAssistantProps> = ({ language }) => {
  const t = (bn: string, en: string) => language === 'bn' ? bn : en;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      { role: MessageRole.MODEL, text: t("আসসালামু আলাইকুম! আমি আপনার হোস্টিং এক্সপার্ট। ডোমেইন বা হোস্টিং নিয়ে কোনো প্রশ্ন থাকলে নির্দ্বিধায় জিজ্ঞাসা করুন।", "Assalamu Alaikum! I am your hosting expert. Feel free to ask any questions about domains or hosting.") }
    ]);
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: MessageRole.USER, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const advice = await getHostingAdvice(messages, input);
    setMessages(prev => [...prev, { role: MessageRole.MODEL, text: advice }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen ? (
        <div 
          role="dialog"
          aria-label={t("AI হোস্টিং অ্যাসিস্ট্যান্ট", "AI Hosting Assistant")}
          className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-white">
              <Bot className="w-6 h-6" aria-hidden="true" />
              <span className="font-bold">{t("হোস্টিং অ্যাসিস্ট্যান্ট", "Hosting Assistant")}</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:bg-blue-700 p-1 rounded transition-colors"
              aria-label={t("চ্যাট উইন্ডো বন্ধ করুন", "Close Chat")}
            >
              <Minimize2 className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
            role="log"
            aria-live="polite"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div 
                  aria-label={msg.role === MessageRole.USER ? t("আপনার বার্তা", "Your message") : t("অ্যাসিস্ট্যান্টের বার্তা", "Assistant message")}
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === MessageRole.USER 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl shadow-sm" aria-label={t("অ্যাসিস্ট্যান্ট লিখছে...", "Assistant is typing...")}>
                  <Loader2 className="w-5 h-5 animate-spin text-blue-600" aria-hidden="true" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-200 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t("আপনার প্রশ্নটি এখানে লিখুন...", "Type your question here...")}
              aria-label={t("বার্তা লিখুন", "Type message")}
              className="flex-1 bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 text-sm placeholder:text-gray-400"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              disabled={isLoading}
              aria-label={t("বার্তা পাঠান", "Send message")}
            >
              <Send className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 group relative"
          aria-label={t("AI হোস্টিং অ্যাসিস্ট্যান্ট চ্যাট শুরু করুন", "Start AI Chat")}
          aria-expanded="false"
        >
          <Bot className="w-8 h-8" aria-hidden="true" />
          <span className="absolute -top-12 right-0 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none" aria-hidden="true">
            {t("সহায়তার জন্য এখানে ক্লিক করুন", "Click here for help")}
          </span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
