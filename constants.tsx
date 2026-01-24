
import React from 'react';
import { 
  Server, Globe, Mail, ShieldCheck, CreditCard, Zap, 
  RefreshCw, Award, MousePointerClick, Activity, MessageSquare, Lock,
  Cpu, Database, Layers, Cloud
} from 'lucide-react';

export const AFFILIATE_LINK = "https://control.putulhost.com/aff.php?aff=4374";

export const DOMAIN_PRICING_DATA = [
  { tld: ".COM", price_bn: "৳৯৯০", price_en: "৳990", original_bn: "৳১২৫০", original_en: "৳1250", type_bn: "জনপ্রিয়", type_en: "Popular" },
  { tld: ".XYZ", price_bn: "৳২৯৫", price_en: "৳295", original_bn: "৳৯৫০", original_en: "৳950", type_bn: "ট্রেন্ডিং", type_en: "Trending" },
  { tld: ".TOP", price_bn: "৳১৮০", price_en: "৳180", original_bn: "৳৮৫০", original_en: "৳850", type_bn: "সাশ্রয়ী", type_en: "Cheap" },
  { tld: ".FUN", price_bn: "৳৩৮০", price_en: "৳380", original_bn: "৳৯০০", original_en: "৳900", type_bn: "নতুন", type_en: "New" },
  { tld: ".SHOP", price_bn: "৳৩৯০", price_en: "৳390", original_bn: "৳১২০০", original_en: "৳1200", type_bn: "বিজনেস", type_en: "Business" },
  { tld: ".NET", price_bn: "৳১২৫০", price_en: "৳1250", original_bn: "৳১৪৫০", original_en: "৳1450", type_bn: "নেটওয়ার্ক", type_en: "Network" },
  { tld: ".ORG", price_bn: "৳১৩৫০", price_en: "৳1350", original_bn: "৳১৫৫০", original_en: "৳1550", type_bn: "অর্গানাইজেশন", type_en: "Org" }
];

export const SERVICES_DATA = [
  {
    title_bn: "পিএইচ ১জিবি হোস্ট",
    title_en: "PH 1GB HOST",
    price_bn: "৳১৩০ /মাস",
    price_en: "৳130 /mo",
    billingInfo_bn: "বার্ষিক বিলিং ৳১২০০",
    billingInfo_en: "Billed annually ৳1200",
    icon: <Server className="w-8 h-8 text-blue-600" />,
    features_bn: [
      "২টি ডোমেইন হোস্ট করার সুবিধা",
      "১জিবি NVMe স্টোরেজ",
      "আনলিমিটেড ব্যান্ডউইথ",
      "১০টি সাব ডোমেইন",
      "১০টি ইমেইল অ্যাকাউন্ট",
      "১০টি ডাটাবেস",
      "রুবি, পাইথন, নোডজেএস সাপোর্ট",
      "ফ্রি এসএসএল সার্টিফিকেট",
      "লাইটস্পিড ওয়েব সার্ভার",
      "সিপ্যানেল কন্ট্রোল প্যানেল"
    ],
    features_en: [
      "Host 2 Domains",
      "1GB NVMe Storage",
      "Unlimited Bandwidth",
      "10 Sub Domains",
      "10 Email Accounts",
      "10 Databases",
      "Ruby, Python, NodeJS",
      "Free SSL Certificate",
      "LiteSpeed Web Server",
      "cPanel Control Panel"
    ],
    link: `${AFFILIATE_LINK}&gid=1`,
  },
  {
    title_bn: "প্রো ১০জিবি",
    title_en: "PRO 10GB",
    price_bn: "৳২০০ /মাস",
    price_en: "৳200 /mo",
    billingInfo_bn: "বার্ষিক বিলিং ৳২২০০",
    billingInfo_en: "Billed annually ৳2200",
    icon: <Layers className="w-8 h-8 text-indigo-600" />,
    features_bn: [
      "৫টি ডোমেইন হোস্ট করার সুবিধা",
      "১০জিবি NVMe স্টোরেজ",
      "আনলিমিটেড ব্যান্ডউইথ",
      "আনলিমিটেড ইমেইল অ্যাকাউন্ট",
      "আনলিমিটেড ডাটাবেস",
      "রুবি, পাইথন, নোডজেএস সাপোর্ট",
      "ফ্রি এসএসএল সার্টিফিকেট",
      "লাইটস্পিড ওয়েব সার্ভার",
      "সিঙ্গাপুর লোকেশন সার্ভার",
      "সিপ্যানেল কন্ট্রোল প্যানেল"
    ],
    features_en: [
      "Host 5 Domains",
      "10GB NVMe Storage",
      "Unlimited Bandwidth",
      "Unlimited Email Accounts",
      "Unlimited Databases",
      "Ruby, Python, NodeJS",
      "Free SSL Certificate",
      "LiteSpeed Web Server",
      "Singapore Server Location",
      "cPanel Control Panel"
    ],
    link: `${AFFILIATE_LINK}&gid=1`,
    popular: true
  },
  {
    title_bn: "প্রিমিয়াম ৫",
    title_en: "PREMIUM 5",
    price_bn: "৳৫০০ /মাস",
    price_en: "৳500 /mo",
    billingInfo_bn: "বার্ষিক বিলিং ৳৫৫০০",
    billingInfo_en: "Billed annually ৳5500",
    icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
    features_bn: [
      "১০টি ওয়েবসাইট হোস্ট করার সুবিধা",
      "৫জিবি NVMe স্টোরেজ",
      "আনলিমিটেড ব্যান্ডউইথ",
      "২০টি ইমেইল অ্যাকাউন্ট",
      "২০টি সাব ডোমেইন",
      "আনলিমিটেড ডাটাবেস",
      "রুবি, পাইথন, নোডজেএস সাপোর্ট",
      "ফ্রি এসএসএল সার্টিফিকেট",
      "শেল (SSH) অ্যাক্সেস",
      "সিপ্যানেল কন্ট্রোল প্যানেল"
    ],
    features_en: [
      "Host 10 Websites",
      "5GB NVMe Storage",
      "Unlimited Bandwidth",
      "20 Email Accounts",
      "20 Sub Domains",
      "Unlimited Databases",
      "Ruby, Python, NodeJS",
      "Free SSL Certificate",
      "Shell (SSH) Access",
      "cPanel Control Panel"
    ],
    link: `${AFFILIATE_LINK}&gid=1`,
  }
];

export const CATEGORICAL_SERVICES = [
  {
    title_bn: "ডোমেইন",
    title_en: "Domain",
    desc_bn: "রেজিস্ট্রেশন করুন .COM .NET .ORG .XYZ সহ আরও অনেক",
    desc_en: "Register .COM .NET .ORG .XYZ and more extensions",
    price_bn: "শুরু মাত্র ১৯৯ টাকা/বছর থেকে",
    price_en: "Starting from 199 BDT/year",
    link: `${AFFILIATE_LINK}&a=add&domain=register`,
    icon: <Globe className="w-6 h-6" />
  },
  {
    title_bn: "ওয়েব হোস্টিং",
    title_en: "Web Hosting",
    desc_bn: "ছোট ও মাঝারি সাইটের জন্য দ্রুত ও নিরাপদ হোস্টিং।",
    desc_en: "Fast and secure hosting for small to medium sites.",
    price_bn: "শুরু মাত্র ১৩০ টাকা/মাস থেকে",
    price_en: "Starting from 130 BDT/mo",
    link: `${AFFILIATE_LINK}&gid=1`,
    icon: <Server className="w-6 h-6" />
  },
  {
    title_bn: "প্রো হোস্টিং",
    title_en: "Pro Hosting",
    desc_bn: "আপনার ওয়েবসাইটের জন্য দ্রুতগতির NVMe হোস্টিং!",
    desc_en: "High-speed NVMe hosting for your website!",
    price_bn: "শুরু মাত্র ২০০ টাকা/মাস থেকে",
    price_en: "Starting from 200 BDT/mo",
    link: `${AFFILIATE_LINK}&gid=1`,
    icon: <Zap className="w-6 h-6" />
  },
  {
    title_bn: "প্রিমিয়াম হোস্টিং",
    title_en: "Premium Hosting",
    desc_bn: "বেশি রিসোর্স ও ফিচারের জন্য বিশেষ প্রিমিয়াম হোস্টিং",
    desc_en: "Premium hosting for more resources and features",
    price_bn: "শুরু মাত্র ৫০০ টাকা/মাস থেকে",
    price_en: "Starting from 500 BDT/mo",
    link: `${AFFILIATE_LINK}&gid=1`,
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const WHY_US_FEATURES = [
  {
    title_bn: "ফ্রি মাইগ্রেশন সার্ভিস",
    title_en: "Free Migration Service",
    description_bn: "আমাদের বিশেষজ্ঞদের সহায়তায় আপনার ওয়েবসাইটটি ফ্রিতে আমাদের সার্ভারে নিয়ে আসুন। এক ক্লিকেই ওয়ার্ডপ্রেস সাইট মাইগ্রেট করুন!",
    description_en: "Move your website to our servers for free with our migration experts. Migrate WordPress with a single click!",
    icon: <RefreshCw className="w-6 h-6" />
  },
  {
    title_bn: "৭ দিনের মানি ব্যাক গ্যারান্টি",
    title_en: "7 Days Money Back",
    description_bn: "আপনি যদি সন্তুষ্ট না হন, তবে ৭ দিনের মধ্যে রিফান্ড অনুরোধ করুন। আমরা আমাদের গ্রাহকদের কোনো বাধ্যবাধকতায় রাখি না।",
    description_en: "Not satisfied? Request a refund within 7 days. We don't tie our customers in with hidden contracts.",
    icon: <Award className="w-6 h-6" />
  },
  {
    title_bn: "ওয়ান-ক্লিক ডিপ্লয়",
    title_en: "One-Click Deploy",
    description_bn: "প্রতিটি হোস্টিং প্ল্যানে থাকা আমাদের ওয়ান-ক্লিক ইন্সটলার টুল ব্যবহার করে যেকোনো ধরনের ওয়েবসাইট ইন্সটল করুন মুহূর্তেই।",
    description_en: "Install any type of website instantly using our one-click installer tool available on every hosting plan.",
    icon: <MousePointerClick className="w-6 h-6" />
  },
  {
    title_bn: "৯৯.৯% আপটাইম গ্যারান্টি",
    title_en: "99.9% Uptime Guarantee",
    description_bn: "আমাদের সার্ভারগুলো এমনভাবে ডিজাইন করা হয়েছে যাতে আপনার ওয়েবসাইটটি ডাউনটাইম ছাড়াই অনলাইনে থাকে।",
    description_en: "Our servers are designed to ensure your website stays online without downtime, backed by our SLA.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title_bn: "২৪/৭ এক্সপার্ট চ্যাট সাপোর্ট",
    title_en: "24/7 Expert Support",
    description_bn: "বছরের ৩৬৫ দিনই আমাদের কাস্টমার সাপোর্ট চালু থাকে। যেকোনো সমস্যায় আমাদের বিশেষজ্ঞ টিমের সহায়তা নিন।",
    description_en: "Our customer support is available 24/7/365. Get access to our expert support team whenever you need it.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title_bn: "ফ্রি এসএসএল সার্টিফিকেট",
    title_en: "Free SSL Certificate",
    description_bn: "নিরাপদ লেনদেন ও এসইও-এর জন্য প্রতিটি ডোমেইনের সাথে পাচ্ছেন অটোমেটেড ফ্রি এসএসএল সার্টিফিকেট।",
    description_en: "Every domain comes with an automated free SSL certificate for secure transactions and better SEO.",
    icon: <Lock className="w-6 h-6" />
  }
];

export const TESTIMONIALS_DATA = [
  {
    name_bn: "রাকিবুল ইসলাম",
    name_en: "Rakibul Islam",
    role_bn: "ফ্রিল্যান্সার",
    role_en: "Freelancer",
    text_bn: "পুতুলহোস্ট থেকে ডোমেইন এবং হোস্টিং কেনা অনেক সহজ ছিল। আমি বিকাশ দিয়ে ২ মিনিটে পেমেন্ট করে ওয়েবসাইট লাইভ করেছি। সাপোর্টও অসাধারণ!",
    text_en: "Buying domain and hosting from PutulHost was so easy. I paid via bKash and my site was live in 2 minutes. Support is amazing!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=rakib"
  },
  {
    name_bn: "তানজিলা আহমেদ",
    name_en: "Tanjila Ahmed",
    role_bn: "বিজনেস ওনার",
    role_en: "Business Owner",
    text_bn: "আমার ই-কমার্স সাইটের জন্য হাই-স্পিড হোস্টিং খুঁজছিলাম। তাদের সার্ভার স্পিড এবং আপটাইম নিয়ে আমি খুবই সন্তুষ্ট। ধন্যবাদ বিডি হোস্টিং প্রো-কে!",
    text_en: "I was looking for high-speed hosting for my e-commerce site. I'm very satisfied with their server speed and uptime. Thanks BD Hosting Pro!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=tanjila"
  },
  {
    name_bn: "শরিফুল হাসান",
    name_en: "Shariful Hasan",
    role_bn: "ওয়েব ডেভেলপার",
    role_en: "Web Developer",
    text_bn: "ডেভেলপারদের জন্য সিপ্যানেল এবং ডোমেইন ম্যানেজমেন্ট অনেক স্মুথ। লোকাল কারেন্সিতে পে করার সুবিধাটি আমার জন্য সেরা ছিল।",
    text_en: "cPanel and domain management is very smooth for developers. Paying in local currency was the best part for me.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=sharif"
  }
];

export const GUIDES_DATA = [
  {
    id: "step-1",
    title_bn: "ধাপ ১: পারফেক্ট ডোমেইন নাম খুঁজে বের করুন",
    title_en: "Step 1: Find the Perfect Domain",
    description_bn: "আপনার ব্যবসার সাথে সামঞ্জস্যপূর্ণ একটি ডোমেইন নাম নির্বাচন করা অত্যন্ত গুরুত্বপূর্ণ। আপনার ডোমেইনটি যেন ছোট, মনে রাখার মতো এবং প্রাসঙ্গিক হয়। .com ডোমেইন সব সময় সেরা পছন্দ।",
    description_en: "Choosing a domain name that matches your business is crucial. Keep it short, memorable, and relevant. .com is always the best choice.",
    steps_bn: [
      "পুতুলহোস্ট ডোমেইন সার্চ বারে আপনার পছন্দের নামটি লিখুন।",
      "যদি ডোমেইনটি অ্যাভেইলেবল থাকে তবে 'Add to Cart' বাটনে ক্লিক করুন।"
    ],
    steps_en: [
      "Type your desired name in the PutulHost domain search bar.",
      "If available, click 'Add to Cart' to proceed."
    ],
    image: "https://picsum.photos/seed/domain/600/400",
    linkText_bn: "ডোমেইন চেক করুন",
    linkText_en: "Check Domain",
    link: `${AFFILIATE_LINK}&a=add&domain=register`
  },
  {
    id: "step-2",
    title_bn: "ধাপ ২: হোস্টিং প্ল্যান কিনুন ও কনফিগার করুন",
    title_en: "Step 2: Buy & Configure Hosting",
    description_bn: "আপনার ওয়েবসাইটের ট্রাফিক এবং ডেটা অনুযায়ী সেরা হোস্টিং প্ল্যানটি বেছে নিন। নতুনদের জন্য শেয়ারড হোস্টিং বা বিডি হোস্টই যথেষ্ট।",
    description_en: "Pick the best hosting plan based on your website traffic and data. Shared hosting is perfect for beginners.",
    note_bn: "বিঃদ্রঃ বিকাশ পেমেন্ট সুবিধা! চেক-আউট করার সময় 'Payment Method' হিসেবে bKash, Nagad বা Rocket সিলেক্ট করুন। মুহূর্তেই আপনার সার্ভিস অ্যাক্টিভ হয়ে যাবে।",
    note_en: "Note: bKash Payment supported! Select bKash, Nagad, or Rocket at checkout. Your service activates instantly.",
    image: "https://picsum.photos/seed/server/600/400",
    linkText_bn: "হোস্টিং গাইড ফলো করুন",
    linkText_en: "Follow Hosting Guide",
    link: AFFILIATE_LINK
  }
];
