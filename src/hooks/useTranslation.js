import {useContext} from "react";
import LanguageContext from "../contexts/LanguageContext";
import * as portfolioEN from "../portfolio";
import * as portfolioFR from "../portfolio_fr";

const labels = {
  en: {
    educationTitle: "Education",
    experiencesTitle: "Experiences",
    proficiencyTitle: "Proficiency",
    madeWith: "Made with ❤️ by DeveloperFolio Team",
    themeBy: "Theme by",
    contactMe: "Contact me",
    downloadResume: "Download my resume",
    skills: "Skills",
    workExperiences: "Work Experiences",
    openSourceLabel: "Open Source",
    achievements: "Achievements",
    blogs: "Blogs",
    talks: "Talks",
    resume: "Resume",
    contactMeNav: "Contact Me"
  },
  fr: {
    educationTitle: "Formation",
    experiencesTitle: "Expériences",
    proficiencyTitle: "Compétences",
    madeWith: "Fait avec ❤️ par l'équipe DeveloperFolio",
    themeBy: "Thème par",
    contactMe: "Me contacter",
    downloadResume: "Télécharger mon CV",
    skills: "Compétences",
    workExperiences: "Expériences professionnelles",
    openSourceLabel: "Open Source",
    achievements: "Réalisations",
    blogs: "Blog",
    talks: "Conférences",
    resume: "CV",
    contactMeNav: "Me contacter"
  }
};

export const useTranslation = () => {
  const {language} = useContext(LanguageContext);
  const portfolio = language === "fr" ? portfolioFR : portfolioEN;
  return {
    ...portfolio,
    labels: labels[language] || labels.en
  };
};
