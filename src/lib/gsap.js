import gsap from "gsap";
import { ScrollTrigger, Observer } from "gsap/all";

// Register plugins once, here. Components import gsap from this file so
// ScrollTrigger never depends on which module happened to load first.
gsap.registerPlugin(ScrollTrigger, Observer);

export { gsap, ScrollTrigger, Observer };
