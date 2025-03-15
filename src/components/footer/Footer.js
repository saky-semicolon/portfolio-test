import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.text }}>
          {greeting.sub}
          <br></br>
          <div class="pages">
            <a href="https://">Home</a> | <a href="https://">About</a> |{" "}
            <a href="https://">Projects</a> | <a href="https://">Contact</a>
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
            <a href="https://www.linkedin.com/in/YOUR-LINK">
              <i class="fa-brands fa-linkedin"></i>
            </a>{" "}
            |{" "}
            <a href="https://scholar.google.com/citations?user=YOUR-ID">
              <i class="fa-solid fa-graduation-cap"></i>
            </a>
          </div>
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
