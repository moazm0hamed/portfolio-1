"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Download } from "lucide-react";

export const About = () => {
  const { t } = useLanguage();

  const infoCards = [
    { icon: <MapPin className="text-primary" />, label: t("about_location"), value: t("about_loc_value") },
    { icon: <Briefcase className="text-primary" />, label: t("about_experience"), value: t("about_exp_value") },
    { icon: <Calendar className="text-primary" />, label: t("about_availability"), value: t("about_avail_value") },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold border-l-4 border-primary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-4 bg-linear-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              {t("about_title")}
            </h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-primary to-blue-400 mx-auto rounded-full shadow-sm shadow-primary/20" />
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t("about_text")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:scale-105 transition-all">
                  <Download size={18} />
                  {t("download_cv")}
               </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 glass rounded-2xl border border-border text-center flex flex-col items-center gap-3 shadow-xl bg-linear-to-br from-card-bg to-accent/20"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  {card.icon}
                </div>
                <span className="text-sm text-foreground/50">{card.label}</span>
                <span className="font-bold">{card.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
