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
    tailwind,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
    crmgif,
    facialrecoggif,
    hooy,
    freelancer, 
    campuslands,
    thisdev,
    java,
    aws,
    boot,
    python,
    mysql,
    cmr,
    recognition,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React & React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Manager",
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
      name: "python",
      icon: python,
    },
    {
      name: "mysql",
      icon: mysql,
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
      name: "Tailwind CSS",
      icon: tailwind,
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

    {
      name: "java",
      icon: java,
    },
    {
      name: "Aws",
      icon: aws,
    },
    {
      name: "Spring",
      icon: boot,
    },
  ];
  
  const experiences = [
    {
      title: "Content and user experience management",
      company_name: "HOOY APP",
      icon: hooy,
      iconBg: "#383E56",
      date: "may 2024",
      points: [
        "Image management and integration.",
        "User management, product creation.",
      ],
    },
    {
      title: "Back-end developer",
      company_name: "This.Dev",
      icon: thisdev,
      iconBg: "#E6DEDD",
      date: "Dec 2023 -sep 2024",
      points: [
        "I was part of a collaborative initiative with four programmers, where the main objective was to develop projects with a significant business impact.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "As a backend developer, I focused on the maintenance and creation of databases, connection with microservices, deploying the projects effectively and efficiently.",
        "Teamwork was key to the success of these projects, allowing for constant progress and ensuring that each member contributed their strengths.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Campuslands",
      icon: campuslands,
      iconBg: "#383E56",
      date: "Dec 2023 - Sep 2024",
      points: [
        "Create and manage complete web applications with Frontend technologies such as HTML, CSS and JavaScript.",
        "Develop projects using Git for version control and agile methodologies such as SCRUM for teamwork.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "I developed strong soft skills and proficiency in English, which enabled me to successfully accomplish my tasks.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "",
      icon: freelancer,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    

  ];
  
  const projects = [
    {
      name: "Hooy CMR",
      description:
        "Development of CRM platform with mass message sending functionality with Javascript, Java Spring Boot, MySQL and AWS",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: cmr ,
      gifUrl: crmgif,
      source_code_link: "https://github.com/",
    },
    {
      name: "Facial recognition",
      description:
        "Facial recognition web platform through images powered by AI, Python, AWS and Javascript",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {  
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: recognition,
      gifUrl: facialrecoggif,
      source_code_link: "https://github.com/",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  