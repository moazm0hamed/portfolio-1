"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Wrench, 
  Palette, 
  Cpu
} from "lucide-react";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: "Core",
      icon: <Code2 size={20} />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      title: "Frameworks",
      icon: <Layers size={20} />,
      skills: ["React", "Next.js", "Redux Toolkit"],
    },
    {
      title: "Styling",
      icon: <Palette size={20} />,
      skills: ["Tailwind CSS", "Bootstrap", "SASS", "CSS Modules"],
    },
    {
      title: "Tools",
      icon: <Wrench size={20} />,
      skills: ["Git/GitHub", "npm/yarn", "Vite", "VS Code"],
    },
    {
        title: "Systems",
        icon: <Cpu size={20} />,
        skills: ["Responsive Design", "Web Performance", "SEO Basics", "Accessibility"],
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">{t("skills_title")}</h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-primary to-blue-400 mx-auto rounded-full shadow-sm shadow-primary/20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 group bg-linear-to-br from-card-bg to-accent/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 text-sm">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 glass rounded-full border border-border hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
