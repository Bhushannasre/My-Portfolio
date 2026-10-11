import { useEffect, useState } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import { useProgress } from "@react-three/drei";
import { ScrollTrigger } from "./lib/gsap";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";

// If the 3D model is slow or fails to load, never leave visitors on the loader.
const MAX_LOADER_MS = 8000;

const ScrollSync = () => {
  // Keep ScrollTrigger in step with Lenis' smooth scrolling.
  useLenis(ScrollTrigger.update);
  return null;
};

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  useEffect(() => {
    if (progress >= 100) setIsReady(true);
  }, [progress]);

  useEffect(() => {
    const id = setTimeout(() => setIsReady(true), MAX_LOADER_MS);
    return () => clearTimeout(id);
  }, []);

  // Recalculate trigger positions once the real layout is visible.
  useEffect(() => {
    if (isReady) ScrollTrigger.refresh();
  }, [isReady]);

  return (
    <ReactLenis root>
      <ScrollSync />
      {!loaderGone && (
        <div
          role="status"
          aria-live="polite"
          onTransitionEnd={() => isReady && setLoaderGone(true)}
          className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white font-light transition-opacity duration-700 ${
            isReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      <main
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </main>
    </ReactLenis>
  );
};

export default App;
