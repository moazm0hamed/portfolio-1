"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Send, Phone, Mail, CheckCircle2, Linkedin } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: <Mail className="text-primary" />, label: "Email", value: "moazhoras@gmail.com", href: "mailto:moazhoras@gmail.com" },
    { icon: <Phone className="text-primary" />, label: "WhatsApp", value: "+20 114 882 3888", href: "https://wa.me/201148823888" },
    { icon: <Linkedin className="text-primary" />, label: "LinkedIn", value: "moaz mohamed", href: "https://www.linkedin.com/in/moaz-mohamed200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-black/5 dark:bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">{t("contact_title")}</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">{t("contact_cta")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <a
                href={info.href}
                key={i}
                title={info.label}
                className="flex items-center gap-6 p-6 glass rounded-4xl border border-border hover:border-primary/30 hover:scale-[1.02] transition-all group bg-linear-to-br from-card-bg to-accent/10"
              >
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{info.label}</p>
                  <p className="text-lg font-bold">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-5xl border border-border space-y-6 bg-linear-to-br from-card-bg to-accent/20"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold opacity-60 ml-2 rtl:ml-0 rtl:mr-2">{t("contact_name")}</label>
                <input 
                  id="name"
                  type="text" 
                  title={t("contact_name")}
                  placeholder={t("contact_name")}
                  suppressHydrationWarning
                  className="w-full p-4 bg-black/5 dark:bg-white/5 border border-border rounded-2xl outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary/50"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold opacity-60 ml-2 rtl:ml-0 rtl:mr-2">{t("contact_email")}</label>
                <input 
                  id="email"
                  type="email" 
                  title={t("contact_email")}
                  placeholder={t("contact_email")}
                  suppressHydrationWarning
                  className="w-full p-4 bg-black/5 dark:bg-white/5 border border-border rounded-2xl outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary/50"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold opacity-60 ml-2 rtl:ml-0 rtl:mr-2">{t("contact_message")}</label>
              <textarea 
                id="message"
                rows={5}
                title={t("contact_message")}
                placeholder={t("contact_message")}
                suppressHydrationWarning
                className="w-full p-4 bg-black/5 dark:bg-white/5 border border-border rounded-2xl outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary/50 resize-none"
                required
              />
            </div>
            
            <button 
              disabled={isSubmitting || isSuccess}
              suppressHydrationWarning
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl ${
                isSuccess ? "bg-green-500 text-white" : "bg-primary text-white hover:scale-[0.98] active:scale-95 shadow-primary/20"
              }`}
            >
              {isSuccess ? t("contact_success") : (isSubmitting ? "..." : t("contact_send"))}
              {isSuccess ? <CheckCircle2 size={18} /> : <Send size={18} />}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
    </section>
  );
};
