import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Planet } from "../components/Planet";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import ErrorBoundary from "../components/ErrorBoundary";

// Probe once whether WebGL is available; if not, skip the 3D scene entirely
// instead of letting it throw and retry.
const detectWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
};

const Hero = () => {
  const [hasWebGL] = useState(detectWebGL);
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const figureRef = useRef(null);
  const [inView, setInView] = useState(true);
  const text = `I help growing brands and businesses gain an
unfair advantage through premium
results-driven web apps`;

  // Stop rendering the 3D scene once the hero is scrolled out of view
  useEffect(() => {
    const el = figureRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Full Stack Developer"}
        title={"Bhushan Nasre"}
        text={text}
        textColor={"text-gray-600"}
        headingLevel="h1"
      />
      <figure
        ref={figureRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-screen -z-50"
      >
        {hasWebGL && (
          <ErrorBoundary>
            <Canvas
              shadows
              dpr={[1, 2]}
              frameloop={inView ? "always" : "never"}
              camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
            >
              <ambientLight intensity={0.5} />
              <Float speed={0.5}>
                <Planet scale={isMobile ? 0.7 : 1} />
              </Float>
              <Environment resolution={256}>
                <group rotation={[-Math.PI / 3, 4, 1]}>
                  <Lightformer
                    form="circle"
                    intensity={2}
                    position={[0, 5, -9]}
                    scale={10}
                  />
                  <Lightformer
                    form="circle"
                    intensity={2}
                    position={[0, 3, 1]}
                    scale={10}
                  />
                  <Lightformer
                    form="circle"
                    intensity={2}
                    position={[-5, -1, -1]}
                    scale={10}
                  />
                  <Lightformer
                    form="circle"
                    intensity={2}
                    position={[10, 1, 0]}
                    scale={16}
                  />
                </group>
              </Environment>
            </Canvas>
          </ErrorBoundary>
        )}
      </figure>
    </section>
  );
};

export default Hero;
