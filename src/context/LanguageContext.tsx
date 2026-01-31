"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useSyncExternalStore } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_certificates: "Certificates",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "I build modern, high-performance web interfaces.",
    hero_subtitle: "Professional Front-End Developer focused on UI quality, performance, and clean code.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Contact Me",
    about_title: "About Me",
    about_text: "I am Moaz Mohamed, a dedicated Front-End Developer passionate about building responsive interfaces and modern UI. My focus is on performance, clean architecture, and delivering real business value through high-quality code.",
    download_cv: "Download CV",
    skills_title: "Skills & Expertise",
    certificates_title: "Certificates",
    projects_title: "Featured Projects",
    projects_all: "All",
    contact_title: "Get In Touch",
    contact_cta: "Let's build something great together.",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send Message",
    footer_copy: "© Moaz Mohamed. All rights reserved.",
    about_location: "Location",
    about_experience: "Experience",
    about_availability: "Availability",
    about_exp_value: "3+ Years",
    about_avail_value: "Open to Work",
    about_loc_value: "Egypt",
    contact_success: "Message sent successfully!",
    contact_error: "Something went wrong. Please try again.",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_skills: "المهارات",
    nav_certificates: "الشهادات",
    nav_projects: "المشاريع",
    nav_contact: "تواصل معي",
    hero_title: "أبني واجهات ويب حديثة وسريعة بأعلى جودة.",
    hero_subtitle: "مطوّر واجهات أمامية محترف، أهتم بجودة الـ UI، السرعة، والكود النظيف.",
    hero_cta_projects: "مشاهدة المشاريع",
    hero_cta_contact: "تواصل معي",
    about_title: "من أنا",
    about_text: "أنا معاذ محمد، مطور واجهات أمامية شغوف ببناء واجهات متجاوبة وتصاميم UI حديثة. أركز على الأداء العالي، المعمارية النظيفة، وتقديم قيمة حقيقية للأعمال من خلال كود عالي الجودة.",
    about_loc_value: "مصر",
    contact_success: "تم إرسال الرسالة بنجاح!",
    contact_error: "حدث خطأ ما، يرجى المحاولة مرة أخرى.",
    download_cv: "تحميل السيرة الذاتية",
    skills_title: "المهارات والخبرات",
    certificates_title: "الشهادات",
    projects_title: "أبرز المشاريع",
    projects_all: "الكل",
    contact_title: "اتصل بنا",
    contact_cta: "خلّينا نبني حاجة قوية سوا.",
    contact_name: "الأسم",
    contact_email: "البريد الإلكتروني",
    contact_message: "الرسالة",
    contact_send: "إرسال الرسالة",
    footer_copy: "© جميع الحقوق محفوظة لمعاذ محمد.",
    about_location: "الموقع",
    about_experience: "الخبرة",
    about_availability: "التوفر",
    about_exp_value: "أكثر من 3 سنوات",
    about_avail_value: "متاح للعمل",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const isHydrated = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Synchronize language with localStorage after hydration
  useEffect(() => {
    if (isHydrated) {
      const saved = localStorage.getItem("lang") as Language;
      if (saved && saved !== language) {
        setLanguage(saved);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHydrated]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  };

  const isRtl = language === "ar";

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  useEffect(() => {
    if (isHydrated) {
      document.documentElement.dir = isRtl ? "rtl" : "ltr";
      document.documentElement.lang = language;
    }
  }, [isRtl, language, isHydrated]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRtl }}>
      <div className={`${isRtl ? "font-arabic" : "font-sans"} ${isHydrated ? "opacity-100" : "opacity-0"} transition-opacity duration-300 min-h-screen`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
