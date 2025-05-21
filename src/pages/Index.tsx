
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  useEffect(() => {
    document.title = "Architecture Portfolio";
  }, []);

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Philosophy />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
