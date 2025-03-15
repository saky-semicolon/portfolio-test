import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "../skills/datascience/DataScienceImg";
import FullStackImg from "../skills/web/FullStackImg";
import MLOpsImg from "../skills/MLOps/MLOpsImg";
import AIRDImg from "../skills/AIRD/AIRDImg";
import MentoringImg from "../skills/ui/MentoringImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "MentoringImg")
    return <MentoringImg theme={props.theme} />;
  else if (props.fileName === "AIRDImg") return <AIRDImg theme={props.theme} />;
  return <MLOpsImg theme={props.theme} />;
}

class aboutme extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.blue }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.text }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default aboutme;

import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "../skills/datascience/DataScienceImg";
import FullStackImg from "../skills/web/FullStackImg";
import MLOpsImg from "../skills/MLOps/MLOpsImg";
import AIRDImg from "../skills/AIRD/AIRDImg";
import MentoringImg from "../skills/ui/MentoringImg";

function GetSkillSvg({ fileName, theme }) {
  const skillComponents = {
    DataScienceImg: <DataScienceImg theme={theme} />,
    FullStackImg: <FullStackImg theme={theme} />,
    MentoringImg: <MentoringImg theme={theme} />,
    AIRDImg: <AIRDImg theme={theme} />,
    MLOpsImg: <MLOpsImg theme={theme} />,
  };

  return skillComponents[fileName] || <MLOpsImg theme={theme} />;
}

class AboutMe extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="about-me-section">
        {skills.data.map((skill, index) => (
          <div key={index} className="skills-main-div">
            <Fade left duration={2000}>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>
            <div className="skills-text-div">
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.blue }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade right duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
              <Fade right duration={2000}>
                <div>
                  {skill.skills.map((skillSentence, i) => (
                    <p
                      key={i}
                      className="subTitle skills-text"
                      style={{ color: theme.text }}
                    >
                      {skillSentence}
                    </p>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AboutMe;
