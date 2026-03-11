import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "unistay",
    companyName: "Unistay",
    type: "Personal",
    category: ["Full Stack", "Backend", "Frontend", "Real Estate", "Web Dev"],
    shortDescription:
      "A comprehensive housing rental web application with user authentication, property listings, booking management, and a responsive design for seamless user experience across devices.",
    techStack: [
      "React",
      "Node.js",
      "express.js",
      "Typescript",
      "MySQL",
      "Tailwind CSS",
    ],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/unistay-img.png",
    pagesInfoArr: [
      {
        title: "Unistay",
        description:
          "Unistay is a production-ready Housing Rental Web Application. It features user authentication, property listings, booking management, and a responsive design for seamless user experience across devices.",
        imgArr: ["/unistay-img.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Unistay is a comprehensive housing rental web application that I developed as a personal project. The platform allows users to browse property listings, manage bookings, and provides a seamless experience across devices.",
        "The application is built with React for the frontend, Node.js and express.js for the backend, and MySQL for data storage. Tailwind CSS was used for styling and responsive design.",
      ],
      bullets: [
        "Developed a full-stack housing rental web application with user authentication and property listing features.",
        "Utilized React for the frontend, Node.js and express.js for the backend, and MySQL for data storage.",
        "Implemented responsive design for a seamless user experience across devices.",
      ],
    },
  },
  {
    id: "medlink",
    companyName: "MedLink",
    type: "Personal",
    category: ["Frontend", "Web Dev", "Healthcare", "UI/UX"],
    shortDescription:
      "MedLink is a healthcare appointment booking platform that connects patients with doctors. It features a user-friendly interface for browsing doctors, booking appointments, and managing healthcare needs.",
    websiteLink: "https://medlink-health.netlify.app/",
    githubLink: "https://github.com/fiyingithub/MedLink",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/medlink-img.png",
    pagesInfoArr: [
      {
        title: "MedLink Landing Page",
        description:
          "Modern landing page showcasing the template features, tech stack, and pricing options.",
        imgArr: ["/medlink-img.png"],
      },
      {
        title: "Authentication System",
        description:
          "Complete authentication system with Supabase, protected routes, and role-based access control.",
        imgArr: ["/medlink-login-img.png", "/image.png"],
      },
      {
        title: "Dashboard & Components",
        description:
          "Beautiful UI components with Magic UI, Radix primitives, and comprehensive dashboard templates.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "MedLink is a healthcare appointment booking platform that I developed as a personal project. The platform connects patients with doctors, allowing users to browse doctor profiles, book appointments, and manage their healthcare needs.",
        "The application is built with React for the frontend, Supabase for authentication and data management, and Tailwind CSS for styling and responsive design.",
      ],
      bullets: [
        "Created a healthcare appointment booking platform connecting patients with doctors.",
        "Utilized React for the frontend, Supabase for authentication and data management, and Tailwind CSS for styling and responsive design.",
        "Implemented responsive design for a seamless user experience across devices.",
        "Provided a user-friendly interface for browsing doctors, booking appointments, and managing healthcare needs.",
      ],
    },
  },
  {
    id: "trade-shield",
    companyName: "Trade Shield",
    type: "Personal",
    category: ["Frontend", "Web Dev", "E-commerce"],
    shortDescription:
      "Trade Shield is a secure e-commerce platform featuring an escrow-based payment system that protects buyers and sellers during transactions.",
    websiteLink: "",
    githubLink: "https://github.com/Fiyingithub/TRADE-SHIELD-FRONTEND_WEB",
    techStack: ["React", "Typescript", "Tailwind CSS"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-02-01"),
    companyLogoImg: "/projects/TradeShield/tradeShieldLogo.png",
    pagesInfoArr: [
      {
        title: "Marketplace Landing Page",
        description:
          "Modern marketplace interface showcasing featured products, categories, and seller highlights.",
        imgArr: ["/projects/TradeShield/Homepage.png"],
      },
      {
        title: "Dashboard & Product Management",
        description:
          "Beautiful UI components with Magic UI, Radix primitives, and comprehensive dashboard templates.",
        imgArr: ["/projects/TradeShield/SellerDashboard.png"],
      },
      {
        title: "Authentication System",
        description:
          "Complete authentication system with Supabase, protected routes, and role-based access control.",
        imgArr: ["/projects/TradeShield/SellerSignIn.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Trade Shield is an e-commerce platform I developed to enhance trust between buyers and sellers through an escrow-based payment system.",
        "The platform allows users to list products, browse items, and complete secure transactions while funds remain protected until both parties confirm completion.",
      ],
      bullets: [
        "Developed an escrow-enabled e-commerce platform to protect buyer-seller transactions.",
        "Built a responsive product catalog and secure checkout system.",
        "Implemented reusable UI components for product listings and order management.",
        "Designed modern responsive layouts using Tailwind CSS.",
      ],
    },
  },
  {
    id: "pathlearn",
    companyName: "PathLearn",
    type: "Personal",
    category: ["Frontend", "Web Dev", "EdTech"],
    shortDescription:
      "PathLearn is an educational learning platform that helps users discover learning paths, track progress, and access structured educational resources.",
    websiteLink: "https://pathlearn-web.netlify.app",
    githubLink: "https://github.com/Fiyingithub/PATHLEARN-FRONTEND",
    techStack: ["React", "Typescript", "Tailwind CSS"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-01"),
    companyLogoImg: "/projects/PathLearn/image.png",
    pagesInfoArr: [
      {
        title: "Learning Paths Dashboard",
        description:
          "Interactive dashboard displaying curated learning paths across various subjects and technologies.",
        imgArr: ["/pathlearn-dashboard.png"],
      },
      {
        title: "Course & Lesson Pages",
        description:
          "Structured course interface where users can explore lessons and track their progress.",
        imgArr: ["/pathlearn-courses.png"],
      },
      {
        title: "Progress Tracking",
        description:
          "Users can monitor their progress across learning paths and completed lessons.",
        imgArr: ["/pathlearn-progress.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "PathLearn is a learning platform designed to guide users through structured learning paths across different subjects and technologies.",
        "The application focuses on simplifying the learning process by organizing educational resources into clear, trackable paths.",
      ],
      bullets: [
        "Developed an EdTech platform for structured learning paths and progress tracking.",
        "Built reusable React components for courses, lessons, and dashboards.",
        "Implemented responsive UI for seamless learning across devices.",
        "Designed intuitive user interfaces using Tailwind CSS for improved user experience.",
      ],
    },
  },
  {
    id: "movie-app",
    companyName: "Movie App",
    type: "Personal",
    category: ["Mobile Dev", "UI/UX"],
    shortDescription:
      "A mobile movie discovery application that allows users to explore trending movies, search titles, and view detailed movie information.",
    websiteLink: "",
    githubLink: "https://github.com/Fiyingithub/Movie-App",
    techStack: ["React Native", "Typescript", "Tailwind CSS"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-07-01"),
    companyLogoImg: "/projects/MovieApp/image.png",
    pagesInfoArr: [
      {
        title: "Home Screen",
        description:
          "Displays trending and popular movies with visually engaging movie cards.",
        imgArr: ["/projects/MovieApp/MAIN___V1.png"],
      },
      {
        title: "Movie Details Page",
        description:
          "Shows detailed information about movies including ratings, description, and cast.",
        imgArr: ["/projects/MovieApp/Details-Screen.png"],
      },
      {
        title: "Search Feature",
        description:
          "Users can search for movies by title and quickly access detailed information.",
        imgArr: ["/projects/MovieApp/Search.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Movie App is a mobile application that enables users to discover and explore movies in a simple and engaging interface.",
        "It integrates a movie database API to fetch trending movies, detailed information, and search results.",
      ],
      bullets: [
        "Built a movie discovery mobile app using React Native.",
        "Integrated movie API for real-time movie data.",
        "Designed responsive mobile-first UI components.",
        "Implemented movie search and detailed movie pages.",
      ],
    },
  },
  {
    id: "trackwise",
    companyName: "TrackWise",
    type: "Personal",
    category: ["Mobile Dev", "UI/UX"],
    shortDescription:
      "TrackWise is a productivity mobile app designed to help users track tasks, manage goals, and monitor daily progress.",
    websiteLink: "#",
    githubLink: "https://github.com/Fiyingithub/TRACKWISE",
    techStack: ["React Native", "Typescript", "Tailwind CSS"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-04-01"),
    companyLogoImg: "/projects/TrackWise/TrackWise-Logo.png",
    pagesInfoArr: [
      
      {
        title: "Task Dashboard",
        description:
          "Central dashboard showing tasks, progress tracking, and daily productivity stats.",
        imgArr: ["/projects/TrackWise/HomePage.png"],
      },
      {
        title: "Authentication System",
        description:
          "Sign-in and sign-up screens for user authentication.",
        imgArr: ["/projects/TrackWise/OnboardingScreen8.png", "/projects/TrackWise/OnboardingScreen9.png", "/projects/TrackWise/OnboardingScreen10.png", "/projects/TrackWise/Login.png"],
      },
      {
        title: "Landing Page",
        description:
          "Introduction to the TrackWise app with key features and benefits.",
        imgArr: ["/projects/TrackWise/LandingPage.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "TrackWise is a productivity mobile app designed to help users stay organized and track daily tasks effectively.",
        "The application focuses on simple task management combined with visual progress tracking.",
      ],
      bullets: [
        "Developed a task management mobile application using React Native.",
        "Implemented task creation, editing, and completion tracking.",
        "Designed intuitive user interfaces for productivity management.",
        "Built reusable mobile UI components for scalable feature development.",
      ],
    },
  },
  // {
  //   id: "lasustech-cooperative",
  //   companyName: "Lasustech Cooperative",
  //   type: "Professional",
  //   category: ["Frontend", "Web Dev", "Fintech"],
  //   shortDescription:
  //     "A cooperative management platform designed to help members manage savings, contributions, and financial activities within the cooperative.",
  //   websiteLink: "#",
  //   githubLink: "https://github.com/solomonojox/LasustechCooperativeReact",
  //   techStack: ["React", "Typescript", "Tailwind CSS"],
  //   startDate: new Date("2024-01-01"),
  //   endDate: new Date("2024-05-01"),
  //   companyLogoImg: "/projects/cooperative/logo.jpg",
  //   pagesInfoArr: [
  //     {
  //       title: "Cooperative Dashboard",
  //       description:
  //         "Dashboard displaying member contributions, balances, and financial summaries.",
  //       imgArr: ["/coop-dashboard.png"],
  //     },
  //     {
  //       title: "Contribution Management",
  //       description:
  //         "Members can track their monthly contributions and payment history.",
  //       imgArr: ["/coop-contributions.png"],
  //     },
  //     {
  //       title: "Member Management",
  //       description:
  //         "Admin interface for managing cooperative members and records.",
  //       imgArr: ["/coop-members.png"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "The Lasustech Cooperative platform was built to simplify the management of cooperative societies.",
  //       "It allows members to monitor their savings, contributions, and financial records through an easy-to-use dashboard.",
  //     ],
  //     bullets: [
  //       "Developed a cooperative management system for tracking member contributions.",
  //       "Built responsive dashboards for financial monitoring.",
  //       "Implemented reusable React components for tables and forms.",
  //       "Designed modern UI layouts using Tailwind CSS.",
  //     ],
  //   },
  // },
];

export const featuredProjects = Projects.slice(0, 3);

// {
//   id: "cirql-dashboard",
//   companyName: "Cirql Dashboard",
//   type: "Personal",
//   category: ["Web Dev", "Frontend", "UI/UX"],
//   shortDescription:
//     "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
//   websiteLink: "https://cirql-ui.namanbarkiya.xyz/",
//   techStack: ["React", "Tailwind CSS", "Google Auth"],
//   startDate: new Date("2023-01-01"),
//   endDate: new Date("2023-02-15"),
//   companyLogoImg: "/projects/cirql/logo.png",
//   pagesInfoArr: [
//     {
//       title: "Dashboard Home",
//       description:
//         "Main dashboard view with analytics widgets and data visualization",
//       imgArr: ["/projects/cirql/web_1.png", "/projects/cirql/web_2.png"],
//     },
//     {
//       title: "Profile Page",
//       description:
//         "User profile management interface with customization options",
//       imgArr: ["/projects/cirql/web_3.png", "/projects/cirql/web_4.png"],
//     },
//   ],
//   descriptionDetails: {
//     paragraphs: [
//       "For the 'Cirql Dashboard' personal, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
//       "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
//       "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
//       "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
//       "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
//     ],
//     bullets: [
//       "Created a user-friendly dashboard project using React and Tailwind CSS.",
//       "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
//       "Designed UI components to provide an intuitive and visually pleasing experience.",
//       "Focused on implementing a smooth routing system to simulate real-world use cases.",
//       "Enhanced my skills in UI design, routing, and component architecture.",
//     ],
//   },
// },
// {
//   id: "inscript-hindi-typing",
//   companyName: "Inscript Hindi Typing",
//   type: "Personal",
//   category: ["Web Dev", "UI/UX"],
//   shortDescription:
//     "Developed a user-friendly website for Inscript Hindi typing, addressing the need for a simple tool for Hindi writers to convey data digitally.",
//   websiteLink: "https://hindityping.namanbarkiya.xyz",
//   githubLink: "https://github.com/namanbarkiya/inscript-hindi-keyboard",
//   techStack: ["HTML 5", "CSS 3", "Javascript"],
//   startDate: new Date("2022-05-01"),
//   endDate: new Date("2022-06-15"),
//   companyLogoImg: "/projects/hindi-keyboard/logo.png",
//   pagesInfoArr: [
//     {
//       title: "Typing Interface",
//       description: "Minimal and user-friendly Inscript Hindi typing area",
//       imgArr: ["/projects/hindi-keyboard/web_1.png"],
//     },
//     {
//       title: "Copy and Download the file",
//       description:
//         "Export functionality allowing users to copy text or download as a document file",
//       imgArr: [
//         "/projects/hindi-keyboard/web_2.png",
//         "/projects/hindi-keyboard/web_3.png",
//       ],
//     },
//   ],
//   descriptionDetails: {
//     paragraphs: [
//       "The 'Inscript Hindi Typing Website' project emerged from the need to provide a simple and accessible tool for Hindi writers, especially those in digital news and media, who wished to convey data in Hindi.",
//       "Recognizing the challenges posed by complex software in the market, I set out to create a minimalistic typing area that catered to the needs of a vast community of Hindi typists in India.",
//       "The project was designed to address the specific requirements of users familiar with the Inscript keyboard layout, mapping English and Hindi alphabets for seamless typing. The intuitive interface allowed users to effortlessly switch between languages, streamlining the process of content creation.",
//       "Leveraging HTML and CSS, I crafted the website's UI to ensure a user-friendly experience. Additionally, Local Storage was utilized to enable users to save and retrieve their work, enhancing convenience and productivity.",
//       "The website's focus on user experience and simplicity proved to be a key factor in its popularity among Hindi writers. By offering a tool that reduced the barriers to entry, I contributed to the digital empowerment of Hindi typists who previously faced challenges in conveying their message effectively.",
//       "This project marked one of my initial forays into web development and highlighted the transformative potential of technology in addressing real-world challenges.",
//     ],
//     bullets: [
//       "Developed a user-friendly website for Inscript Hindi typing.",
//       "Catered to the needs of Hindi writers in digital news and media.",
//       "Created a minimalistic and intuitive typing interface for the Inscript keyboard layout.",
//       "Mapped English and Hindi alphabets to provide a seamless typing experience.",
//       "Utilized HTML and CSS to design a user-friendly UI.",
//       "Implemented Local Storage to enable users to save and retrieve their work.",
//       "Contributed to the digital empowerment of Hindi typists by offering a simple tool.",
//       "Marked one of my first web development projects, showcasing technology's potential for addressing real-world needs.",
//     ],
//   },
// },
