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
  education: education,
  links: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/kasun-lakmal-abaywardana/",
    },
    {
      label: "GitHub",
      link: "https://github.com/Kasun002",
    },
  ],
  technicalSkills: [
    "Angular 2+/React",
    "Java Script/Type Script",
    "Cordova/Ionic/React Native",
    "JSON/Jquery/CSS/SCSS",
    "xcode/Android Studio/VS Code",
    "Java/Node JS/.NET/Kony",
    "MySQL/SQL Server",
    "Firebase/ Google Cloud Platform",
    "JIRA/Confluence/Planing Poker",
  ],
  professionalSkills: [
    "Analytical Thinking & Problem Solving",
    "Collaboration & Teamwork",
    "Leadership",
  ],
  languages: ["English (Read & Write Fluently)", "Sinhalese"],
  professionalSummary: [
    "Detail-oriented professional with exceptional interpersonal skills, team working abilities with 7 years of work experience in Software Engineering field. As well as motivated individual with in-depth knowledge of front-end web design & development using (React, Angular 2+), Hybrid mobile app design & development (Ionic, Cordova, React Native) and some experience in BE development using Node JS, Java Firebase & .net.",
  ],
  employmentHistory: employments,
  projectHistory: projects,
  photo: photo,
};

export default resumeReact;
