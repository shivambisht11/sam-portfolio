import React, { Suspense, lazy, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/sections/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import Expertise from './components/sections/Expertise.jsx';
import Projects from './components/sections/Projects.jsx';
import EngineeringApproach from './components/sections/EngineeringApproach.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';

import { useScroll, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/ui/LoadingScreen.jsx';

// Lazy load 3D Scene
const Scene3D = lazy(() => import('./components/background/Scene3D.jsx'));

function App() {
  const [loading, setLoading] = React.useState(true);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // Initialize Locomotive Scroll v5
    let scroll;
    try {
      scroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
        }
      });
    } catch (e) {
      console.error("Locomotive Scroll init error:", e);
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Noise Overlay */}
      <div className="noise" />
      
      {/* Background 3D Scene */}
      <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
        <Scene3D scrollYProgress={scrollYProgress} />
      </Suspense>

      <Navbar />
      
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <EngineeringApproach />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
