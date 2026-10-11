import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

// ===============================
// SERVICES
// ===============================

export const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "I develop modern, responsive, and scalable web applications using MERN and PERN technologies. From frontend interfaces to backend APIs and database integration, I build solutions tailored to real business requirements.",
    items: [
      {
        title: "Backend Development",
        description:
          "(Node.js, Express.js, REST APIs, JWT Authentication)",
      },
      {
        title: "Frontend Development",
        description:
          "(React.js, Next.js, JavaScript, TypeScript, Tailwind CSS)",
      },
      {
        title: "Database Management",
        description:
          "(PostgreSQL, MongoDB, SQL, CRUD Operations)",
      },
    ],
  },
  {
    title: "Web Application Development",
    description:
      "I create interactive, responsive, and user-friendly web applications. My experience includes client websites, business platforms, admin dashboards, and applications that integrate with backend services.",
    items: [
      {
        title: "Responsive Web Design",
        description:
          "(HTML5, CSS3, Tailwind CSS, Mobile-First Design)",
      },
      {
        title: "React Applications",
        description:
          "(React Hooks, Context API, React Router, State Management)",
      },
      {
        title: "API Integration",
        description:
          "(Axios, Fetch API, REST APIs, Error Handling)",
      },
    ],
  },
  {
    title: "Backend & Authentication",
    description:
      "I build backend functionality with Node.js and Express.js, including RESTful APIs, authentication, database operations, and error handling. I focus on maintainable code and reliable application behavior.",
    items: [
      {
        title: "REST API Development",
        description:
          "(Express.js, MVC Architecture, CRUD APIs)",
      },
      {
        title: "User Authentication",
        description:
          "(JWT, Cookies, bcrypt, Protected Routes)",
      },
      {
        title: "Database Integration",
        description:
          "(PostgreSQL, MongoDB, Database Relationships)",
      },
    ],
  },
  {
    title: "Deployment & Freelance Solutions",
    description:
      "I help transform project ideas into functional web applications. From frontend development and backend integration to debugging and deployment, I have worked on client websites, internal applications, and personal projects.",
    items: [
      {
        title: "Application Deployment",
        description:
          "(Vercel, Render, Environment Variables)",
      },
      {
        title: "Testing & Debugging",
        description:
          "(Postman, Thunder Client, API Testing)",
      },
      {
        title: "Version Control",
        description:
          "(Git, GitHub, Collaborative Development)",
      },
    ],
  },
];

// ===============================
// PROJECTS
// ===============================

export const projects = [
  {
    id: 1,
    name: "AI-Powered Resume Builder",
    description:
      "A full-stack AI-powered resume builder with resume analysis, AI-assisted content generation, user authentication, and a personalized dashboard. Integrated Google Gemini AI to enhance resume content.",
    href: "https://ai-resume-builder-nine-steel.vercel.app/",
    image: "/assets/projects/ResumeBuilder.webp",
    bgImage: "/assets/backgrounds/blanket.webp",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Gemini AI" },
    ],
  },
  {
    id: 2,
    name: "Real Estate Web Site",
    description:
      "A responsive real estate application developed using the PERN stack. Worked on frontend interfaces, property-related functionality, REST API integration, and PostgreSQL database connectivity.",
    href: "https://way2plots-web.aibzr.com/",
    image: "/assets/projects/RealEstate.webp",
    bgImage: "/assets/backgrounds/curtains.webp",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "XTools Music Platform",
    description:
      "A music-related web platform featuring user registration, JWT authentication, newsletter subscriptions, and contact functionality. Worked on frontend development and backend API integration.",
    href: "https://github.com/Bhushannasre/Xtools-Frontend",
    image: "/assets/projects/Xtools.webp",
    bgImage: "/assets/backgrounds/map.webp",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Express.js" },
      { id: 5, name: "MongoDB" },
    ],
  },
  {
    id: 4,
    name: "Astrology Website",
    description:
      "A web application for astrology services, including user registration, JWT authentication, and contact functionality. Developed frontend interfaces and integrated backend APIs for a seamless user experience.",
    href: "https://svjastro.com/",
    image: "/assets/projects/Astrology.webp",
    bgImage: "/assets/backgrounds/poster.webp",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Express.js" },
      { id: 5, name: "PostgreSQL" },
    ],
  },
  {
    id: 5,
    name: "RDVP Application",
    description:
      "A web application for managing RDVP operations, including user management, data visualization, and reporting. Developed frontend interfaces and integrated backend APIs for a seamless user experience.",
    href: "https://rdvp.in/",
    image: "/assets/projects/RDVP.webp",
    bgImage: "/assets/backgrounds/table.webp",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Express.js" },
      { id: 5, name: "PostgreSQL" },
    ],
  },

];

// ===============================
// SOCIAL MEDIA
// ===============================

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Bhushannasre",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bhushan-nasre-mernstack/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bhushan_nasre/",
    icon: FaInstagram,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Bhushan_Nasre1/",
    icon: SiLeetcode,
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/bhushannasre3",
    icon: FaHackerrank,
  },
];

// ===============================
// CONTACT DETAILS (single source of truth)
// ===============================

export const contact = {
  email: "bhushannasre3@gmail.com",
  phone: "+918788571169",
  phoneDisplay: "8788571169",
};
