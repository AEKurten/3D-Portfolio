import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  livex,
  tranformit,
  exceedit,
  exceedItDash,
  fairshare,
  Anime,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: backend,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Intern Software Developer",
    company_name: "TransformIT Dynamics (Pty) Ltd",
    icon: tranformit,
    iconBg: "#231F20",
    date: "May 2021 - Aug 2021",
    points: [
      "Acquired a deep understanding of the system, working extensively with Vue.js to improve my proficiency.",
      "Addressed user and customer support queries by investigating issues and identifying root causes, and then leveraging Vue.js to develop effective solutions.",
      "Collaborated closely with the Quality Assurance (QA) team to ensure code functionality and quality, with a specific focus on Vue.js components.",
    ],
  },
  {
    title: "Junior Full Stack Developer",
    company_name: "TransformIT Dynamics (Pty) Ltd",
    icon: tranformit,
    iconBg: "#231F20",
    date: "Aug 2021 - June 2022",
    points: [
      "Collaborated with the database and backend teams to ensure seamless operations between the front end, backend, and database components of the online learning platform.",
      "Conducted database queries and optimizations to maintain data integrity and system efficiency.",
      "Assisted with miscellaneous tasks, such as creating a script runner that monitored and sent email notifications in the event of script failures within the database, complete with error log generation.",
    ],
  },
  {
    title: "UX/UI Designer & Developer",
    company_name: "TransformIT Dynamics (Pty) Ltd",
    icon: tranformit,
    iconBg: "#231F20",
    date: "June 2022 - Oct 2022",
    points: [
      "Created visually compelling and user-friendly interfaces, including prototypes, to enhance the online learning platform's aesthetics and user experience.",
      "Collaborated with cross-functional teams to ensure the seamless integration of design concepts into the development process, resulting in cohesive and engaging user interfaces.",
    ],
  },
  {
    title: "UX/UI Designer & Developer",
    company_name: "Livex Software (Pty) Ltd",
    icon: livex,
    iconBg: "#fff",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Played a dual role as a UX/UI Designer and Developer, primarily focusing on designing visually appealing and user-friendly interfaces for various projects.",
      "Took a proactive approach to client engagement by conducting meetings to understand their design preferences and requirements, ensuring that the final designs aligned with their expectations and needs.",
      "Managed multiple projects simultaneously, demonstrating effective multitasking and time management skills.",
      "Translated design concepts into functional frontend components, bringing creations to life and ensuring their seamless integration into the final products.",
    ],
  },
  {
    title: "UX/UI Designer & Developer",
    company_name: "Exceed IT",
    icon: exceedit,
    iconBg: "#231F20",
    date: "Jan 2023 - Present",
    points: [
      "I lead the entire design process for our clients' products, starting from the initial concept and carrying it through to the creation of polished, user-friendly interfaces.",
      "Together with my business partner, I take charge of establishing and managing project workflows using Jira, ensuring that we have efficient project management and clear communication throughout.",
      "I actively engage with our clients by conducting meetings to gain a deep understanding of their requirements and preferences, allowing me to translate those insights into effective design and development strategies.",
      "I play a central role as the primary frontend developer, responsible for implementing and developing UI elements. ",
    ],
  },
];

const projects = [
  {
    name: "Exceed IT - Dashboard",
    description:
      "An all-in-one business admin dashboard, streamlining operations. Features a dedicated new developer training platform and content management for owners.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: exceedItDash,
    source_code_link: "https://github.com/AEKurten",
  },
  {
    name: "Job Search App",
    description:
      "A specialized IT job search app, tailored for tech job seekers. Find the ideal IT job with ease, simplifying your job search.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "expo-go",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AEKurten",
  },
  {
    name: "Fair Share Bill Splitter",
    description:
      "Effortlessly divide bills with friends using this handy app. It simplifies expense sharing during group outings, ensuring a fair split every time.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "expo-go",
        color: "pink-text-gradient",
      },
    ],
    image: fairshare,
    source_code_link: "https://github.com/AEKurten",
  },
  {
    name: "Anime Vault",
    description:
      "Building a Next 14 Server Side App With Server Actions, Infinite Scroll & Framer Motion.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: Anime,
    source_code_link: "https://github.com/AEKurten",
  },
];

export { services, technologies, experiences, projects };
