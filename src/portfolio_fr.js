/* Version française du portfolio */

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
  title: "Salut, je suis Haykel",
  subTitle: emoji(
    "Ingénieur Logiciel & IA 🚀 avec de l'expérience dans le développement d'applications web full-stack et de systèmes intelligents utilisant Java / Spring Boot / React.js / Python / TensorFlow et plus encore."
  ),
  resumeLink: "resume",
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
  title: "Ce que je fais",
  subTitle:
    "INGÉNIEUR LOGICIEL & IA PASSIONNÉ PAR LA CRÉATION D'APPLICATIONS FULL-STACK INTELLIGENTES",
  skills: [
    emoji(
      "⚡ Développement de microservices backend robustes avec Java/Spring Boot et .NET Core"
    ),
    emoji(
      "⚡ Création d'interfaces frontend modernes avec React.js, Vue.js et Angular"
    ),
    emoji(
      "⚡ Conception et déploiement de solutions IA/ML avec TensorFlow, PyTorch et Scikit-learn"
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
        "Diplôme d'ingénieur en Informatique — Spécialité : IA, Image & Son",
      duration: "Septembre 2022 - Août 2025",
      desc: "Diplômé avec Mention Bien.",
      descBullets: [
        "Apprentissage automatique, Apprentissage profond, Architecture logicielle, Traitement d'images",
        "Fouille de données, Reconnaissance de formes, Synthèse d'images 3D, Théorie des graphes"
      ]
    },
    {
      schoolName: "Esprit Prepa (MPSI/MP*)",
      logo: require("./assets/images/espritLogo.png"),
      subHeader:
        "Classes préparatoires aux grandes écoles d'ingénieurs — Classé 5ème",
      duration: "Septembre 2019 - Juin 2022",
      desc: "Préparation intensive aux concours d'entrée des grandes écoles d'ingénieurs françaises.",
      descBullets: [
        "Mathématiques, Informatique, Physique, Culture générale"
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
      Stack: "IA & Apprentissage automatique",
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
      role: "Stagiaire Ingénieur Logiciel",
      company: "LCL",
      companylogo: require("./assets/images/lclLogo.png"),
      date: "Mars 2025 – Septembre 2025",
      desc: "Développement et maintenance de microservices Java/Spring Boot pour un outil de prêt immobilier utilisé par 1 200 conseillers bancaires LCL.",
      descBullets: [
        "Construction de microservices avec PostgreSQL, contribution aux pipelines CI/CD et aux déploiements en production",
        "Participation active en Agile : revues de code, estimation de tickets, pair programming, tests unitaires & d'intégration",
        "Collaboration avec les analystes métier pour affiner les exigences fonctionnelles et suivre les jalons de livraison"
      ]
    },
    {
      role: "Stagiaire Ingénieur Fullstack",
      company: "JoodLab",
      companylogo: require("./assets/images/joodlabLogo.png"),
      date: "Mai 2024 – Août 2024",
      desc: "Conception et déploiement d'un système de recommandation de prix basé sur l'IA pour l'optimisation des revenus hôteliers.",
      descBullets: [
        "Construction de modèles de clustering ML avec Scikit-learn et Pandas",
        "Développement d'une application full-stack : frontend Vue.js et backend .NET Core"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Academic Projects & Competitions

const bigProjects = {
  title: "Projets Académiques & Compétitions",
  subtitle: "PROJETS ET HACKATHONS DE MON PARCOURS D'INGÉNIEUR",
  projects: [
    {
      image: require("./assets/images/ensicaenLogo.png"),
      projectName: "GripId x ENSICAEN — Authentification Faciale",
      projectDesc:
        "Système d'authentification faciale sécurisé pour les réunions à distance. Précision de 99,8% sur le dataset LFW avec InceptionResNetV1. Développé avec Node.js et Angular.",
      footerLink: []
    },
    {
      image: require("./assets/images/lclLogo.png"),
      projectName: "Hackathon Google x LCL",
      projectDesc:
        "Application prédictive pour les conseillers LCL permettant d'anticiper les comportements financiers des clients. Backend Flask, frontend React.js, déployé sur Google Cloud avec Langchain & Gemini-AI.",
      footerLink: []
    },
    {
      image: require("./assets/images/ensicaenLogo.png"),
      projectName: "Orange Innovation Academy",
      projectDesc:
        "Direction d'une équipe de 6 étudiants pour concevoir et développer une plateforme web innovante avec React.js, TailwindCSS et Firebase.",
      footerLink: []
    },
    {
      image: require("./assets/images/ensicaenLogo.png"),
      projectName: "GREYC — Analyse de frappes clavier par IA",
      projectDesc:
        "Travail sur les CNN et Transformers (CoAtNet) pour la reconnaissance sonore. Construction d'un pipeline de traitement du signal pour détecter les frappes clavier à partir d'un microphone ambiant.",
      footerLink: []
    },
    {
      image: require("./assets/images/hecLogo.png"),
      projectName: "HEC Fintech Hackathon",
      projectDesc:
        "Solution fintech développée lors du Hackathon HEC Paris. Frontend React.js, backend FastAPI, et modèle IA TensorFlow pour l'analyse et la prédiction de données financières.",
      footerLink: []
    }
  ],
  display: true
};

// Personal Projects (Post-Graduation)

const personalProjects = {
  title: "Projets Personnels",
  subtitle:
    "CE QUE JE CONSTRUIS PENDANT MON TEMPS LIBRE — CLIQUEZ POUR VOIR LES DÉMOS",
  projects: [
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "Anime Recommender",
      projectDesc:
        "Un système de recommandation d'anime propulsé par l'IA, développé avec Python et Streamlit. Obtenez des suggestions d'anime personnalisées selon vos préférences.",
      footerLink: [
        {
          name: "Démo en ligne",
          url: "https://anime-recommender-lpgvr76z8jmhw8suz2c5yp.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "TripRadar",
      projectDesc:
        "Un service d'alertes de vols pas chers pour les voyageurs français. Surveille 240 routes européennes toutes les 6h et calcule un score en temps réel basé sur le prix, la durée et la popularité. Disponible sur Android.",
      footerLink: [
        {
          name: "Démo en ligne",
          url: "https://tripradar-two.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/ludoLogo.png"),
      projectName: "Ludo++",
      projectDesc:
        "Un jeu de Ludo multijoueur chaotique développé avec React Native & Expo. Mines, flingues, portails, nukes et un système de prison pour 2 à 4 joueurs. Multijoueur local en mode pass-the-phone.",
      footerLink: [
        {
          name: "Jouer",
          url: "https://ludo-kohl-ten.vercel.app/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Réalisations et Certifications 🏆 "),
  subtitle:
    "Réalisations, certifications et projets dont je suis fier !",
  achievementsCards: [],
  display: false
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "CONFÉRENCES",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "N'hésitez pas à télécharger mon CV",
  display: true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Vous souhaitez discuter d'un projet ou simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "+33 751 047 309",
  email_address: "srihahaykel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

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
