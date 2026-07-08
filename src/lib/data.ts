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
    slug: "football-games-2023",
    title: "Football Games 2023 Offline",
    category: "Sports Game",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1600&q=80",
    tagline: "Offline football game featuring multiple game modes and challenging levels.",
    stack: [
      "Unity",
      "C#",
      "Scriptable Objects",
      "Football Kit",
      "Mobile Development",
    ],
    problem:
      "Build a scalable football game with multiple gameplay modes while keeping the codebase easy to maintain.",
    solution:
      "Developed reusable gameplay systems using Scriptable Objects and integrated football plugins to accelerate development.",
    outcome:
      "Successfully delivered 27 engaging levels with an optimized and extendable architecture.",
  },

  {
    slug: "shuriken-hit",
    title: "Shuriken Hit Challenge",
    category: "Hyper Casual Game",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
    tagline: "A precision-based arcade game with addictive gameplay.",
    stack: [
      "Unity",
      "C#",
      "Scriptable Objects",
      "MVP",
      "FSM",
    ],
    problem:
      "Create a lightweight hyper-casual game with reusable gameplay systems for future expansion.",
    solution:
      "Designed scalable gameplay architecture using Scriptable Objects, MVP, and Finite State Machine patterns.",
    outcome:
      "Built 60 unique levels while maintaining a clean, maintainable codebase.",
  },

  {
    slug: "punch-fight",
    title: "Punch Fight Tung Tung Hit",
    category: "Action Game",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
    tagline: "Fast-paced action game with physics-driven combat mechanics.",
    stack: [
      "Unity",
      "C#",
      "Quaternions",
      "Scriptable Objects",
      "FSM",
    ],
    problem:
      "Develop responsive combat mechanics while keeping gameplay systems reusable.",
    solution:
      "Implemented quaternion-based movement and scalable architecture using MVP and FSM patterns.",
    outcome:
      "Delivered polished gameplay with reusable systems for future feature expansion.",
  },

  {
    slug: "screw-nut-bolt",
    title: "Screw Nut Bolt Puzzle",
    category: "Puzzle Game",
    year: "2023",
    cover:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    tagline: "A satisfying puzzle experience built entirely from scratch.",
    stack: [
      "Unity",
      "C#",
      "Scriptable Objects",
      "Performance Optimization",
    ],
    problem:
      "Create a smooth puzzle game that performs consistently across mobile devices.",
    solution:
      "Implemented the complete gameplay system from scratch while optimizing V-Sync and reusable game architecture.",
    outcome:
      "Delivered smooth gameplay with scalable systems ready for future content updates.",
  },

  {
    slug: "basketball-hoop",
    title: "Basketball Hoop Offline",
    category: "Sports Game",
    year: "2023",
    cover:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1600&q=80",
    tagline: "Offline basketball game focused on smooth gameplay and performance.",
    stack: [
      "Unity",
      "C#",
      "Scriptable Objects",
      "Unity Profiler",
    ],
    problem:
      "Ensure stable FPS and optimized rendering for a mobile sports game.",
    solution:
      "Optimized batching, frame rate stability, and reusable gameplay systems using Scriptable Objects.",
    outcome:
      "Achieved smooth gameplay with reduced frame spikes and better mobile performance.",
  },

  {
    slug: "toilet-tower-defense",
    title: "Toilet Tower Defense",
    category: "Strategy / Tower Defense",
    year: "2023",
    cover:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
    tagline: "A complete tower defense game inspired by Plants vs. Zombies.",
    stack: [
      "Unity",
      "C#",
      "Object Pooling",
      "MVP",
      "Factory Pattern",
      "FSM",
      "Grid System",
    ],
    problem:
      "Develop a complete tower defense game with scalable enemy AI, towers, and game systems.",
    solution:
      "Built the project entirely from scratch using object pooling, factory pattern, MVP architecture, delegates, events, and a custom grid system.",
    outcome:
      "Delivered a fully functional tower defense game with reusable architecture, optimized performance, and clean code.",
  },
];


export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Unity Game Development",
    description:
      "End-to-end development of engaging 2D and 3D games using Unity and C#. From prototypes to production-ready mobile games.",
    bullets: [
      "2D & 3D Game Development",
      "Unity Engine · C#",
      "Mobile Game Development",
    ],
  },
  {
    title: "Gameplay Programming",
    description:
      "Designing and implementing fun, responsive, and scalable gameplay mechanics with clean architecture and reusable code.",
    bullets: [
      "Game Mechanics",
      "Player Controls & AI",
      "Level & Gameplay Systems",
    ],
  },
  {
    title: "Game Architecture",
    description:
      "Building maintainable and scalable game systems using industry-standard design patterns and Unity best practices.",
    bullets: [
      "Scriptable Objects",
      "MVP · FSM · Factory Pattern",
      "Object Pooling & Events",
    ],
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing Unity games for smooth gameplay across Android and iOS by reducing bottlenecks and improving rendering performance.",
    bullets: [
      "Unity Profiler",
      "FPS & Memory Optimization",
      "Batching & V-Sync Tuning",
    ],
  },
  {
    title: "Advanced Unity Solutions",
    description:
      "Implementing modern Unity technologies, multiplayer foundations, and third-party integrations to build scalable game experiences.",
    bullets: [
      "DOTS & ECS",
      "Netcode for GameObjects (NGO)",
      "Playable Ads & Asset Integration",
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
      "Sannan consistently develops clean, scalable Unity systems and always focuses on gameplay quality and performance optimization.",
    name: "Senior Unity Developer",
    role: "Technical Lead",
    company: "Highbit Solution",
  },
  {
    quote:
      "He quickly adapts to new game mechanics and delivers maintainable code using modern Unity architecture and design patterns.",
    name: "Project Lead",
    role: "Game Development Team",
    company: "Six Edge Technologies",
  },
  {
    quote:
      "His attention to performance, debugging, and code quality helped us deliver polished mobile games on schedule.",
    name: "Development Manager",
    role: "Game Studio",
    company: "Pakistan",
  },
  {
    quote:
      "A dependable Unity developer who communicates well, collaborates effectively, and always looks for better technical solutions.",
    name: "Team Lead",
    role: "Game Development",
    company: "Pakistan",
  },
];



export const SKILLS: { name: string; group: string }[] = [
  // Game Engine
  { name: "Unity", group: "Game Engine" },
  { name: "C#", group: "Programming" },

  // Game Development
  { name: "2D Game Development", group: "Game Development" },
  { name: "3D Game Development", group: "Game Development" },
  { name: "Gameplay Programming", group: "Game Development" },
  { name: "Mobile Game Development", group: "Game Development" },
  { name: "Game Mechanics", group: "Game Development" },
  { name: "Level Design", group: "Game Development" },

  // Architecture & Patterns
  { name: "Scriptable Objects", group: "Architecture" },
  { name: "Object Pooling", group: "Architecture" },
  { name: "MVP Pattern", group: "Architecture" },
  { name: "Factory Pattern", group: "Architecture" },
  { name: "Finite State Machine (FSM)", group: "Architecture" },
  { name: "Design Patterns", group: "Architecture" },
  { name: "Delegates & Events", group: "Architecture" },

  // Performance
  { name: "Unity Profiler", group: "Optimization" },
  { name: "Performance Optimization", group: "Optimization" },
  { name: "Batching Optimization", group: "Optimization" },
  { name: "V-Sync Optimization", group: "Optimization" },
  { name: "Debugging & Testing", group: "Optimization" },

  // Latest Unity Technologies
  { name: "DOTS (Data-Oriented Tech Stack)", group: "Advanced Unity" },
  { name: "Netcode for GameObjects (NGO)", group: "Advanced Unity" },
  { name: "Unity ECS", group: "Advanced Unity" },

  // Third-Party Assets
  { name: "RCC", group: "Assets & Plugins" },
  { name: "Invector", group: "Assets & Plugins" },
  { name: "Football Kit", group: "Assets & Plugins" },
  { name: "Luna Playworks", group: "Assets & Plugins" },
  { name: "Playable Ads", group: "Assets & Plugins" },

  // Development Tools
  { name: "Visual Studio", group: "Tools" },
  { name: "VS Code", group: "Tools" },
  { name: "JetBrains Rider", group: "Tools" },

  // General
  { name: "Problem Solving", group: "Professional Skills" },
  { name: "Clean Code", group: "Professional Skills" },
  { name: "Game Architecture", group: "Professional Skills" },
];

export const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Clients" },
  { id: "contact", label: "Contact" },
];
