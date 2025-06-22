//tech_stack logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
// import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
// import mcLogo from "./assets/tech_logo/mc.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
// import profile from "./assets/profile_logo/profile.png";
import wyspireLogo from "./assets/Company_logo/wyspire.jpeg";
import tgfLogo from "./assets/project_logos/TGF.png";
import fashionStoreLogo from "./assets/project_logos/FashionStore.png";
import groceryLogo from "./assets/project_logos/GroceryApp.png";
import clgLogo from "./assets/education_logos/collegeLogo.png";
import schoolLogo from "./assets/education_logos/schlLogo.jpeg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      //   { name: 'SQL', logo: sqlLogo}
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: wyspireLogo,
    role: "Fullstack Developer Intern",
    company: "Wyspire",
    date: "Septemner 2024 - November 2024",
    desc: "Completed a Full Stack Development internship at Wyspire, where I worked on both front-end and back-end technologies. Built responsive user interfaces using HTML, CSS, JavaScript, and React.js, and developed RESTful APIs and database operations using Node.js and MongoDB for smooth client-server interaction.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: clgLogo,
    school: "ABES Institute of Technology, AKTU, Ghaziabad",
    date: "Nov 2022 - Aug 2026",
    grade: "7.53 CGPA",
    desc: "I am currently pursuing a Bachelor of Technology in Computer Science with a specialization in Data Science from ABES Institute of Technology, affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU). I started the program in 2022 and expect to graduate in 2026. While my academic curriculum is focused on Data Science, I have independently developed a strong interest in full stack web development and continue to build real-world projects to strengthen my practical skills in this area.",
    degree: "Bachelor of Technology in Data Science",
  },
  {
    id: 1,
    img: schoolLogo,
    school: "Shambhu Dayal Global School, Ghaziabad",
    date: "April 2021 - May 2022",
    grade: "75%",
    desc: "I completed my Class 12th in 2022 from Shambhu Dayal Global School(CBSE Board) with a focus on the Science stream (Physics, Chemistry, and Mathematics). I secured 75% in my board examinations. During this time, I developed a strong interest in technology and problem-solving, which later led me to pursue a degree in Computer Science",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Shambhu Dayal Global School, Ghaziabad",
    date: "April 2019 - May 2020",
    grade: "82.3%",
    desc: "I completed my Class 10th in 2020 from Shambhu Dayal Global School (CBSE Board), securing 82.3% in the board examinations. The curriculum included core subjects such as Science, Mathematics, Social Science, English, and Hindi, which helped me build a strong academic foundation during my school years.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "TGF Movies: Netflix-Inspired U",
    description:
      "Designed and developed “TGF Movies”, a fully responsive front-end UI inspired by Netflix’s landing page, using HTML, CSS, and Bootstrap 5. The project was rebranded and customized as a dummy interface named TGF Movies, built purely for learning front-end design principles, layout structuring, and responsive styling practice.",
    image: tgfLogo,
    tags: ["HTML", "CSS", "Bootstrap 5"],
    github: "https://github.com/tanujgupta2802/TGF-movies-UI.git",
    webapp: "https://tgf-movies-ui.netlify.app/",
  },
  {
    id: 1,
    title: "FashionStore: Online Store UI ",
    description:
      "Developed a fully responsive e-commerce web interface using React, Vite, and Redux Toolkit, integrated with live product APIs and full cart functionality. Focused on clean, modern UI using Tailwind CSS and deployed the project on Vercel to ensure smooth routing, optimized performance, and mobile-first responsiveness.",
    image: fashionStoreLogo,
    tags: ["React JS", "Redux Toolkit", "Tailwind CSS", "API", "JavaScript"],
    github: "https://github.com/tanujgupta2802/FashionStore.git",
    webapp: "https://fashion-store-blush-theta.vercel.app/",
  },
  {
    id: 2,
    title: "Grocery App: MERN Web App",
    description:
      "Built a full-stack grocery web application using React, Node.js, Express, and MongoDB with secure user authentication, cart functionality, and a fully responsive UI. Enhanced and extended an existing project structure by refining both frontend and backend components to deepen my practical skills with the MERN stack.",
    image: groceryLogo,
    tags: ["React JS", "Tailwind CSS", "Node JS", "Express", "MongoDB"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
];
