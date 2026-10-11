import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials, contact } from "../constants";

const text = `Got a question or a project idea?
    We'd love to hear from you and discuss it further!`;
const items = Array(5).fill("just imagine, I code");

const Contact = () => {
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: { trigger: ".social-link" },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h3>E-mail</h3>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href={`mailto:${contact.email}`}
                className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl hover:text-white/80 transition-colors duration-200"
              >
                {contact.email}
              </a>
            </div>
            <div className="social-link">
              <h3>Phone</h3>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href={`tel:${contact.phone}`}
                className="text-xl md:text-2xl lg:text-3xl hover:text-white/80 transition-colors duration-200"
              >
                {contact.phoneDisplay}
              </a>
            </div>
            <div className="social-link">
              <h3>Social Media</h3>
              <div className="w-full h-px my-2 bg-white/30" />
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {socials.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs leading-loose tracking-wider uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                      >
                        <SocialIcon aria-hidden="true" className="text-yellow-600" />
                        {social.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
