import React, { useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader onFinished={() => setIsLoading(false)} />
      ) : (
        <div className="portfolio-app-root">
          {/* Visual enhancements */}
          <CustomCursor />
          <ParticleBackground />
          <ScrollProgress />

          {/* Header navigation */}
          <Navbar />

          {/* Main Sections content */}
          <main className="main-content-layout">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certificates />
            <Services />
            <Testimonials />
            <Contact />
          </main>

          {/* Footer content */}
          <Footer />
        </div>
      )}
    </>
  );
}
