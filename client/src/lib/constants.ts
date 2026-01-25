import { SiReact, SiNodedotjs, SiPython, SiAwsamplify, SiMongodb, SiPostgresql, SiFlutter, SiFlask, SiAndroid, SiKotlin } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BiLogoFirebase, BiLogoSpringBoot } from "react-icons/bi";
// Image assets from public directory
const tictracImg = "/assets/tictrac.png";
const reachAlertImg = "/assets/reachAlert.png";
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
    title: "Full Stack Developer",
    company: "Epitome Research And Innovation Inc",
    location: "VA, USA",
    period: "Sep 2024 – Present",
    achievements: [
      "Engineered a responsive web application using React with Next.js, leveraging its server- side rendering to reduce page load times by 40 % and boost SEO performance by 30 %, ultimately increasing organic traffic and user engagement.",
      "Implemented RESTful API using Flask, leveraging its lightweight architecture to cut development cycles by 25 %, ultimately enhancing overall system performance.",
      "Designed a scalable data storage solution using MongoDB, reducing query latency by 35 % and boosting data throughput by 50 %, which ensured rapid and efficient handling of dynamic workloads.",
      "Orchestrated API and website hosting on AWS EC2 instances, reducing server response times by 35 % and achieving 99.9 % uptime, which enhanced scalability and boosted overall user satisfaction.",
      "Established automated CI / CD pipelines using AWS CodeBuild, reducing build times by 40 % and improving deployment frequency by 50 %, which increased development efficiency.",
      "Devised automated AWS resource management tools using Boto3, reducing manual provisioning time by 50 % and cutting deployment cycles by 30 %, thereby streamlining operations and enhancing system reliability.",
      "Spearheaded a high - performance cross - platform application for web and Android using Flutter, reducing development time by 40 % and cutting code redundancy by 35 %, which streamlined feature deployment.",
    ]
  },
  {
    title: "Associate Developer",
    company: "Quotient Technologies Inc",
    location: "Bengaluru, India",
    period: "Dec 2021 – June 2022",
    achievements: [
      "Formulated an error - free Boomi Integration Flow for synchronizing data between Salesforce and NetSuite. ",
      "Upgraded flows for REST Endpoint and Employee Off- boarding in Okta, reducing the process time by 90 %.",
      "Developed a web application using the EJS & Express with MVC architecture, reducing development cycles by 30 % and accelerating feature deployments.",
    ]
  },
  {
    title: "Software Developer",
    company: "Confegure Techsols Pvt Ltd",
    location: "Hyderabad, India",
    period: "May 2020 – May 2024",
    achievements: [
      "Initiated a full - stack web application using the MERN stack, lowering bug fix rates by 25 %, which progressed user base.",
      "Crafted a high - performance web application using Flutter for web, reducing load times by 30% and cutting development cycles by 35%, which increased user experience and engagement.",
      "Designed a responsive front- end using HTML, CSS, Bootstrap, and JavaScript, boosting mobile engagement by 25 %, which significantly improved overall user experience.",
      "Built a mobile application using React Native, leveraging cross - platform capabilities to cut maintenance overhead by 30 %, which decreased time - to - market.",
      "Engineered robust API endpoints using Node.js with Express, streamlining data processing to significantly boost system performance and elevate user satisfaction.",
      "Migrated to a scalable MQTT server that reduced message latency and accelerated delivery speed by 30 %, ensuring near real - time data transmission and heightened responsiveness.",
      "Architected a powerful backend using Java Spring Boot, optimizing API response times by 40 % and enhancing overall system efficiency.",
      "Implemented Firebase Auth, Firestore, Analytics, and Crashlytics to reduce app crash rates by 40 %, bolstering stability and reinforcing user trust.",
      "Launched an Android application using Java, reducing app launch times by 30 % and achieving over 20,000 downloads, demonstrating significant market traction.",
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
    url: "https://play.google.com/store/apps/details?id=com.confegure.tictrac"
  },
  {
    title: "Reach Alert",
    description: "Location triggered alarm app that enhances user safety and convenience.",
    technologies: ["Java", "XML", "Firebase", "Foreground Service"],
    metrics: "1000+ downloads",
    image: reachAlertImg,
    url: "https://play.google.com/store/apps/details?id=com.ismartapps.reachalert"
  },
  {
    title: "Intelli-Switch",
    description: "Smart Home Automation module to control appliances using voice commands.",
    technologies: ["C++", "Flutter", "ExpressJS", "MQTT"],
    metrics: "Prototype developed",
    image: intelliSwitchImg,
    url: "/"
  },
];