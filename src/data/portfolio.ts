import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiGnubash,
  SiPython,
  SiGit,
  SiReact,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { FiGitBranch, FiZap, FiActivity, FiCpu, FiMessageCircle } from "react-icons/fi";

export type NavLink = {
  id: string;
  label: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export type ProjectItem = {
  title: string;
  stack: string;
  period: string;
  points: string[];
  demo?: string;
  github?: string;
};

export type SkillItem = {
  name: string;
  Icon: IconType;
  color: string;
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export type EducationItem = {
  degree: string;
  specialization?: string;
  institution: string;
  location: string;
  period: string;
  score: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  href?: string;
};

export const profile = {
  name: "Akshat",
  role: "DevOps Engineer",
  tagline: "CI/CD • AWS • Automation • Linux",
  email: "akshat26april@gmail.com",
  phone: "+91 8894604005",
  location: "Bengaluru, India",
  github: "https://github.com/akshat26akd",
  linkedin: "https://www.linkedin.com/in/akshat26akd/",
  resume: "/resume.pdf",
  intro:
    "DevOps Engineer with 3+ years of experience automating CI/CD pipelines and managing on-premise and AWS cloud infrastructure. I turn manual, error-prone processes into scalable, reliable automation.",
  summary:
    "DevOps Engineer with 3+ years of experience in CI/CD, Jenkins, and AWS cloud infrastructure. Skilled in automating build and deployment pipelines, managing on-premise and cloud environments, and improving system reliability and performance through scalable, repeatable solutions. Proficient in Python and shell scripting, containerization, and infrastructure monitoring.",
};

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const experiences: ExperienceItem[] = [
  {
    role: "DevOps Engineer",
    company: "Aumovio India Pvt. Ltd. (Formerly Continental)",
    location: "Bengaluru, India",
    period: "Jul 2023 – Present",
    points: [
      "Designed and maintained CI/CD pipelines using Jenkins, reducing deployment time by 35% and improving release frequency.",
      "Managed and optimized 25+ on-premise Jenkins nodes, improving build reliability and reducing failures.",
      "Automated infrastructure provisioning and configuration using shell scripting and Python, decreasing manual effort by 40% and minimizing human errors.",
      "Deployed and managed applications on AWS (EC2, S3, IAM) as part of a hybrid infrastructure setup, improving system performance by 40%.",
      "Collaborated with development teams to implement DevOps best practices, reducing incident resolution time by 25% and enhancing system stability.",
    ],
  },
  {
    role: "Application Development Intern",
    company: "CareX Pvt. Ltd.",
    location: "Noida, India",
    period: "May 2022 – Jul 2022",
    points: [
      "Developed a working prototype of the product for both users and service providers.",
      "Built the frontend of the app using HTML5, CSS3 and React Native.",
      "Created wireframes of the product to guide future development.",
    ],
  },
  {
    role: "Multimedia Intern",
    company: "CollegeGuru",
    location: "Solan, India",
    period: "Nov 2019 – Mar 2020",
    points: [
      "Restructured the UI of the app and website, increasing user retention by 70%.",
      "Handled all multimedia-related work for the startup under the H.P. Govt. Startup Scheme.",
      "Elevated to the leadership role of multimedia operations.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Intelligent Infra Health Monitor",
    stack: "Python, Flask, SQLite, Jenkins REST API, AI/LLM",
    period: "Feb 2026 – Mar 2026",
    points: [
      "Built a centralized Flask-based monitoring and automation dashboard for on-prem Jenkins infrastructure, delivering real-time visibility into node health, build activity, and agent performance.",
      "Reduced manual monitoring and failure-triage effort by 50%, improving team productivity and incident response time.",
      "Infrastructure monitoring: tracked disk, memory, and workspace usage, agent availability, executor utilization, and build-queue status with configurable warning/critical thresholds.",
      "AI-powered failure analysis: integrated an LLM assistant that auto-detects build failures, performs root-cause analysis, classifies issues as infrastructure vs. code defects, and offers an interactive chatbot with SSE streaming.",
      "Build intelligence: monitored nightly builds, failure streaks, and per-node build history, with automatic agent attribution for parallel test executions across distributed nodes.",
      "Automation & alerting: added selectable Teams/email notifications, role-based auth, audit logging, and SQLite-backed caching with 7-day historical trend charts.",
    ],
  },
  {
    title: "Automated Requirement Analysis Tool",
    stack: "Python, NLP, Named Entity Recognition",
    period: "Feb 2022 – Mar 2022",
    points: [
      "Developed an automated requirement analysis tool using NLP techniques such as Named Entity Recognition (NER).",
      "Streamlined requirement extraction, reducing manual effort by 90% and improving consistency across engineering documents.",
      "Designed modular, reusable pipelines for processing large volumes of unstructured data efficiently.",
    ],
  },
  {
    title: "Dynamic Weather App",
    stack: "HTML5, CSS3, React, API Integration",
    period: "2023",
    points: [
      "Developed a responsive weather application using React, integrated with the OpenWeatherMap API for real-time data.",
      "Implemented geolocation-based services and dynamic search with robust error handling.",
      "Optimized API calls and frontend performance for a smooth experience across devices.",
    ],
    demo: "https://weather-app-akshat.netlify.app/",
    github: "https://github.com/akshat26akd/Weather-App",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "CI/CD Pipelines", Icon: FiGitBranch, color: "#22D3EE" },
      { name: "Automation", Icon: FiZap, color: "#A855F7" },
    ],
  },
  {
    category: "Systems & Tools",
    items: [
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Bash", Icon: SiGnubash, color: "#4EAA25" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "SQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Monitoring & Logging", Icon: FiActivity, color: "#60A5FA" },
    ],
  },
  {
    category: "Programming & Web",
    items: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "Machine Learning", Icon: FiCpu, color: "#F472B6" },
      { name: "NLP", Icon: FiMessageCircle, color: "#34D399" },
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    specialization: "Proficiency in Data Science",
    institution: "Jaypee University of Information Technology",
    location: "Solan, HP, India",
    period: "Jul 2019 – May 2023",
    score: "CGPA 7.98 / 10",
  },
  {
    degree: "Senior Secondary (XII), Non-Medical",
    institution: "St. Xavier's Residential School",
    location: "Kot, HP, India",
    period: "Apr 2017 – May 2019",
    score: "84.2%",
  },
  {
    degree: "Secondary (X), Science",
    institution: "Govt. Sr. Sec. Model School",
    location: "Sundernagar, HP, India",
    period: "Apr 2016 – May 2017",
    score: "CGPA 9.8 / 10",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Mar 2025",
    href: "/certificates/AWS_Cloud_Practitioner_Essentials.pdf",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera · Stanford Online · DeepLearning.AI",
    date: "Mar 2023",
    href: "https://www.coursera.org/verify/specialization/FE3AQCDBXKJV",
  },
  {
    title: "Advanced React",
    issuer: "Coursera · Meta",
    date: "Mar 2023",
    href: "https://www.coursera.org/verify/XB52CCLDC6YW",
  },
  {
    title: "Getting Started with Python",
    issuer: "Coursera · University of Michigan",
    date: "Feb 2023",
    href: "https://www.coursera.org/verify/JX93TW87ZT62",
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Coursera · Johns Hopkins University",
    date: "Feb 2023",
    href: "https://www.coursera.org/verify/M9DNKSBPFGXH",
  },
];
