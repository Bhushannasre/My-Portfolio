import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { socials, contact } from "../constants";

const SECTIONS = ["home", "services", "about", "work", "contact"];

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);
  const lenis = useLenis();

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], { autoAlpha: 0, x: -20 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, { xPercent: 0, duration: 1, ease: "power3.out" })
      .to(
        linksRef.current,
        { autoAlpha: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
        "<"
      )
      .to(
        contactRef.current,
        { autoAlpha: 1, x: 0, duration: 0.5, ease: "power2.out" },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, { rotate: 45, y: 3.3, duration: 0.3, ease: "power2.inOut" })
      .to(
        bottomLineRef.current,
        { rotate: -45, y: -3.3, duration: 0.3, ease: "power2.inOut" },
        "<"
      );
  }, []);

  // Hide the burger while scrolling down, show it when scrolling up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setMenu = (open) => {
    if (open) {
      tl.current.play();
      iconTl.current.play();
    } else {
      tl.current.reverse();
      iconTl.current.reverse();
    }
    setIsOpen(open);
  };

  // Escape closes the menu
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const goTo = (e, id) => {
    e.preventDefault();
    setMenu(false);
    // Use Lenis so scrolling doesn't fight the smooth-scroll engine
    lenis?.scrollTo(`#${id}`, { duration: 2 });
  };

  return (
    <>
      <nav
        ref={navRef}
        id="site-menu"
        aria-label="Main"
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {SECTIONS.map((section, index) => (
            <div key={section} ref={(el) => (linksRef.current[index] = el)}>
              <a
                href={`#${section}`}
                onClick={(e) => goTo(e, section)}
                className="transition-all duration-300 cursor-pointer hover:text-white"
              >
                {section}
              </a>
            </div>
          ))}
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <a
              href={`mailto:${contact.email}`}
              className="text-xl tracking-widest lowercase text-pretty hover:text-white transition-colors duration-300"
            >
              {contact.email}
            </a>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="site-menu"
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={() => setMenu(!isOpen)}
        style={{
          clipPath:
            showBurger || isOpen
              ? "circle(50% at 50% 50%)"
              : "circle(0% at 50% 50%)",
        }}
      >
        <span ref={topLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center" />
        <span ref={bottomLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center" />
      </button>
    </>
  );
};

export default Navbar;
