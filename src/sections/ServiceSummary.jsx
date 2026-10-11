import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

// Each row drifts a small, viewport-relative distance. The range is symmetric
// around 0, so every row is centred (fully readable) when the section is in the
// middle of the screen. Alternating directions keep the staggered feel.
const DRIFT = [
  ["#title-service-1", 4],
  ["#title-service-2", -4],
  ["#title-service-3", 3],
  ["#title-service-4", -4],
];

const ServiceSummary = () => {
  useGSAP(() => {
    DRIFT.forEach(([target, vw]) => {
      gsap.fromTo(
        target,
        { x: `${-vw}vw` },
        {
          x: `${vw}vw`,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  });

  return (
    <section
      aria-label="Skills overview"
      className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 text-[clamp(30px,5.5vw,88px)]"
    >
      <div id="title-service-1">
        <p>Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex flex-wrap items-center justify-center gap-x-3"
      >
        <p className="font-normal">Development</p>
        <div className="hidden md:block h-1 md:w-[6vw] bg-gold" />
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex flex-wrap items-center justify-center gap-x-3"
      >
        <p>APIs</p>
        <div className="hidden md:block h-1 md:w-[6vw] bg-gold" />
        <p className="italic">Frontends</p>
        <div className="hidden md:block h-1 md:w-[6vw] bg-gold" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
