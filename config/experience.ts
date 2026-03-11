import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "gapplus",
    position: "Frontend Web Developer",
    company: "GAPPLUS",
    location: "Remote",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Developed dynamic registration and subscription workflows using React and Typescript.",
      "Integrated AI-assisted form validation to enhance user onboarding.",
      "Collaborated with backend team to design scalable APIs for user management.",
      "Optimized front-end performance, reducing load time by 25%.",
      "Worked with designers to deliver a consistent, accessible UI across devices.",
      "Redux for state management and React Query for efficient data fetching and caching.",
    ],
    achievements: [
      "Launched a fully responsive registration platform that increased user onboarding speed by 25%.",
      "Implemented reusable React components, reducing development time for new modules by 30%.",
      "Optimized front-end performance, improving load time by 40% for large forms.",
    ],
    skills: ["React", "Typescript", "Tailwind CSS", "Redux", "Zustand", "API Integration", "Responsive Design"],
    companyUrl: "#",
    logo: "/experience/gapplus/image.png",
  },
  {
    id: "educat",
    position: "Frontend Web Developer",
    company: "Educat",
    location: "Remote",
    startDate: new Date("2025-07-01"),
    endDate: "Present",
    description: [
      "Built interactive dashboards for student progress tracking and course management.",
      "Implemented real-time notifications and chat features using WebSockets.",
      "Worked with designers to deliver a consistent, accessible UI across devices.",
    ],
    achievements: [
      "Created an engaging, responsive dashboard that improved student engagement metrics by 35%.",
      "Implemented modular React components for rapid feature deployment.",
      "Ensured accessibility compliance for all frontend features.",
    ],
    skills: ["React", "Typescript", "Tailwind CSS", "WebSockets", "Accessibility"],
    companyUrl: "#",
    logo: "/experience/educat/image.png",
  },
  
  {
    id: "codeweb",
    position: "Frontend Web and Mobile Developer, Tutor",
    company: "Codeweb",
    location: "Hybrid",
    startDate: new Date("2023-07-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Mentored junior developers and conducted code reviews to maintain high code quality standards.",
      "Collaborated with designers to deliver a consistent, accessible UI across devices.",
      "Developed a web portal for cooperative societies to manage contributions and members.",
      "Mobile app development using React Native.",
      "Implemented secure authentication and role-based dashboards.",
      "Ensured mobile-first responsive design using Tailwind CSS.",
      "Collaborated with backend team to optimize data fetching and rendering.",
      "Worked with designers to deliver a consistent, accessible UI across devices.",
      "Redux for state management and React Query for efficient data fetching and caching.",

    ],
    achievements: [
      "Delivered a scalable portal handling hundreds of members per society.",
      "Implemented reusable data tables and forms, reducing development time for future modules.",
      "Enhanced front-end performance, improving page load speed by 40%.",
    ],
    skills: ["React", "Typescript", "Tailwind CSS", "Role-based Access Control", "Responsive Design"],
    companyUrl: "https://codeweb.com.ng",
    logo: "/experience/codeweb/codewebLogo.jpg",
  },

];