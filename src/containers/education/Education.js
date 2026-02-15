import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {useTranslation} from "../../hooks/useTranslation";

export default function Education() {
  const {educationInfo, labels} = useTranslation();
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{labels.educationTitle}</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
