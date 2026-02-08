interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  title: string;
  description: string;
  features: Feature[];
}

export const plans: Plan[] = [
  {
    title: "লাইট প্যাকেজ",
    description:
      "ছোট ব্যবসার জন্য উপযুক্ত একটি স্টার্টার প্যাকেজ, যেখানে প্রয়োজনীয় ফিচার ও স্থিতিশীল পারফরম্যান্স নিশ্চিত করা হয়েছে।",
    features: [
      // Website & UI
      { text: "জাভাস্ক্রিপ্ট-ভিত্তিক মোবাইল ফ্রেন্ডলি ওয়েবসাইট", included: true },
      { text: "সুপার ফাস্ট ও সিকিউর ওয়েবসাইট", included: true },
      { text: "ওয়েবসাইট কাস্টমাইজেশন অপশন", included: true },
      { text: "আনলিমিটেড ল্যান্ডিং পেজ", included: true },
      { text: "প্রোডাক্ট রিভিউ ও রেটিং", included: true },
      { text: "প্রোডাক্ট ক্যাটালগ ম্যানেজমেন্ট", included: true },

      // Orders & Payments
      { text: "সম্পূর্ণ অর্ডার ম্যানেজমেন্ট", included: true },
      { text: "অর্ডার ফ্লো হিস্ট্রি", included: true },
      { text: "কাস্টমারভিত্তিক অর্ডার রিপোর্ট", included: true },
      { text: "ইনকমপ্লিট অর্ডার লিস্ট", included: true },
      { text: "ডেলিভারি চার্জ কন্ট্রোল", included: true },
      { text: "একাধিক পেমেন্ট মেথড", included: true },
      { text: "অ্যাডভান্স পেমেন্ট সিস্টেম", included: true },
      { text: "মাল্টিপল ইনভয়েস অপশন", included: true },
      { text: "অটো কুরিয়ার ম্যানেজমেন্ট", included: true },
      { text: "ফ্রড চেকিং সিস্টেম", included: true },
      { text: "ইমেইল ও এসএমএসে অর্ডার নোটিফিকেশন", included: true },

      // Marketing & Campaigns
      { text: "ফেসবুক পিক্সেল ইন্টিগ্রেশন", included: true },
      { text: "ফেসবুক সার্ভার-সাইড ট্র্যাকিং", included: true },
      { text: "গুগল ট্যাগ ম্যানেজার ইন্টিগ্রেশন", included: true },
      { text: "টিকটক পিক্সেল ট্র্যাকিং সিস্টেম", included: true },
      { text: "ফেসবুক প্রোডাক্ট ক্যাটালগ", included: true },
      { text: "গুগল সার্চ কনসোল সাবমিট", included: true },
      { text: "কুপন ম্যানেজমেন্ট সিস্টেম", included: true },
      { text: "মাল্টিপল চ্যাট কন্ট্রোল", included: true },
      { text: "মাল্টিপল অফার ম্যানেজমেন্ট", included: true },
      { text: "ক্যাম্পেইন ম্যানেজমেন্ট সিস্টেম", included: true },
      { text: "রিওয়ার্ড ম্যানেজমেন্ট সিস্টেম", included: true },

      // Customer Management
      { text: "কাস্টমার ম্যানেজমেন্ট সিস্টেম", included: true },
      { text: "সোশ্যাল লগইন কানেক্ট", included: true },

      // Admin & Control
      { text: "মাল্টি-রোল ভিত্তিক অ্যাডমিন কন্ট্রোল", included: true },
      { text: "ড্যাশবোর্ড কন্ট্রোলের জন্য অ্যান্ড্রয়েড অ্যাপ", included: true },
      { text: "ফিচার টিউটোরিয়াল গাইড ভিডিও", included: true },
      { text: "অতিরিক্ত পেজ কাস্টমাইজেশন", included: true },
      { text: "প্রিমিয়াম সাপোর্ট সিস্টেম", included: true },
      { text: "অর্ডার আইপি ব্লকিং ও আইপি লিমিট", included: true },
      { text: "অর্ডার অ্যাক্টিভিটি লগস", included: true },
      { text: "ইউজার নোটিফিকেশন কন্ট্রোল", included: true },

      // Finance
      { text: "ইনকাম ম্যানেজমেন্ট সিস্টেম", included: true },
      { text: "খরচ ম্যানেজমেন্ট সিস্টেম", included: true },
      { text: "সেলস টার্গেট ম্যানেজমেন্ট", included: true },

      // Extra
      { text: "ব্লগ ও ব্লগ কমেন্ট সিস্টেম", included: true },
    ],
  },

  {
    title: "প্রিমিয়াম প্যাকেজ",
    description:
      "বর্ধনশীল ব্যবসার জন্য একটি শক্তিশালী অল-ইন-ওয়ান সমাধান, যেখানে রয়েছে উন্নত ফিচার, অটোমেশন এবং সম্পূর্ণ নিয়ন্ত্রণ।",
    features: [
      // Website & UI
      { text: "জাভাস্ক্রিপ্ট-ভিত্তিক মোবাইল ফ্রেন্ডলি ওয়েবসাইট", included: true },
      { text: "সুপার ফাস্ট ও সিকিউর ওয়েবসাইট", included: true },
      { text: "ওয়েবসাইট কাস্টমাইজেশন অপশন", included: true },
      { text: "আনলিমিটেড ল্যান্ডিং পেজ", included: true },
      { text: "প্রোডাক্ট রিভিউ ও রেটিং", included: true },
      { text: "প্রোডাক্ট ক্যাটালগ ম্যানেজমেন্ট", included: true },
      { text: "ইজি চেকআউট সিস্টেম", included: true }, // Premium feature

      // Orders & Payments
      { text: "সম্পূর্ণ অর্ডার ম্যানেজমেন্ট", included: true },
      { text: "অর্ডার ফ্লো হিস্ট্রি", included: true },
      { text: "কাস্টমারভিত্তিক অর্ডার রিপোর্ট", included: true },
      { text: "ইনকমপ্লিট অর্ডার লিস্ট", included: true },
      { text: "ডেলিভারি চার্জ কন্ট্রোল", included: true },
      { text: "একাধিক পেমেন্ট মেথড", included: true },
      { text: "অ্যাডভান্স পেমেন্ট সিস্টেম", included: true },
      { text: "মাল্টিপল ইনভয়েস অপশন", included: true },
      { text: "অটো কুরিয়ার ম্যানেজমেন্ট", included: true },
      { text: "ফ্রড চেকিং সিস্টেম", included: true },
      { text: "ইমেইল ও এসএমএসে অর্ডার নোটিফিকেশন", included: true },

      // Marketing & Campaigns
      { text: "ফেসবুক পিক্সেল ও সার্ভার-সাইড ট্র্যাকিং", included: true },
      { text: "গুগল ট্যাগ ম্যানেজার ইন্টিগ্রেশন", included: true },
      { text: "টিকটক পিক্সেল ট্র্যাকিং সিস্টেম", included: true },
      { text: "ফেসবুক প্রোডাক্ট ক্যাটালগ", included: true },
      { text: "গুগল সার্চ কনসোল সাবমিট", included: true },
      { text: "কুপন ও অফার ম্যানেজমেন্ট সিস্টেম", included: true },
      { text: "মাল্টিপল চ্যাট কন্ট্রোল", included: true },

      // Customer Management
      { text: "কাস্টমার ম্যানেজমেন্ট সিস্টেম", included: true },
      { text: "সোশ্যাল লগইন কানেক্ট", included: true },

      // Admin & Control
      { text: "মাল্টি-রোল ভিত্তিক অ্যাডমিন কন্ট্রোল", included: true },
      { text: "অ্যান্ড্রয়েড ড্যাশবোর্ড অ্যাপ", included: true },
      { text: "প্রিমিয়াম সাপোর্ট সিস্টেম", included: true },
      { text: "অর্ডার অ্যাক্টিভিটি লগস", included: true },
      { text: "ইউজার নোটিফিকেশন কন্ট্রোল", included: true },

      // Finance
      { text: "ইনকাম ও খরচ ম্যানেজমেন্ট", included: true },
      { text: "সেলস টার্গেট ও অ্যাক্টিভিটি লগস", included: true },
    ],
  },
];
