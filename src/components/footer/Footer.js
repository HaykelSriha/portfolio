import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "../../hooks/useTranslation";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const {labels} = useTranslation();
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
      </div>
    </Fade>
  );
}
