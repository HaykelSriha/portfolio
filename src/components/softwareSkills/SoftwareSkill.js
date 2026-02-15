import React from "react";
import "./SoftwareSkill.scss";
import {useTranslation} from "../../hooks/useTranslation";

export default function SoftwareSkill() {
  const {skillsSection} = useTranslation();
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
