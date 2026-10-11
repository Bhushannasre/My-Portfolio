import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { LuArrowUpRight } from "react-icons/lu";
import { gsap } from "../lib/gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";

const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

const HIDDEN_CLIP = "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
const VISIBLE_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";

const Works = () => {
  const overlayRefs = useRef([]);
  const rowRefs = useRef([]);
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    // Each row gets its own trigger. (Previously every row shared id="project",
    // so only the first one animated.)
    rowRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "back.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });
  }, []);

  const isDesktop = () => window.innerWidth >= 768;

  const showOverlay = (index) => {
    if (!isDesktop()) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { clipPath: HIDDEN_CLIP },
      { clipPath: VISIBLE_CLIP, duration: 0.15, ease: "power2.out" }
    );
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const hideOverlay = (index) => {
    if (!isDesktop()) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, { clipPath: HIDDEN_CLIP, duration: 0.2, ease: "power2.in" });
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (!isDesktop()) return;
    moveX.current?.(e.clientX + 24);
    moveY.current?.(e.clientY + 24);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <a
            key={project.id}
            ref={(el) => (rowRefs.current[index] = el)}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} (opens in a new tab)`}
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => showOverlay(index)}
            onMouseLeave={() => hideOverlay(index)}
            onFocus={() => showOverlay(index)}
            onBlur={() => hideOverlay(index)}
          >
            {/* hover overlay */}
            <div
              ref={(el) => (overlayRefs.current[index] = el)}
              style={{ clipPath: HIDDEN_CLIP }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10"
            />

            {/* title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white md:group-focus-visible:px-12 md:group-focus-visible:text-white">
              <h3 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h3>
              <LuArrowUpRight aria-hidden="true" className="md:size-6 size-5" />
            </div>
            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />
            {/* frameworks */}
            <div className="flex flex-wrap px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white md:group-focus-visible:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            {/* mobile preview image */}
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img
                src={project.bgImage}
                alt=""
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                loading="lazy"
                decoding="async"
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </a>
        ))}
        {/* desktop floating preview image */}
        <div
          ref={previewRef}
          aria-hidden="true"
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[min(960px,60vw)] md:block hidden opacity-0"
        >
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt=""
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
