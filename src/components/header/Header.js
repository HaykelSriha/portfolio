import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "../../hooks/useTranslation";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {
    greeting,
    workExperiences,
    skillsSection,
    openSource,
    blogSection,
    talkSection,
    achievementSection,
    resumeSection,
    labels
  } = useTranslation();
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{labels.skills}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{labels.workExperiences}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{labels.openSourceLabel}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{labels.achievements}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{labels.blogs}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{labels.talks}</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">{labels.resume}</a>
            </li>
          )}
          <li>
            <a href="#contact">{labels.contactMeNav}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <LanguageSwitcher />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
