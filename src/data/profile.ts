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
      "PostgreSQL", "SQLite", "MySQL",
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
      description: "Production-ready e-commerce API covering user auth, products, cart, orders, and Stripe payment processing with webhook-driven status updates. Implements Service Layer and Selector Layer patterns across 5 modular Django apps.",
      tech: ["Django REST Framework", "PostgreSQL", "Stripe", "JWT"],
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
    {
      name: "FER-2013 CNN vs ResNet",
      description: "Facial emotion recognition on FER-2013 — head-to-head comparison between a custom CNN built from scratch and transfer learning with ResNet50V2 (TensorFlow/Keras).",
      tech: ["TensorFlow/Keras", "Python", "ResNet50V2", "CNN"],
      repo: "https://github.com/ElDEEB21/FER-2013-CNN-ResNet",
    },
    {
      name: "Rossmann Store Sales Prediction",
      description: "ML pipeline predicting Rossmann store sales — EDA, feature engineering, and XGBoost model with GridSearchCV (97.9% R2). Deployed via Streamlit, FastAPI, and Power BI.",
      tech: ["Python", "XGBoost", "Scikit-Learn", "Streamlit", "FastAPI", "Power BI"],
      repo: "https://github.com/ElDEEB21/Rossmann-Store-Sales-DS",
    },
  ],
  competitiveProgramming: [
    { title: "Codeforces Expert", stat: "Expert", label: "Rating — top competitive programming tier" },
    { title: "ECPC 2023 Qualifications", stat: "17th / 280", label: "Ranked 17th place out of 280 teams" },
    { title: "ECPC 2023 Final", stat: "90th / 280", label: "Ranked 90th place out of 280 teams" },
  ],
}
