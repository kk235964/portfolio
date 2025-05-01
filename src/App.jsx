import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const skillRef = useRef(null);

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // section is at least 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [
      { ref: aboutRef, id: 'about' },
      { ref: projectsRef, id: 'projects' },
      { ref: contactRef, id: 'contact' },
      { ref: homeRef, id: 'hero' },
      { ref: skillRef, id: 'skills' },

    ];

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute('id', id); // set id for matching
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (section) => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white scroll-smooth">
      <Navbar
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToProjects={() => scrollToSection(projectsRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
        onScrollToHome={() => scrollToSection(homeRef)}
        onScrollToSkills={() => scrollToSection(skillRef)}
        activeSection={activeSection}
      />
      <div ref={homeRef}>
        <Hero />
      </div>
        
      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={skillRef}>
        <Skills />
      </div>
      
      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
