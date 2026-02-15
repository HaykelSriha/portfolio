import React, {useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher() {
  const {language, changeLanguage} = useContext(LanguageContext);
  const {isDark} = useContext(StyleContext);

  return (
    <div className="language-switcher">
      <button
        className={`flag-btn${language === "en" ? " active" : ""}${isDark ? " dark" : ""}`}
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
        title="English"
      >
        {/* UK Flag */}
        <svg viewBox="0 0 60 30" width="24" height="12" className="flag-svg">
          <clipPath id="uk-clip">
            <rect width="60" height="30" rx="2" />
          </clipPath>
          <g clipPath="url(#uk-clip)">
            <rect width="60" height="30" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path
              d="M0,0 L60,30 M60,0 L0,30"
              stroke="#C8102E"
              strokeWidth="4"
              clipPath="url(#uk-center)"
            />
            <clipPath id="uk-center">
              <path d="M30,0 L60,0 L30,15 Z M30,30 L0,30 L30,15 Z M0,0 L0,15 L15,15 Z M60,30 L60,15 L45,15 Z" />
            </clipPath>
            <path
              d="M0,0 L60,30 M60,0 L0,30"
              stroke="#C8102E"
              strokeWidth="2"
            />
            <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      </button>
      <button
        className={`flag-btn${language === "fr" ? " active" : ""}${isDark ? " dark" : ""}`}
        onClick={() => changeLanguage("fr")}
        aria-label="Passer en français"
        title="Français"
      >
        {/* France Flag */}
        <svg viewBox="0 0 30 20" width="24" height="16" className="flag-svg">
          <rect width="10" height="20" fill="#002395" />
          <rect x="10" width="10" height="20" fill="#fff" />
          <rect x="20" width="10" height="20" fill="#ED2939" />
        </svg>
      </button>
    </div>
  );
}
