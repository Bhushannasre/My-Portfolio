import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";

const text = `Turning ideas into powerful
digital experiences through
modern full-stack development`;

const aboutText = `I'm a Full-Stack Developer working with React.js, Next.js, Node.js, Express.js, PostgreSQL, and MongoDB.

With 9 months of internship experience, I've contributed to real-world client websites, business applications, admin dashboards, and AI-powered projects.

I focus on building responsive interfaces, reliable REST APIs, and practical solutions that make applications easier to use and maintain.

Beyond coding:
🚀 Building projects and exploring new technologies
🤖 Experimenting with AI-powered applications
🧠 Practicing JavaScript, TypeScript, and DSA
💼 Available for junior developer roles and freelance work`;

const About = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/images/myphoto.webp"
          alt="Portrait of Bhushan Nasre"
          width="900"
          height="900"
          loading="lazy"
          decoding="async"
          className="w-full max-w-md rounded-3xl h-auto"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
