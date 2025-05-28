
import React, { useEffect } from "react";
import BookLayout from "@/components/BookLayout";
import CoverPage from "@/components/book-pages/CoverPage";
import TableOfContentsPage from "@/components/book-pages/TableOfContentsPage";
import AboutPage from "@/components/book-pages/AboutPage";
import ProjectsPage from "@/components/book-pages/ProjectsPage";
import PhilosophyPage from "@/components/book-pages/PhilosophyPage";
import ContactPage from "@/components/book-pages/ContactPage";

const Index = () => {
  useEffect(() => {
    document.title = "Matthew Chen - Architecture Portfolio";
  }, []);

  const pages = [
    {
      id: "cover",
      title: "Cover",
      content: <CoverPage />
    },
    {
      id: "contents",
      title: "Table of Contents", 
      content: <TableOfContentsPage onNavigate={() => {}} />
    },
    {
      id: "about",
      title: "About Me",
      content: <AboutPage />
    },
    {
      id: "projects", 
      title: "Featured Projects",
      content: <ProjectsPage />
    },
    {
      id: "philosophy",
      title: "Design Philosophy", 
      content: <PhilosophyPage />
    },
    {
      id: "contact",
      title: "Contact Me",
      content: <ContactPage />
    }
  ];

  return <BookLayout pages={pages} />;
};

export default Index;
