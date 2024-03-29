import photo from "../../assets/profile.jpg";
import education from "./education";
import employments from "./employments";
import projects from "./projects";

const resumeReact = {
  firstName: "Kasun",
  lastName: "Abaywardana",
  jobTitle: "Senior Software Engineer",
  city: "",
  postalCode: "",
  country: "Singapore",
  phone: "+6581503134",
  email: "abaywardanakasun@gmail.com",
  dob: "05-07-1991",
  linkedin: {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kasun-lakmal-abaywardana/",
    name: "kasun-lakmal-abaywardana",
  },
  education: education,
  links: [
    {
      label: "GitHub",
      link: "https://github.com/Kasun002",
      name: "github.com/Kasun002",
    },
    {
      label: "Medium",
      link: "https://medium.com/@abaywardanakasun",
      name: "@abaywardanakasun",
    },
  ],
  technicalSkills: [
    "<strong>React JS, Angular 2+</strong>",
    "<strong>Node JS (Express)</strong>, Nest JS, Kony, REST API",
    "<strong>Java Script, Type Script</strong>",
    "<strong>JSON, Jquery, CSS, SCSS</strong>",
    "<strong>AWS Lambda</strong>, API Gateway,",
    "<strong>JIRA, Confluence, Planing Poker</strong>",
    "<strong>Agile, Scrum</strong>",
    "mongodb, Firebase realtime DB, AWS S3, Redis",
    "Cordova, Ionic, React Native",
    "Bamboo CI/CD, Bitbucket, Azure devops",
    "Unit testing & e2e testing (jest/react testing-library)",
    "VS Code, Xcode, Android Studio",
  ],
  professionalSkills: [
    "Analytical Thinking & Problem Solving",
    "Collaboration & Teamwork",
    "Leadership",
  ],
  languages: ["English (Read & Write Fluently)", "Sinhalese"],
  referees: [
    `Mr Jeewaka Iroshan,</br>Senior Architect (Axiata Digital Labs),</br>jeewaka@axiata.lk,</br>+94773687753`,
    `Dr. S.S.P. Mathara Arachchi,</br>Senior Lecturer (University of Colombo),</br>ssp@ucsc.cmb.ac.lk,</br>+94718328650`,
  ],
  interests: ["Playing badminton", "Traveling", "Cooking"],
  professionalSummary: [
    "Detail-oriented professional having 7 years of work experience in the IT Industry. Have in-depth knowledge in modern web design & development Frontend using React JS & Angular 2+, Backend development using Node JS with AWS Lambda, Firebase & MongoDB, and Hybrid mobile app development (Ionic, Cordova, React Native). A dedicated, self-learning, motivated professional, capable of working independently and an efficient team player with excellent leadership capabilities.",
  ],
  employmentHistory: employments,
  projectHistory: projects,
  photo: photo,
};

export default resumeReact;
