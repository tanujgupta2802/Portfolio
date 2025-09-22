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
import pythonLogo from "./assets/tech_logo/pythonLogo.png";
import nextjsLogo from "./assets/tech_logo/NextJSLogo.svg";
import renderLogo from "./assets/tech_logo/renderLogo.jpg";
import vercelLogo from "./assets/tech_logo/verceLogo.png";
import codecLogo from "./assets/Company_logo/CodecTechLogo.jpg";
import promptifyPhoto from "./assets/project_logos/promptifyPhoto.png";
import chatMitraPhoto from "./assets/project_logos/chatMitraPhoto.png";
import movieMindPhoto from "./assets/project_logos/movieMindPhoto.png";
import vaultifyPhoto from "./assets/project_logos/vaultifyPhoto.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Next JS", logo: nextjsLogo },
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
      // { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      //   { name: 'SQL', logo: sqlLogo}
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Generative AI Tools",
    skills: [
      // { name: "C", logo: cLogo },
      { name: "Large Language Models" },
      //   { name: 'SQL', logo: sqlLogo}
      { name: "AI APIs (ClipDrop, Groq Cloud)" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Render", logo: renderLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: codecLogo,
    role: "MERN Stack Developer Intern",
    company: "Codec Technologies",
    date: "June 2025 - July 2025",
    desc: "I interned at Codec Technologies as a MERN Stack Developer, where I built responsive UIs with React.js, developed scalable RESTful APIs using Node.js/Express with JWT authentication, and worked with MongoDB. This experience gave me hands-on exposure to agile teamwork, version control, and deployment practices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: clgLogo,
    school: "ABES Institute of Technology, AKTU, Ghaziabad",
    date: "Nov 2022 - Aug 2026",
    grade: "7.61 SCGPA",
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
    degree: "CBSE (XII) - PCM",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Shambhu Dayal Global School, Ghaziabad",
    date: "April 2019 - May 2020",
    grade: "82.3%",
    desc: "I completed my Class 10th in 2020 from Shambhu Dayal Global School (CBSE Board), securing 82.3% in the board examinations. The curriculum included core subjects such as Science, Mathematics, Social Science, English, and Hindi, which helped me build a strong academic foundation during my school years.",
    degree: "CBSE (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Promptify - AI Prompt-to-Image Generator",
    description:
      "Promptify is a SaaS platform that converts text prompts into images within seconds using the ClipDrop Generative AI API. Built with React.js, Node.js, Express.js, MongoDB, it includes JWT authentication, a credit system, and Razorpay payments, completing 50+ transactions. The responsive UI (Tailwind CSS + Framer Motion) and deployment on Render + MongoDB Atlas ensure scalability. The goal was to explore AI monetization and develop a production-ready AI product.",
    image: promptifyPhoto,
    tags: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "ClipDrop API",
      "JWT Authentication",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github:
      "https://github.com/tanujgupta2802/Promptify-Text-to-Image-Converter-AI.git",
    webapp: "https://promptify-prompt-to-image-converter-ai.onrender.com",
  },
  {
    id: 1,
    title: "ChatMitra - AI Assistant Chatbot",
    description:
      "ChatMitra is a real-time AI chatbot built with Next.js, Node.js/Express, and Groq Cloud AI models, offering context-aware conversations with multi-device sync. It integrates the Tavily API for real-time data and features persistent chat history and authentication. Styled with Tailwind CSS and designed for scalability, the project aimed to build an AI assistant closer to modern GenAI systems while learning tool-augmented LLM integration.",
    image: chatMitraPhoto,
    tags: [
      "Next JS",
      "Node JS",
      "Express JS",
      "Groq Cloud API",
      "Tavily API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/tanujgupta2802/ChatBot-Assistant-ChatMitra.git",
    webapp: "https://chatbot-ai-assistant-chatmitra.onrender.com",
  },
  {
    id: 2,
    title: "MovieMind – AI Movie Recommendation Platform",
    description:
      "MovieMind is an AI-powered MERN app for personalized movie recommendations using content-based filtering and sentiment analysis. It integrates the TMDB API, web scraping, and JWT authentication, with a responsive Tailwind CSS UI. Deployed on Render + MongoDB Atlas, the project explored applying recommendation algorithms in a real-world entertainment domain.",
    image: movieMindPhoto,
    tags: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "TMDB API",
      "Tailwind CSS",
      "JWT Authentication",
    ],
    github:
      "https://github.com/tanujgupta2802/MovieMind-AI-Movie-recommendation.git",
    webapp: "https://movie-mind-ai-movie-recommendation.vercel.app/",
  },
  {
    id: 3,
    title: "Vaultify – A Web3 Wallet",
    description:
      "Vaultify was a learning project where I explored blockchain integration with frontend development. Built in React.js with Tailwind CSS, it supports Ethereum & Solana wallets using ethers.js and Solana Web3.js, with BIP39 seed phrase recovery for security. I also added HD wallet support for 100+ addresses and an in-app DApp browser (Framer Motion) for smoother interactions. This project gave me hands-on exposure to Web3 fundamentals and decentralized apps beyond my core AI + web focus.",
    image: vaultifyPhoto,
    tags: [
      "React JS",
      "Tailwind CSS",
      "ether.js",
      "Solana Web3.js",
      "BIP39",
      "Framer Motion",
    ],
    github: "https://github.com/tanujgupta2802/Vaultify-Web3Vaulet.git",
    webapp: "https://vaultify-web3-vaulet.vercel.app/",
  },
];
