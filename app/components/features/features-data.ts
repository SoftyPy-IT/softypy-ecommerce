export interface TFeatures {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

import {
  ShieldCheck,
  Globe,
  Smartphone,
  BarChart3,
  Settings,
  Zap,
  Wallet,
  LineChart,
  Search,
  Mail,
  Database,
  FileText,
  Layers,
  Code,
  ShoppingCart,
  Cpu,
  TrendingUp,
  LifeBuoy,
  LucideIcon,
  MessageCircle,
  Boxes,
  Truck,
  Store,
  MapPin,
  Share2,
  Star,
  LogIn,
  LayoutTemplate,
  Facebook,
  CreditCard,
  Shield,
} from "lucide-react";


export interface TFeatures {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: TFeatures[] = [
  {
    id: 1,
    title: "মোবাইল-ফ্রেন্ডলি UI/UX",
    description:
      "দ্রুত, স্মুথ ও সম্পূর্ণ রেসপনসিভ ডিজাইনের মাধ্যমে অসাধারণ মোবাইল এক্সপেরিয়েন্স নিশ্চিত করে।",
    icon: Smartphone,
  },
  {
    id: 2,
    title: "সুপার-ফাস্ট 0.5s লোড টাইম",
    description:
      "মাত্র ০.৫ সেকেন্ডে লোড হয়ে সর্বোচ্চ ইউজার এক্সপেরিয়েন্স ও কনভার্সন নিশ্চিত করে।",
    icon: Zap,
  },
  {
    id: 3,
    title: "আনলিমিটেড ল্যান্ডিং পেজ",
    description:
      "সহজেই কাস্টমাইজযোগ্য আনলিমিটেড ল্যান্ডিং পেজ তৈরি করে গ্রাহক এনগেজমেন্ট বাড়ান।",
    icon: LayoutTemplate,
  },
  {
    id: 4,
    title: "Facebook Pixel & Server Tracking",
    description:
      "Conversion API ব্যবহার করে ফ্রি সার্ভার সাইড ট্র্যাকিং ও উন্নত কনভার্সন রিপোর্টিং।",
    icon: Facebook,
  },
  {
    id: 5,
    title: "Next-Gen JavaScript Technology",
    description:
      "আধুনিক Single Page Application ভিত্তিক দ্রুত ও পারফরম্যান্স-অপ্টিমাইজড সিস্টেম।",
    icon: Code,
  },
  {
    id: 6,
    title: "1-Click Easy Checkout",
    description:
      "লগইন ছাড়াই সহজ ও ইউজার-ফ্রেন্ডলি অর্ডার ও ট্র্যাকিং সিস্টেম।",
    icon: ShoppingCart,
  },
  {
    id: 7,
    title: "Advanced Delivery Charge Payment",
    description:
      "প্রয়োজনে অগ্রিম ডেলিভারি চার্জ সংগ্রহের মাধ্যমে নিরাপদ ও স্বচ্ছ চেকআউট।",
    icon: CreditCard,
  },
  {
    id: 8,
    title: "High Security & Scalable System",
    description:
      "শক্তিশালী সিকিউরিটি ও স্কেলেবল আর্কিটেকচারের মাধ্যমে দীর্ঘমেয়াদী নির্ভরযোগ্যতা।",
    icon: ShieldCheck,
  },
  {
    id: 9,
    title: "Smart Fake Order Protection",
    description:
      "মিথ্যা অর্ডার শনাক্ত ও প্রতিরোধ করে প্রকৃত বিক্রয় নিশ্চিত করে।",
    icon: Shield,
  },
  {
    id: 10,
    title: "Automatic Invoice Generation",
    description:
      "প্রতিটি অর্ডারের জন্য তাৎক্ষণিক ও ঝামেলামুক্ত ইনভয়েস জেনারেশন।",
    icon: FileText,
  },
  {
    id: 11,
    title: "Simplified Order Management",
    description:
      "কল, মেসেজ ও ওয়েব অর্ডার একসাথে ম্যানেজ করুন অ্যাডভান্সড রিপোর্টসহ।",
    icon: BarChart3,
  },
  {
    id: 12,
    title: "All-in-One Live Chat System",
    description:
      "Messenger, WhatsApp ও কাস্টম লাইভ চ্যাটের মাধ্যমে তাৎক্ষণিক কাস্টমার সাপোর্ট।",
    icon: MessageCircle,
  },
  {
    id: 13,
    title: "Custom Domain Integration",
    description:
      "নিজস্ব ডোমেইন যুক্ত করে প্রফেশনাল ও ব্র্যান্ডেড অনলাইন উপস্থিতি গড়ুন।",
    icon: Globe,
  },
  {
    id: 14,
    title: "Advanced Stock Management",
    description:
      "লো-স্টক এলার্ট, বেস্ট-সেলার ও স্লো-মুভিং প্রোডাক্ট ইনসাইট পান।",
    icon: Boxes,
  },
  {
    id: 15,
    title: "Automated Courier Integration",
    description:
      "শীর্ষ কুরিয়ার সার্ভিসের সাথে অটোমেটিক সংযোগ ও দ্রুত ডেলিভারি।",
    icon: Truck,
  },
  {
    id: 16,
    title: "Custom SMS Integration",
    description:
      "আপনার পছন্দের SMS API দিয়ে অর্ডার আপডেট ও নোটিফিকেশন পাঠান।",
    icon: Mail,
  },
  {
    id: 17,
    title: "Payment Gateway Integration",
    description:
      "SSLCommerz, বিকাশ, নগদসহ বিভিন্ন গেটওয়ের মাধ্যমে সরাসরি পেমেন্ট গ্রহণ।",
    icon: Wallet,
  },
  {
    id: 18,
    title: "Advanced Analytics Dashboard",
    description:
      "রিয়েল-টাইম সেলস, কাস্টমার ও প্রোডাক্ট ইনসাইট দিয়ে স্মার্ট সিদ্ধান্ত নিন।",
    icon: LineChart,
  },
  {
    id: 19,
    title: "Retail & Wholesale Management",
    description:
      "একই প্ল্যাটফর্মে রিটেইল ও হোলসেল সেলস পরিচালনা করুন।",
    icon: Store,
  },
  {
    id: 20,
    title: "User Order Tracking",
    description:
      "রিয়েল-টাইম অর্ডার ট্র্যাকিংয়ের মাধ্যমে কাস্টমার এক্সপেরিয়েন্স উন্নত করুন।",
    icon: MapPin,
  },
  {
    id: 21,
    title: "Social Media Integration",
    description:
      "একাধিক সোশ্যাল প্ল্যাটফর্মে ব্যবসা ও কনটেন্ট সহজেই ম্যানেজ করুন।",
    icon: Share2,
  },
  {
    id: 22,
    title: "Smart Review Management",
    description:
      "বিভিন্ন প্ল্যাটফর্ম থেকে রিভিউ সংগ্রহ ও বিশ্লেষণ করুন।",
    icon: Star,
  },
  {
    id: 23,
    title: "Quick Login System",
    description:
      "Facebook, Google, Email বা ফোন নম্বর দিয়ে দ্রুত সাইন-ইন।",
    icon: LogIn,
  },
  {
    id: 24,
    title: "Powerful SEO Tools",
    description:
      "On-page SEO, কিওয়ার্ড ও কনটেন্ট অপ্টিমাইজেশনের মাধ্যমে র‍্যাংকিং বাড়ান।",
    icon: Search,
  },
  {
    id: 25,
    title: "Sales Growth Toolkit",
    description:
      "ডাটা-ড্রিভেন স্ট্র্যাটেজি ও অটোমেশনের মাধ্যমে সেলস বৃদ্ধি করুন।",
    icon: TrendingUp,
  },
  {
    id: 26,
    title: "Multi-Layer Category Management",
    description:
      "উন্নত ফিল্টারিং ও সার্চের জন্য মাল্টি-লেয়ার ক্যাটাগরি সিস্টেম।",
    icon: Layers,
  },
  {
    id: 27,
    title: "AI-Powered Product Suggestions",
    description:
      "পার্সোনালাইজড রেকমেন্ডেশনের মাধ্যমে দ্রুত কেনাকাটায় সহায়তা করুন।",
    icon: Cpu,
  },
  {
    id: 28,
    title: "Premium Customer Support",
    description:
      "লাইভ চ্যাট, কল ও অনলাইন মিটিংয়ের মাধ্যমে এক্সপার্ট সাপোর্ট পান।",
    icon: LifeBuoy,
  },
  {
    id: 29,
    title: "High-Performance Backend",
    description:
      "Node.js ও MongoDB ভিত্তিক ফাস্ট, স্কেলেবল ও সিকিউর সিস্টেম।",
    icon: Database,
  },
  {
    id: 30,
    title: "Easy Setup & Customization",
    description:
      "সহজ সেটআপ, ফ্লেক্সিবল অপশন ও সম্পূর্ণ কাস্টমাইজযোগ্য কন্ট্রোল।",
    icon: Settings,
  },
];

