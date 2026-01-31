"use client";

import { useLanguage } from "@/context/LanguageContext";

export const SEO = () => {
  const { language } = useLanguage();

  const metadata = {
    en: {
      title: "Moaz Mohamed | Professional Front-End Developer",
      desc: "Specializing in high-performance web interfaces and modern UI/UX design.",
    },
    ar: {
      title: "معاذ محمد | مطور واجهات أمامية محترف",
      desc: "متخصص في بناء واجهات ويب سريعة وحديثة بأعلى جودة.",
    },
  };

  const current = metadata[language];

  return (
    <>
      <title>{current.title}</title>
      <meta name="description" content={current.desc} />
      <meta property="og:title" content={current.title} />
      <meta property="og:description" content={current.desc} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};
