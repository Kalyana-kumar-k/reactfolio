const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "#",
  title: "REACTFOLIO",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Kalyana Kumar",
  role: "Front End | Web Developer",
  picture: "https://i.ibb.co/XffTnq92/IMG-1234.jpg",

  description:
    "I build responsive user-focused frontends with React, backed by solid full-stack experience in PHP and MySql.This end-to-end perspective helps me build smarter user interfaces that carefully optimized for data exchange and real-world performance. Adaptable, eager to learn new technologies, and driven to contribute effectively to high-quality web projects from day one.",
  resume:
    "https://drive.google.com/file/d/1PH2jZidgowhAeAYtR-zP6Nl2copxFbS_/view?usp=drive_link",
  social: {
    linkedin: "https://linkedin.com/in/kalyana-kumar-439501388",
    github: "https://github.com/kalyana-kumar-k",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project 1",
    description:
      " Built a full-stack web platform featuring secure user signup, session-based login validation, automated transaction billing and managed local development using XAMPP (Apache/MySQL).",
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    environment: ["XAMPP (Local development)", "VS  Code"],
    sourceCode: "https://github.com/Kalyana-kumar-k/fruit-festia",
    livePreview: "https://fruitfestia.infinityfreeapp.com/",
    image: `${import.meta.env.BASE_URL}ProjectsImg/fruitfestia.png`,
  },
  {
    name: "Project 2",
    description:
      " Developed a secure User Management System using PHP PDO to handle complete CRUD operations, efficient data pagination to optimize page load limits with robust MySQL database connectivity. ",
    stack: ["HTML5", "CSS3", "JavaScript", "PHP (PDO)", "MySQL"],
    environment: ["XAMPP (Local development)", "VS  Code"],
    sourceCode: "http://github.com/kalyana-kumar-k/usermanagement-php",
    livePreview: "https://usermanagementphp.infinityfreeapp.com/",
    image: `${import.meta.env.BASE_URL}ProjectsImg/usermanagementCRUD.png`,
  },
  {
    name: "Project 3",
    description:
      " Built an interactive e-commerce platform using React.js and Vite, implementing React Router for seamless multi-page navigation across product grids, details, and user dashboards with To-Do-List.",
    stack: ["React.js", "Vite", "JavaScript", "Redux Toolkit", "React Router"],
    sourceCode: "https://github.com/Kalyana-kumar-k/E-commerce-React",
    livePreview: "https://kalyana-kumar-k.github.io/E-commerce-React/",
    image: `${import.meta.env.BASE_URL}ProjectsImg/ECom-react1.png`,
  },
  {
    name: "Project 4",
    description:
      "Developed a responsive single-page portfolio using React, Vite, and React-Bootstrap, leveraging React Context API for global state management (dark/light theme switching) and a modular, component-based architecture.",
    stack: ["React.js", "Vite", "JavaScript", "React  bootstrap"],
    sourceCode: "https://github.com/Kalyana-kumar-k/ReactPortfolio",
    livePreview: "https://kalyana-kumar-k.github.io/ReactPortfolio/",
    image: `${import.meta.env.BASE_URL}ProjectsImg/portfolio.png`,
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML5  ",
  "CSS3",
  "Tailwindcss",
  "JavaScript",
  "React Js",
  "PHP",
  "MySql",
];

const tools = ["Vs code", "XAMPP", "Vite", "Redux", "Git", "GitHub"];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "kalyankutty1994@gmail.com",
  phone: "+919677529087",
};

export { header, about, projects, skills, tools, contact };
