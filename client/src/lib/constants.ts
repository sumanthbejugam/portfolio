import { SiReact, SiNodedotjs, SiPython, SiAwsamplify, SiMongodb, SiPostgresql, SiFlutter, SiFlask, SiAndroid, SiKotlin } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BiLogoFirebase, BiLogoSpringBoot } from "react-icons/bi";
// Image assets from public directory
const tictracImg = "/assets/projects/Tic%20Trac/Tic%20Trac%201.png";
const reachAlertImg = "/assets/projects/Reach%20Alert/Play%20Store%20Image%201.png";
const intelliSwitchImg = "/assets/intelliSwitch.png";

export const RESUME_DATA = {
  name: "Sumanth Bejugam",
  location: "Fairfax, VA",
  email: "sumanthbejugam@gmail.com",
  phone: "+1 (571) 465-0804",
  linkedin: "linkedin.com/in/bejugamsumanth",
  resume: "https://docs.google.com/document/d/1pv7qBODUqVrOBGXt8pZVGLqWUn-_rfy2awr9ZV-s2lE/preview",
  summary: "Full-stack developer with 4+ years of experience building and deploying scalable web applications using React, Node.js, Java, Python, SQL, and MongoDB. Skilled in API development, AWS integration, and leading cross-functional teams to deliver high-quality solutions. Passionate about leveraging technology to solve real-world problems and crafting seamless user experiences—committed to perfection."
};

export const EXPERIENCE_DATA = [
  {
    title: "Full Stack Software Developer",
    company: "Epitome Research And Innovation Inc",
    location: "VA, USA",
    period: "Sep 2024 – Present",
    achievements: [
      "Owned the 0 to 1 build of a multi-tenant B2B SaaS platform as the primary full stack engineer, using React, Next.js (TypeScript) and Django/Flask",
      "Designed and optimized PostgreSQL / Amazon Aurora (PostgreSQL) schemas for tenant isolation, performance and reliable data handling.",
      "Built and deployed containerized backend services with Docker on AWS EC2 and AWS ECS, fronted by an AWS Application Load Balancer (ALB) and provisioned programmatically using Boto3.",
      "Implemented domain-isolated RAG and agentic AI flows using OpenAI, Hugging Face, LangChain, LangGraph, CrewAI and PydanticAI so each tenant only queried its own document set.",
      "Experimented with multiple LLM runtimes and providers, including Ollama, Google AI SDKs/APIs, PyTorch and TensorFlow, to benchmark model quality, latency and cost for production use.",
      "Orchestrated end-to-end AI workflows with n8n, connecting RAG pipelines, external tools and APIs into automated agentic flows.",
      "Applied prompt engineering best practices and built reusable Python utilities to standardize prompts and evaluate LLM responses.",
      "Maintained a simulation-heavy SaaS stack with a React frontend and Flask backend during commercialization, and built internal analysis tools in React, Streamlit and Flutter for domain experts.",
      "Maintained SOC 2–aligned security for the SaaS platform by tightening access control and audit logging across AWS and application services."
    ]
  },
  {
    title: "Associate Software Developer",
    company: "Quotient Technologies Inc",
    location: "Bengaluru, India",
    period: "Dec 2021 – July 2022",
    achievements: [
      "Built Dell Boomi processes to sync core Salesforce and NetSuite data so CRM and finance stayed aligned.",
      "Helped orchestrate data pipelines with Apache Airflow to schedule and monitor recurring data jobs.",
      "Wrote SQL transformations in Snowflake to prepare clean datasets for analytics and reporting."
    ]
  },
  {
    title: "Software Development Engineer",
    company: "Confegure Techsols Pvt Ltd",
    location: "Hyderabad, India",
    period: "May 2019 – Dec 2021",
    achievements: [
      "Founded and ran a product and services studio for 4 years, leading delivery of custom web and mobile solutions for 15+ clients.",
      "Built client dashboards and admin portals using React, Vite, Angular, HTML/CSS and JavaScript, backed by Node.js / Express.js and Java / Spring Boot APIs.",
      "Designed and implemented data models in PostgreSQL, MySQL and MongoDB, deploying applications on AWS EC2 for reliable, internet-facing access.",
      "Developed cross-platform applications using Flutter and React-based frontends, reusing business logic between web and Android to reduce feature delivery time.",
      "Launched Tic Trac (Flutter + Node.js), reaching 20,000+ downloads across 1,000+ cities and 6,000+ screens, and shipped Udhyogulu (10,000 downloads in a single day) and Lock Down Mart.",
      "Delivered high-conversion marketing sites such as the Confegure website and Red & Blue Appliance Repair site, generating 10+ and 100+ leads respectively in their first week.",
      "Scoped projects, reviewed code and mentored juniors, owning both technical decisions and product outcomes across multiple engagements."
    ]
  }
];

export const SKILLS_DATA = {
  technologies: [
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "AWS", icon: FaAws },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Flutter", icon: SiFlutter },
    { name: "Flask", icon: SiFlask },
    { name: "Spring Boot", icon: BiLogoSpringBoot },
    { name: "Android Java", icon: SiAndroid },
    { name: "Kotlin", icon: SiKotlin },
    { name: "Firebase", icon: BiLogoFirebase },
  ],
  certifications: [
    "Boomi – Associate Developer",
    "NASSCOM AI",
    "Certified Cloud Security Professional (CCSP)"
  ]
};

export const PROJECTS_DATA = [
  {
    title: "Tic Trac",
    description: "AI-powered Android app for movie ticket booking tracking.",
    technologies: ["Flutter", "Java", "AWS", "Firebase", "NodeJS", "ExpressJS"],
    metrics: "20,000+ downloads",
    image: tictracImg,
    gallery: [
      "/assets/projects/Tic%20Trac/Tic%20Trac%201.png",
      "/assets/projects/Tic%20Trac/Tic%20Trac%202.png",
      "/assets/projects/Tic%20Trac/Tic%20Trac%203.png",
      "/assets/projects/Tic%20Trac/Tic%20Trac%204.png",
      "/assets/projects/Tic%20Trac/Tic%20Trac%205.png",
      "/assets/projects/Tic%20Trac/Tic%20Trac%206.png",
      "/assets/projects/Tic%20Trac/Tic%20Trac%207.jpg"
    ],
    url: "https://play.google.com/store/apps/details?id=com.confegure.tictrac"
  },
  {
    title: "Reach Alert",
    description: "Location triggered alarm app that enhances user safety and convenience.",
    technologies: ["Java", "XML", "Firebase", "Foreground Service"],
    metrics: "1000+ downloads",
    image: reachAlertImg,
    gallery: [
      "/assets/projects/Reach%20Alert/Play%20Store%20Image%201.png",
      "/assets/projects/Reach%20Alert/Play%20Store%20Image%202.png",
      "/assets/projects/Reach%20Alert/Play%20Store%20Image%203.png",
      "/assets/projects/Reach%20Alert/Play%20Store%20Image%204.png",
      "/assets/projects/Reach%20Alert/Play%20Store%20Image%205.png"
    ],
    url: "https://play.google.com/store/apps/details?id=com.ismartapps.reachalert"
  },
  {
    title: "ML Heavy Simulation & Analytics Dashboards",
    description: "Cloud-hosted simulation platform with advanced analytics.",
    technologies: ["Vite", "Django", "Python", "AWS"],
    metrics: "Production deployed",
    image: "", // Placeholder or use existing logic if any
    gallery: [],
    url: "https://febioonthecloud.com"
  },
  {
    title: "Company Portfolio Websites",
    description: "Corporate portfolio and service showcase websites.",
    technologies: ["HTML", "CSS", "React"],
    metrics: "Live Website",
    image: "", // Placeholder
    gallery: [],
    url: "https://www.epitomeri.com"
  },
  {
    title: "Ok Next",
    description: "Multi-purpose queue management and e-commerce application.",
    technologies: ["Flutter", "Node.js", "Firebase"],
    metrics: "Production App",
    image: "", // Placeholder
    gallery: [
      "/assets/projects/Ok!%20Next/Image%201.jpg",
      "/assets/projects/Ok!%20Next/Image%202.jpg",
      "/assets/projects/Ok!%20Next/Image%203.jpg",
      "/assets/projects/Ok!%20Next/Image%204.jpg"
    ],
    url: "https://play.google.com/store/apps/details?id=com.confegure.oknext"
  },
  {
    title: "Intelli-Switch",
    description: "Smart Home Automation module to control appliances using voice commands.",
    technologies: ["C++", "Flutter", "ExpressJS", "MQTT"],
    metrics: "Prototype developed",
    image: intelliSwitchImg,
    gallery: [],
    url: "/"
  },
];

export const EDUCATION_DATA = [
  {
    institution: "George Mason University",
    location: "Fairfax, VA",
    period: "2022 - 2024",
    degree: "Master's Degree",
    subject: "Computer Science"
  }
];