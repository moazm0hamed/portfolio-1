import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, ZoomIn } from "lucide-react";
import Image from "next/image";

export const Certificates = () => {
  const { t } = useLanguage();

  const certificates = [
    {
      title: "Introduction to Front End Development",
      platform: "Simplilearn SkillUp",
      date: "Nov 2025",
      image: "/certificates/simplilearn_frontend.png",
      link: "/certificates/simplilearn_frontend.png",
    },
    {
      title: "Summer Camp - Web Development",
      platform: "Sprints x Microsoft",
      date: "2025",
      image: "/certificates/sprints_microsoft.png",
      link: "/certificates/sprints_microsoft.png",
    },
    {
      title: "Full-Stack Learning Bundle",
      platform: "Cursa Platform",
      date: "2025",
      image: "/certificates/cursa_fullstack.png",
      link: "/certificates/cursa_fullstack.png",
    },
    {
      title: "Front End Developer Interface Designer",
      platform: "M3aarf Platform",
      date: "Oct 2025",
      image: "/certificates/m3aarf_frontend.jpg",
      link: "/certificates/m3aarf_frontend.jpg",
    },
    {
      title: "User Interface User Experience",
      platform: "M3aarf Platform",
      date: "Oct 2025",
      image: "/certificates/m3aarf_uiux.jpg",
      link: "/certificates/m3aarf_uiux.jpg",
    },
  ];

  return (
    <section id="certificates" className="py-24 px-4 md:px-8 bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">{t("certificates_title")}</h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-primary to-blue-400 mx-auto rounded-full shadow-sm shadow-primary/20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl border border-border relative overflow-hidden group flex flex-col bg-linear-to-br from-card-bg to-accent/20"
            >
              {/* Thumbnail Preview */}
              <div className="aspect-4/3 relative overflow-hidden bg-primary/5">
                 <Image 
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={cert.link} target="_blank" title="Zoom image" className="p-3 bg-white/10 glass rounded-full">
                        <ZoomIn size={24} className="text-white" />
                    </a>
                 </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                  <Calendar size={14} />
                  {cert.date}
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-foreground/60 font-medium flex-1">{cert.platform}</p>
                
                <a 
                   href={cert.link} 
                   target="_blank"
                   title="View real certificate"
                   className="inline-flex items-center gap-2 text-primary font-bold hover:underline group/link pt-4 border-t border-border"
                >
                  View Full Certificate
                  <ExternalLink size={16} className="group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
