"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      
      <Footer />
    </main>
  );
}
