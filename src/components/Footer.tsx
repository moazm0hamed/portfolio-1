"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin,  Mail, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const { t } = useLanguage();

  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/moazm0hamed", name: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/moaz-mohamed200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", name: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/moaz.mohamed.605041/", name: "Facebook" },
    { icon: <Mail size={20} />, href: "mailto:moazhoras@gmail.com", name: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold tracking-tighter"
          >
            Moaz
          </motion.div>
          
          <div className="flex space-x-6 rtl:space-x-reverse">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-foreground/60">
            {t("footer_copy")}
          </p>
        </div>
      </div>
    </footer>
  );
};
