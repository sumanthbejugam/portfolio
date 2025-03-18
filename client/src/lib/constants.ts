import { SiReact, SiNodedotjs, SiPython, SiAmazonaws, SiMongodb, SiPostgresql, SiFlutter } from "react-icons/si";

export const RESUME_DATA = {
  name: "Sumanth Bejugam",
  location: "Fairfax, VA",
  email: "sumanthbejugam@gmail.com",
  phone: "+1 (571) 465-0804",
  linkedin: "linkedin.com/in/bejugamsumanth",
  summary: "Full stack developer with 4+ years of experience in building and deploying scalable web applications using React, Node.js, Java, Python, SQL, and MongoDB. Expertise in integrating with AWS services, developing API endpoints, and implementing CI/CD pipelines."
};

export const EXPERIENCE_DATA = [
  {
    title: "Full Stack Developer",
    company: "Epitome Research And Innovation Inc",
    location: "VA, USA",
    period: "Sep 2024 – Present",
    achievements: [
      "Enhanced user experience for simulation management by developing and optimizing user-facing interfaces using React.js with Mantine",
      "Accomplished seamless 3D object visualization using Three.js package in React",
      "Established seamless interaction between front-end, back-end, and computational modules",
      "Achieved 30% cost savings through AWS infrastructure automation"
    ]
  },
  {
    title: "Lead Software Developer",
    company: "Confegure Techsols Pvt Ltd",
    location: "Hyderabad, India",
    period: "May 2020 – May 2024",
    achievements: [
      "Facilitated essential goods delivery platform using React and Firebase",
      "Constructed fully responsive website for non-medical transport service",
      "Implemented robust web applications using Java Spring Boot and React",
      "Optimized complex databases using SQL and MongoDB"
    ]
  }
];

export const SKILLS_DATA = {
  technologies: [
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "AWS", icon: SiAmazonaws },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Flutter", icon: SiFlutter }
  ],
  certifications: [
    "Boomi – Associate Developer",
    "NASSCOM AI",
    "Certified Cloud Security Professional (CCSP)"
  ]
};

export const PROJECTS_DATA = [
  {
    title: "3D Simulation Viewer",
    description: "Interactive 3D object visualization platform with STL file support",
    technologies: ["React", "Three.js", "Flask", "MongoDB"],
    metrics: "50% reduction in rendering time"
  },
  {
    title: "Essential Goods Marketplace",
    description: "Online marketplace for local businesses during lockdown",
    technologies: ["React", "Firebase", "Node.js"],
    metrics: "40% increase in local business sales"
  },
  {
    title: "Movie Ticket Tracker",
    description: "AI-powered Android app for movie ticket booking analytics",
    technologies: ["Flutter", "Java", "Firebase"],
    metrics: "20,000+ downloads"
  }
];