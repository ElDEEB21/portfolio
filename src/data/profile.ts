export interface Project {
  name: string
  description: string
  tech: string[]
  repo?: string
  link?: string
  highlight?: boolean
}

export interface Experience {
  company: string
  title: string
  dates: string
  location: string
  achievements: string[]
  tech?: string[]
}

export interface Education {
  degree: string
  institution: string
  year: string
  details: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
}

export interface OpenSourceContribution {
  project: string
  prNumber: string
  type: "Refactor" | "Feature"
  title: string
  description: string
  impact: string[]
  tech: string[]
  links: string[]
}

export interface Profile {
  name: string
  title: string
  location: string
  headline: string
  valueProp: string
  bio: string
  email: string
  github: string
  linkedin: string
  phone: string
  experience: Experience[]
  skills: {
    technical: string[]
    domain: string[]
    soft: string[]
  }
  education: Education[]
  certifications: Certification[]
  projects: Project[]
  openSource: OpenSourceContribution[]
  competitiveProgramming: {
    title: string
    stat: string
    label: string
  }[]
}

export const profile: Profile = {
  name: "Abdulrahman Eldeeb",
  title: "Backend Developer (Django)",
  location: "Fayoum, Egypt",
  headline: "Computer Science graduate and Codeforces Expert — building production-ready RESTful APIs with Django, Docker, and TDD",
  valueProp: "Computer Science graduate and Codeforces Expert — building production-ready RESTful APIs with Django, Docker, and TDD. Experienced in secure authentication, Stripe integration, and clean architecture patterns.",
  bio: "Computer Science graduate from Fayoum University and Codeforces Expert focused on backend development with Django and Django REST Framework. Experienced in building production-ready RESTful APIs using Dockerized workflows, token/JWT authentication, automated testing, and OpenAPI documentation. Strong foundation in algorithms and competitive programming. Also a technical instructor and mentor, teaching CS50, C++, data structures, and OOP to students and coaching competitive programming teams.",
  email: "ar2724@fayoum.edu.eg",
  github: "https://github.com/ElDEEB21",
  linkedin: "https://linkedin.com/in/abd-el-rahman-eldeeb",
  phone: "(+20) 102-671-9792",
  experience: [
    {
      company: "Recode Academy",
      title: "Instructor",
      dates: "Sep 2024 – Present",
      location: "Fayoum, Egypt",
      tech: ["C++", "Python", "CS50"],
      achievements: [
        "Teach multiple courses including CS50, C++ programming, algorithms and data structures, and Object-Oriented Programming (OOP) core concepts",
        "Deliver structured curriculum covering problem-solving fundamentals, computational thinking, and advanced programming paradigms to diverse student cohorts",
      ],
    },
    {
      company: "Fayoum ICPC Community",
      title: "Mentor & Coach",
      dates: "Apr 2023 – Mar 2025",
      location: "Fayoum, Egypt",
      tech: ["C++", "Algorithms", "Data Structures"],
      achievements: [
        "Mentored 15–20 students in programming fundamentals, data structures, and algorithm techniques to prepare for the Egyptian Collegiate Programming Contest (ECPC)",
        "Organized programming workshops, training sessions, and coding competitions to enhance programming abilities of community members",
      ],
    },
  ],
  skills: {
    technical: [
      "Python", "C++", "SQL", "HTML/CSS", "JavaScript",
      "Django", "Django REST Framework", "Django ORM",
      "PostgreSQL", "SQLite", "MySQL", "Redis",
      "Docker", "Docker Compose", "Git", "GitHub Actions",
      "JWT", "Stripe", "Swagger/OpenAPI",
      "PyTorch", "TensorFlow/Keras", "OpenCV",
      "Scikit-Learn", "Pandas", "NumPy",
    ],
    domain: [
      "RESTful APIs", "MVT Architecture", "Service Layer",
      "Selector Layer", "Clean Architecture", "TDD",
      "Competitive Programming", "Web Scraping",
    ],
    soft: [
      "Technical Training", "Team Leadership", "Coaching & Feedback",
      "Curriculum Development", "Problem-Solving", "Communication",
    ],
  },
  education: [
    {
      degree: "Bachelor of Computer Science and Artificial Intelligence",
      institution: "Fayoum University",
      year: "2026",
      details: "Graduated Jul 2026. Relevant Coursework: Object-Oriented Programming, Data Structures, Algorithms Design & Analysis, Operating Systems, Database Management Systems, Computer Architecture",
    },
  ],
  certifications: [
    { name: "Build REST APIs with Django REST Framework and Python", issuer: "Shubham Sarda (Udemy)", year: "2025" },
    { name: "Python Django - The Practical Guide", issuer: "Maximilian Schwarzmuller (Academind/Udemy)", year: "2025" },
    { name: "Build a Backend REST API with Python & Django - Advanced", issuer: "Mark Winterbottom & Brooke Rutherford (Udemy)", year: "2025" },
  ],
  projects: [
    {
      name: "E-Commerce REST API",
      description: "Production-ready e-commerce API covering user auth, products, cart, orders, and Stripe payment processing with webhook-driven status updates. Implements Service Layer and Selector Layer patterns across 5 modular Django apps. Added Redis caching with tiered TTLs, cache invalidation in the service layer on write operations, and environment-specific cache configurations.",
      tech: ["Django REST Framework", "PostgreSQL", "Stripe", "JWT", "Redis"],
      repo: "https://github.com/ElDEEB21/ecommerce-api-drf",
      highlight: true,
    },
    {
      name: "Recipe Management API",
      description: "Dockerized Recipe Management REST API with user registration, token authentication, profile endpoints, and strict ownership isolation for user data. Full CRUD with advanced filtering and multipart image upload.",
      tech: ["Django REST Framework", "PostgreSQL", "Docker", "OpenAPI", "TDD"],
      repo: "https://github.com/ElDEEB21/recipe-api-app",
      highlight: true,
    },
    {
      name: "Postify – Modern Blogging Platform",
      description: "Full-stack blogging platform with Django MVT, featuring markdown editor, hierarchical comments, Google OAuth via Django Allauth, and a creator dashboard with Chart.js analytics.",
      tech: ["Django MVT", "SQLite", "Chart.js", "Django Allauth"],
      repo: "https://github.com/ElDEEB21/postify-django",
      highlight: true,
    },
  ],
  competitiveProgramming: [
    { title: "Codeforces Expert", stat: "Expert", label: "Rating — top competitive programming tier" },
    { title: "ECPC 2023 Qualifications", stat: "17th / 280", label: "Ranked 17th place out of 280 teams" },
    { title: "ECPC 2023 Final", stat: "90th / 280", label: "Ranked 90th place out of 280 teams" },
  ],
  openSource: [
    {
      project: "delegate-skills",
      prNumber: "#39",
      type: "Refactor",
      title: "Unify the relay event scanner",
      description:
        "Consolidated seven hand-duplicated relay event scanners into one parity-gated implementation shipped inline in every script — fixing an unbounded memory-growth defect, hardening chunk-boundary and malformed-stream parsing, and restoring Vibe's final event lost at stream close.",
      impact: [
        "Fixed a real unbounded memory-retention defect present in all seven scanner copies",
        "21 test cases covering chunk boundaries, malformed input, and cap-reset recovery",
        "Parity gates guarantee all inlined copies behave byte-identically",
      ],
      tech: ["Node.js", "Streaming Parsing", "Parity Testing", "GitHub Actions"],
      links: ["https://github.com/amElnagdy/delegate-skills/pull/39"],
    },
    {
      project: "delegate-skills",
      prNumber: "#59 · #87",
      type: "Feature",
      title: "Add implementer delegation skills",
      description:
        "Shipped new implementer skills for the delegation fleet — Node-built-ins-only relays that drive each CLI in headless mode, keep the brief on stdin, enforce plan/read-only safety, and never commit, leaving review and landing to the orchestrator.",
      impact: [
        "Cline joins the fleet with the same brief → dispatch → review → land loop as the other ten skills",
        "GitHub Copilot CLI becomes an implementer too — JSONL event capture, denial detection, and resume flows verified live on Windows",
        "Both relays are Node-built-ins-only, never commit, and are registered across the project's CI gates",
      ],
      tech: ["Node.js", "Cline CLI", "GitHub Copilot CLI", "TDD"],
      links: [
        "https://github.com/amElnagdy/delegate-skills/pull/59",
        "https://github.com/amElnagdy/delegate-skills/pull/87",
      ],
    },
  ],
}
