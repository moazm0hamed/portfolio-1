import { useSyncExternalStore } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export const Hero = () => {
  const { t, isRtl } = useLanguage();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // We only show floating badges after mounting to avoid hydration mismatch with RTL logic
  const floatingBadges = mounted ? [
    { text: "Front-End", top: "5%", left: isRtl ? "auto" : "0%", right: isRtl ? "0%" : "auto" },
    { text: "Responsive", bottom: "10%", left: isRtl ? "auto" : "5%", right: isRtl ? "5%" : "auto" },
    { text: "Animations", top: "20%", left: isRtl ? "0%" : "auto", right: isRtl ? "auto" : "0%" },
  ] : [];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden px-4 md:px-8">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-start"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-linear-to-br from-foreground via-foreground/90 to-primary bg-clip-text text-transparent"
          >
            {t("hero_title")}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium"
          >
            {t("hero_subtitle")}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a 
              href="#projects" 
              suppressHydrationWarning
              className="px-8 py-4 bg-linear-to-r from-primary to-blue-600 text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
            >
              {t("hero_cta_projects")}
            </a>
            <a 
              href="#contact" 
              suppressHydrationWarning
              className="px-8 py-4 border border-border glass rounded-full font-bold shadow-lg shadow-black/5 hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-105"
            >
              {t("hero_cta_contact")}
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" />
            <div className="absolute inset-2 rounded-full border-2 border-primary/20 animate-spin-slow-reverse" />
            {/* Profile Image */}
            <div className="absolute inset-4 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-morph overflow-hidden shadow-2xl border border-border">
               <Image 
                src="/profile.jpg"
                alt="Moaz Mohamed"
                fill
                className="object-cover"
                priority
               />
            </div>

            {/* Floating Badges */}
            {mounted && floatingBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                className="absolute flex w-[92px] items-center justify-center rounded-full border border-border bg-card-bg/80 px-2 py-2 text-center text-[11px] font-bold leading-tight shadow-2xl backdrop-blur-md z-50 sm:w-fit sm:whitespace-nowrap sm:px-5 sm:py-2.5 sm:text-xs md:text-sm"
                style={{ 
                  ...badge,
                  left: badge.left === "0%" ? "-15%" : (badge.left === "5%" ? "-10%" : (badge.left === "15%" ? "5%" : badge.left)),
                  right: badge.right === "0%" ? "-15%" : (badge.right === "5%" ? "-10%" : (badge.right === "15%" ? "5%" : badge.right)),
                  top: badge.top === "5%" ? "-5%" : (badge.top === "10%" ? "0%" : badge.top),
                  bottom: badge.bottom === "10%" ? "0%" : badge.bottom
                }}
              >
                {badge.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
