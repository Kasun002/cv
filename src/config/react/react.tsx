import photo from "../../assets/profile.jpg";
import education from "./education";
import employments from "./employments";
import projects from "./projects";

const resumeReact = {
  firstName: "Kasun",
  lastName: "Abaywardana",
  jobTitle: "Senior Software Developer, Front-End Engineer",
  city: "Colombo",
  postalCode: "10100",
  country: "Sri Lanka",
  phone: "+94770320574",
  email: "abaywardanakasun@gmail.com",
  dob: "05-07-1991",
  linkedin: {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kasun-lakmal-abaywardana/",
    name: "Kasun Abaywardana",
  },
  education: education,
  links: [
    {
      label: "GitHub",
      link: "https://github.com/Kasun002",
      name: "github.com/Kasun002",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/KasunLakmal16",
      name: "@KasunLakmal16",
    },
  ],
  technicalSkills: [
    "<strong>React, Angular 2+</strong>",
    "<strong>Java Script, Type Script</strong>",
    "Cordova, <strong>React Native</strong>",
    "<strong>JSON, Jquery, CSS, SCSS</strong>",
    "xcode, Android Studio, VS Code",
    "Java, <strong>Node JS</strong>, Kony",
    "MySQL, SQL Server",
    "<strong>Firebase</strong>, Google Cloud Platform",
    "<strong>JIRA, Confluence, Planing Poker</strong>",
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
  interests: ["Play badminton", "Traveling", "Cooking"],
  professionalSummary: [
    "Detail-oriented professional having 7 years of work experience in IT Industry. Have in-depth knowledge in front-end web design & development using (React, Angular 2+), Hybrid mobile app development (Ionic, Cordova, React Native) and some experience in BE development using Node JS, Java, Firebase & .NET. A dedicated, self-learning, motivated professional, capable of working independently and is also an efficient team player with very good leadership capabilities.",
  ],
  employmentHistory: employments,
  projectHistory: projects,
  photo: photo,
};

export default resumeReact;
