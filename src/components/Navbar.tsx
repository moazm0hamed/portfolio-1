"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export const Navbar = () => {
  const { t, language, setLanguage, isRtl } = useLanguage();
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("nav_home"), href: "#home" },
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_skills"), href: "#skills" },
    { name: t("nav_certificates"), href: "#certificates" },
    { name: t("nav_projects"), href: "#projects" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border/50 shadow-sm shadow-primary/5">
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="shrink-0 font-bold text-2xl tracking-tighter font-sans"
          >
            Moaz
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold hover:text-primary transition-all duration-300 relative group py-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-1.5 p-2 px-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors border border-transparent hover:border-border"
              aria-label="Toggle language"
            >
              <Languages size={18} />
              <span className="text-xs uppercase font-bold tracking-wider">{language === "en" ? "ar" : "en"}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-medium hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
