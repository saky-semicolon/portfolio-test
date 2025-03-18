import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
// import ToggleSwitch from "./ToggleSwitch";
// eslint-disable jsx-a11y/accessible-emoji

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.text }}>
          {greeting.sub}
          <br></br>
          <div class="pages">
            <a href="https://saky-semicolon.netlify.app/home">Home</a> |{" "}
            <a href="https://saky-semicolon.netlify.app/education">Education</a>{" "}
            | <a href="https://saky-semicolon.netlify.app/projects">Projects</a>{" "}
            | <a href="https://saky-semicolon.netlify.app/contact">Contact</a>
          </div>
          <div class="footer-icons">
            <a href="https://github.com/saky-semicolon">
              <i class="fa-brands fa-github"></i>
            </a>{" "}
            |{" "}
            <a href="https://twitter.com/saky_semicolon">
              <i class="fa-brands fa-twitter"></i>
            </a>{" "}
            |{" "}
            <a href="https://www.linkedin.com/in/saky-semicolon/">
              <i class="fa-brands fa-linkedin"></i>
            </a>{" "}
            |{" "}
            <a href="https://scholar.google.com/citations?user=1mo3UhMAAAAJ&hl=en">
              <i class="fa-solid fa-graduation-cap"></i>
            </a>
          </div>
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
