"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Code } from "lucide-react";

export const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Factory Management Dashboard",
      desc: "Advanced SaaS dashboard for monitoring production lines, inventory, and worker performance.",
      tech: ["React", "TypeScript", "TailwindCSS", "Recharts"],
      category: "React",
      link: "#",
      github: "#",
    },
    {
      title: "Premium E-Commerce Store",
      desc: "High-performance storefront with complex cart logic, multi-step checkout, and sleek UI.",
      tech: ["Next.js", "Framer Motion", "Stripe", "Prisma"],
      category: "Next.js",
      link: "#",
      github: "#",
    },
    {
      title: "Admin Panel UI Kit",
      desc: "A reusable UI library with 50+ components, dark mode support, and full accessibility.",
      tech: ["React", "CSS Modules", "Storybook"],
      category: "UI",
      link: "#",
      github: "#",
    },
    {
      title: "Healthcare Solutions Platform",
      desc: "Bilingual platform for patient management and appointment scheduling with real-time updates.",
      tech: ["Next.js", "TypeScript", "Firebase"],
      category: "Next.js",
      link: "#",
      github: "#",
    },
  ];

  const categories = ["All", "React", "Next.js", "UI"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">{t("projects_title")}</h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-primary to-blue-400 mx-auto rounded-full shadow-sm shadow-primary/20" />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                suppressHydrationWarning
                className={`px-6 py-2 rounded-full font-semibold transition-all relative ${
                  filter === cat ? "text-white" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="filter-bg"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat === "All" ? t("projects_all") : cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative glass rounded-4xl border border-border overflow-hidden flex flex-col bg-linear-to-br from-card-bg to-accent/20"
              >
                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
                <div className="aspect-video bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <Code size={64} className="text-primary/20 group-hover:scale-110 group-hover:text-primary/40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                         <a href={project.github} title="GitHub Repository" className="p-4 bg-white/10 glass rounded-full hover:bg-white/20 transition-all"><Github size={24} /></a>
                         <a href={project.link} title="Live Demo" className="p-4 bg-white/10 glass rounded-full hover:bg-white/20 transition-all"><ExternalLink size={24} /></a>
                    </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-lg">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm mb-6 flex-1">{project.desc}</p>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-border">
                     <a href={project.link} className="flex items-center gap-2 font-bold text-sm hover:text-primary transition-colors">
                        Live Demo <ExternalLink size={16} />
                     </a>
                     <a href={project.github} className="flex items-center gap-2 font-bold text-sm hover:text-primary transition-colors">
                        Repo <Github size={16} />
                     </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
