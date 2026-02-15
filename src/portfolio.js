/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Haykel Sriha",
  title: "Hi, I'm Haykel",
  subTitle: emoji(
    "A Software & AI Engineer 🚀 with experience building full-stack web applications and AI-powered systems using Java / Spring Boot / React.js / Python / TensorFlow and more."
  ),
  resumeLink: "resume", // Enables the download resume button
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HaykelSriha",
  linkedin: "https://www.linkedin.com/in/haykel-sriha-4a0ba6243/",
  gmail: "srihahaykel@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SOFTWARE & AI ENGINEER WHO LOVES BUILDING INTELLIGENT FULL-STACK APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build robust backend microservices with Java/Spring Boot and .NET Core"
    ),
    emoji(
      "⚡ Develop modern frontend interfaces with React.js, Vue.js and Angular"
    ),
    emoji(
      "⚡ Design and deploy AI/ML solutions using TensorFlow, PyTorch and Scikit-learn"
    )
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "ENSICAEN",
      logo: require("./assets/images/ensicaenLogo.png"),
      subHeader:
        "Engineering Degree in Computer Science — Specialization: AI, Image & Sound",
      duration: "September 2022 - August 2025",
      desc: "Graduated with Honors (Mention Bien).",
      descBullets: [
        "Machine Learning, Deep Learning, Software Architecture, Image Processing",
        "Data Mining, Pattern Recognition, 3D Image Synthesis, Graph Theory"
      ]
    },
    {
      schoolName: "Esprit Prepa (MPSI/MP*)",
      logo: require("./assets/images/espritLogo.png"),
      subHeader: "Preparatory Classes for Engineering Schools — Ranked 5th",
      duration: "September 2019 - June 2022",
      desc: "Intensive preparation for competitive entrance exams to top French engineering schools.",
      descBullets: [
        "Mathematics, Computer Science, Physics, General Culture"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend (Java/Spring Boot/.NET)",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend (React/Vue/Angular)",
      progressPercentage: "75%"
    },
    {
      Stack: "AI & Machine Learning",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer Intern",
      company: "LCL",
      companylogo: require("./assets/images/lclLogo.png"),
      date: "March 2025 – September 2025",
      desc: "Developed and maintained Java/Spring Boot microservices for a mortgage lending tool used by 1,200 LCL banking advisors.",
      descBullets: [
        "Built microservices with PostgreSQL, contributed to CI/CD pipelines and production deployments",
        "Active Agile involvement: code reviews, ticket estimation, pair programming, unit & integration testing",
        "Collaborated with Business Analysts to refine functional requirements and track release milestones"
      ]
    },
    {
      role: "Fullstack Engineer Intern",
      company: "JoodLab",
      companylogo: require("./assets/images/joodlabLogo.png"),
      date: "May 2024 – August 2024",
      desc: "Designed and deployed an AI-based pricing recommendation system for hotel revenue optimization.",
      descBullets: [
        "Built ML clustering models with Scikit-learn and Pandas",
        "Developed full-stack application: Vue.js frontend and .NET Core backend"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: false // Disabled until GitHub data fetching is configured
};

// Academic Projects & Competitions

const bigProjects = {
  title: "Academic Projects & Competitions",
  subtitle: "PROJECTS AND HACKATHONS FROM MY ENGINEERING STUDIES",
  projects: [
    {
      image: require("./assets/images/ensicaenLogo.png"),
      projectName: "GripId x ENSICAEN — Facial Authentication",
      projectDesc:
        "Secure facial authentication system for remote meetings. Achieved 99.8% accuracy on LFW dataset with InceptionResNetV1. Built with Node.js and Angular.",
      footerLink: []
    },
    {
      image: require("./assets/images/lclLogo.png"),
      projectName: "Google x LCL Hackathon",
      projectDesc:
        "Predictive app for LCL advisors to forecast client financial behaviors. Flask backend, React.js frontend, deployed on Google Cloud with Langchain & Gemini-AI.",
      footerLink: []
    },
    {
      image: require("./assets/images/ensicaenLogo.png"),
      projectName: "Orange Innovation Academy",
      projectDesc:
        "Led a team of 6 students to design and build an innovative web platform using React.js, TailwindCSS and Firebase.",
      footerLink: []
    },
    {
      image: require("./assets/images/ensicaenLogo.png"),
      projectName: "GREYC — Keystroke Analysis with AI",
      projectDesc:
        "Worked on CNNs and Transformers (CoAtNet) for sound recognition. Built signal processing pipeline to detect keystrokes from ambient microphone audio.",
      footerLink: []
    }
  ],
  display: true
};

// Personal Projects (Post-Graduation)

const personalProjects = {
  title: "Personal Projects",
  subtitle: "THINGS I BUILD IN MY FREE TIME — CLICK TO SEE LIVE DEMOS",
  projects: [
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "Anime Recommender",
      projectDesc:
        "An AI-powered anime recommendation system built with Python and Streamlit. Get personalized anime suggestions based on your preferences.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://anime-recommender-lpgvr76z8jmhw8suz2c5yp.streamlit.app/"
        }
      ]
    }
  ],
  display: true
};

// Certifications Section

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "PROFESSIONAL CERTIFICATIONS AND CREDENTIALS",
  achievementsCards: [
    {
      title: "Associate Data Engineer",
      subtitle: "DataCamp — Certified December 6, 2025",
      image: require("./assets/images/datacampCert.png"),
      imageAlt: "DataCamp Associate Data Engineer Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.datacamp.com/certificate/DEA0017183707846"
        }
      ]
    },
    {
      title: "IBM Data Engineering Professional Certificate",
      subtitle: "IBM via Coursera — In Progress",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "In Progress",
          url: "https://www.coursera.org/professional-certificates/ibm-data-engineer"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Enable when you have blog posts to show
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Enable when you have talks to show
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Enable when you have podcasts to show
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? My inbox is open for all.",
  number: "+33 751 047 309",
  email_address: "srihahaykel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Disabled — no Twitter configured
};

const isHireable = true; // Open for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  personalProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
