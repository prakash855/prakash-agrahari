import {
  Boxes,
  Brain,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Prakash Agrahari",
  role: "Senior Frontend / MERN Stack Engineer",
  email: "sshivamprakashh301@gmail.com",
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=sshivamprakashh301@gmail.com",
  github: "https://github.com/prakash855",
  linkedin: "https://www.linkedin.com/in/prakash-agrahari-a5655312b",
  resume: "/resume-prakash-agrahari.pdf",
  location: "India, open to Dubai and international product roles",
};

export const stats = [
  { value: 5, suffix: "+", label: "Years building product-grade web apps" },
  {
    value: 30,
    suffix: "+",
    label: "Reusable UI patterns and foundations shipped",
  },
  { value: 12, suffix: "+", label: "API-heavy workflows integrated" },
  { value: 99, suffix: "%", label: "Focus on responsive, accessible UX" },
];

export const strengths = [
  {
    icon: Layers3,
    title: "Frontend architecture",
    text: "Builds scalable React foundations with reusable components, type-safe contracts, and pragmatic state boundaries.",
  },
  {
    icon: Workflow,
    title: "Product engineering",
    text: "Turns complex workflows into crisp interfaces with fast feedback, dependable forms, and clean API integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality mindset",
    text: "Balances polished UI craft with accessibility, performance budgets, maintainability, and recruiter-ready presentation.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js App Router",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Backend integrations",
    ],
  },
  {
    title: "State and forms",
    icon: Boxes,
    skills: [
      "Redux Toolkit",
      "Context API",
      "Formik",
      "Reusable UI systems",
      "Client data flows",
    ],
  },
  {
    title: "Cloud and DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Deployment basics",
      "Netlify",
      "Scalability concepts",
      "CI/CD fundamentals",
    ],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Postman", "npm"],
  },
  {
    title: "Modern architecture",
    icon: Brain,
    skills: [
      "Server components",
      "Performance tuning",
      "SEO",
      "Accessibility",
      "Design systems",
    ],
  },
];

export const timeline = [
  {
    period: "2024 - Present",
    title: "Senior Frontend / MERN Stack Engineer",
    detail:
      "Owning modern React foundations, scalable UI architecture, and frontend systems that support growing product surfaces.",
  },
  {
    period: "2022 - 2024",
    title: "Frontend Developer",
    detail:
      "Built full-stack workflows with React, Node.js, Express, MongoDB, authentication, API integrations, and state management.",
  },
  {
    period: "2021 - 2022",
    title: "Frontend Engineer",
    detail:
      "Developed responsive interfaces, reusable components, and user-friendly web applications with JavaScript and React.",
  },
];

export const projects = [
  {
    title: "e-Notes MERN Application",
    type: "Full Stack",
    summary:
      "A productivity-focused notes platform with authentication, note lifecycle management, and responsive dashboards.",
    challenge:
      "Designed a dependable note workflow across create, edit, delete, and archive states while keeping UI state predictable.",
    solution:
      "Used Redux Toolkit for state boundaries, Node/Express APIs for data operations, and MongoDB for persistent note storage.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "Chakra UI",
    ],
    live: "https://e-notes-mine.vercel.app/",
    github: "https://github.com/prakash855/e-notes",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Pencil-UI",
    type: "Frontend Foundation",
    summary:
      "A lightweight reusable UI component library built from raw HTML, CSS, and JavaScript and deployed independently.",
    challenge:
      "Prove deep frontend fundamentals without leaning on third-party component libraries or heavy abstractions.",
    solution:
      "Created reusable patterns around DOM behavior, styling architecture, component consistency, and lightweight performance.",
    stack: ["HTML", "CSS", "JavaScript", "Netlify", "Design Systems", "DOM"],
    live: "https://pencil-ui.netlify.app/",
    github: "https://github.com/prakash855/Pencil-UI",
    accent: "from-amber-300 to-rose-400",
  },
];

export const achievements = [
  {
    icon: Rocket,
    title: "Independent product shipping",
    text: "Designed, built, and deployed Pencil-UI as a reusable frontend foundation.",
  },
  {
    icon: Sparkles,
    title: "Senior-level UI craft",
    text: "Strong record of responsive design, clean component systems, and polished product interfaces.",
  },
  {
    icon: BriefcaseBusiness,
    title: "International-ready profile",
    text: "Positioned for product companies and Dubai-based teams seeking modern React and MERN engineering depth.",
  },
];

export const learning = [
  "AWS Cloud Practitioner preparation",
  "Generative AI workflows for product engineering",
  "Backend scalability, caching, queues, and cloud-native architecture",
];
