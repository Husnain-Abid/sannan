export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  tagline: string;
  stack: string[];
  problem: string;
  solution: string;
  outcome: string;


  github?: string;
  live?: string;

};

export const PROJECTS: Project[] = [
  {
    slug: "doctor-findy",
    title: "DoctorFindy",
    category: "Healthcare Web App",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    tagline: "Online doctor appointment booking platform.",
    stack: ["React.js", "Laravel API", "Tailwind CSS"],
    problem:
      "Users needed an easy way to find doctors and book appointments online without manual hassle.",
    solution:
      "Developed responsive frontend using React.js and integrated Laravel APIs for booking, search, and user management.",
    outcome:
      "Improved booking flow and user experience with fast and responsive UI, making it easier for users to find and book doctors.",
  live: "https://doctorfindy.com/",
    },
  {
    slug: "dream-hire",
    title: "Dream Hire",
    category: "Freelance Marketplace",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    tagline: "Fiverr-inspired freelance marketplace platform.",
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    problem:
      "Freelancers and clients needed a platform to connect and manage services efficiently.",
    solution:
      "Built a responsive UI with role-based access and state management using Redux Toolkit.",
    outcome:
      "Delivered a smooth user experience with structured workflows for buyers and sellers.",
    github: "https://github.com/Husnain-Abid/dream-hire",
    live: "https://dream-hire-five.vercel.app/",

  },
  {
    slug: "freepoint-home",
    title: "FreePoint Home",
    category: "SaaS Platform",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    tagline: "Home customization platform with dynamic pricing.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express"],
    problem:
      "Users needed a way to customize home designs with real-time pricing updates.",
    solution:
      "Developed full-stack application with dynamic configuration logic and REST APIs.",
    outcome:
      "Enabled users to customize designs interactively with accurate pricing feedback.",

    github: "https://github.com/Husnain-Abid/home_customization",
    live: "https://freepointhomes.com/",
  },
  {
    slug: "clearset-ai",
    title: "ClearSet AI",
    category: "Business Website",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    tagline: "Modern AI solutions website with 3D interactions.",
    stack: ["Next.js", "TypeScript", "Three.js", "GSAP"],
    problem:
      "Client needed a high-end website to showcase AI services with engaging visuals.",
    solution:
      "Built interactive UI using Three.js and GSAP animations with modern design.",
    outcome:
      "Delivered a visually engaging website that improved brand presentation.",

    github: "https://github.com/Husnain-Abid/clearset",
    live: "https://clearset.vercel.app/",

  },
  {
    slug: "client-dashboard",
    title: "Admin Dashboard",
    category: "Web Application",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tagline: "Custom admin dashboard for managing data and users.",
    stack: ["React.js", "Node.js", "MongoDB"],
    problem:
      "Client required a centralized system to manage users and application data.",
    solution:
      "Developed full-stack dashboard with API integration and CRUD functionality.",
    outcome:
      "Improved efficiency by centralizing data management and workflows.",

    github: "https://github.com/Husnain-Abid/dashboard-dreamhire-seller",
    live: "https://dashboard-dreamhire-seller.vercel.app/#",
  },
  {
    slug: "stellar-bulldogs",
    title: "Stellar Bulldogs",
    category: "E-commerce Website",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1600&q=80",
    tagline: "Bulldog-focused eCommerce store for showcasing and selling puppies.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    problem:
      "The client needed an online platform to showcase available bulldogs and manage inquiries in a professional and user-friendly way.",
    solution:
      "Developed a responsive eCommerce-style website with structured listings, detailed pages, and smooth navigation. Focused on clean UI and optimized performance for better user engagement.",
    outcome:
      "Delivered a visually appealing and easy-to-use platform that improved online presence and simplified customer interaction and inquiries.",

    github: "https://github.com/Husnain-Abid/stellarbulldogs",
    live: "https://www.stellarbulldogs.com/",

  }

];



export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Responsive and high-performance user interfaces built with React.js and modern UI practices. Focused on clean design, usability, and smooth user experience.",
    bullets: [
      "React.js · JavaScript (ES6+)",
      "Tailwind CSS · Responsive Design",
      "Reusable Components & Optimization",
    ],
  },
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web application development using the MERN stack. From frontend to backend APIs and database integration.",
    bullets: [
      "MongoDB · Express.js · React · Node.js",
      "REST API Development",
      "Authentication & CRUD Systems",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Scalable backend systems with Node.js and Express. Clean architecture, API handling, and database management for real-world applications.",
    bullets: [
      "Node.js · Express.js",
      "RESTful APIs",
      "MongoDB & MySQL Integration",
    ],
  },
  {
    title: "API Integration",
    description:
      "Seamless integration of third-party and custom APIs to extend application functionality and improve user workflows.",
    bullets: [
      "REST API Integration",
      "Axios / Fetch",
      "Data Handling & Error Management",
    ],
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploying web applications on VPS with domain setup, SSL configuration, and production optimization.",
    bullets: [
      "VPS Deployment",
      "Domain & SSL Setup",
      "Production Build Optimization",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The work was solid and he was very accommodating when our business requirements changed mid-project. Smooth communication throughout.",
    name: "Bruce H.",
    role: "Business Owner",
    company: "United States",
  },
  {
    quote:
      "Second time working together — this time on deployment of a complex full-stack project. Consistently delivers and solves problems efficiently.",
    name: "Jason T.",
    role: "Startup Founder",
    company: "United States",
  },
  {
    quote:
      "Completed everything on time and went above and beyond to ensure satisfaction. Highly recommended for web development work.",
    name: "Marc P.",
    role: "Client",
    company: "United States",
  },
  {
    quote:
      "Great job as always. Clean delivery and very reliable developer for ongoing web projects.",
    name: "Skeeter F.",
    role: "Repeat Client",
    company: "United States",
  },
  {
    quote:
      "Great communication and very easy to work with. Understood requirements quickly and delivered as expected.",
    name: "Rafiq I.",
    role: "Client",
    company: "Sweden",
  },
  {
    quote:
      "Exceptional frontend execution with strong attention to UI detail and responsiveness across devices.",
    name: "Ricky S.",
    role: "UI/UX Client",
    company: "United States",
  },
  {
    quote:
      "Helped redeploy and restructure my full-stack application. Now I can even manage basic edits myself — very helpful experience.",
    name: "Josh B.",
    role: "Founder",
    company: "United States",
  },
];

export const SKILLS: { name: string; group: string }[] = [
  // Frontend
  { name: "JavaScript (ES6+)", group: "Frontend" },
  { name: "React.js", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "HTML5", group: "Frontend" },
  { name: "CSS3", group: "Frontend" },

  // Backend
  { name: "Node.js", group: "Backend" },
  { name: "Express.js", group: "Backend" },
  { name: "REST APIs", group: "Backend" },

  // Database
  { name: "MongoDB", group: "Database" },
  { name: "MySQL", group: "Database" },

  // Tools / Others
  { name: "Git & GitHub", group: "Tools" },
  { name: "Redux Toolkit", group: "Frontend" },
  { name: "Context API", group: "Frontend" },
  { name: "API Integration", group: "Frontend" },

  // Deployment
  { name: "VPS Deployment", group: "DevOps" },
  { name: "Domain & SSL Setup", group: "DevOps" },
];

export const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Clients" },
  { id: "contact", label: "Contact" },
];
