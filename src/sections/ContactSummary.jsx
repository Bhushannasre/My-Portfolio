import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { MdSquare } from "react-icons/md";
import { gsap } from "../lib/gsap";
import Marquee from "../components/Marquee";

const items = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"];
const items2 = Array(5).fill("contact me");

const ContactSummary = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> ”
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="text-gold"
        icon={MdSquare}
      />
    </section>
  );
};

export default ContactSummary;
