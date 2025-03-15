import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import Button from "../../components/button/Button";
import Badge from "react-bootstrap/Badge";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import {
  projectcards,
  projectcards2,
  projectcards3,
  projectcards4,
} from "../../portfolio";
import { CardColumns, Card } from "react-bootstrap";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.orange }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Navigation Buttons */}
        <div className="project-navigation">
          {["AI & ML", "projectcards2", "projectcards3", "projectcards4"].map(
            (id) => (
              <button
                key={id}
                className="nav-button fancy-button"
                onClick={() => this.scrollToSection(id)}
              >
                {id.replace("projectcards", "Projects ")}{" "}
                {/* Makes text more readable */}
              </button>
            )
          )}
        </div>

        <div className="project-sections">
          {[
            {
              id: "AI & ML",
              title: "Artificial Intelligence & Machine Learning",
              description: "Explore all the AI and ML Projects",
              data: projectcards,
            },
            {
              id: "projectcards2",
              title: "Projectcards2",
              description: "Amar sonar bangla",
              data: projectcards2,
            },
            {
              id: "projectcards3",
              title: "Projectcards3",
              description: "jonmo diyeso tmi mago",
              data: projectcards3,
            },
            {
              id: "projectcards4",
              title: "Projectcards4",
              description: "tai tomay valobashi",
              data: projectcards4,
            },
          ].map((section) => (
            <div key={section.id} id={section.id} className="project-section">
              <div className="section-box">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              <div className="repo-cards-div-main">
                <CardColumns>
                  {section.data.list.map((proj) => (
                    <Card className="h-100" key={proj.title}>
                      <Card.Img
                        variant="top"
                        src={require(`../../assets/projects/${proj.img_path}`)}
                      />
                      <Card.Body>
                        <Card.Title>
                          <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
                            {proj.title}
                            <a
                              style={{ color: theme.text }}
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className={`fas fa-external-link-alt`}
                                style={{
                                  color: proj.linkcolor,
                                  marginLeft: "10px",
                                }}
                              ></i>
                            </a>
                            <a
                              style={{ color: theme.text }}
                              href={proj.code}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className={`fab fa-github`}
                                style={{
                                  color: proj.linkcolor,
                                  paddingLeft: "10px",
                                }}
                              ></i>
                            </a>
                          </h2>
                        </Card.Title>
                        <div>
                          {proj.tags.map((demo2, index) => (
                            <Badge
                              key={index}
                              style={{
                                marginRight: "0.5em",
                                backgroundColor: demo2.color,
                              }}
                            >
                              {demo2.lang}
                            </Badge>
                          ))}
                        </div>
                        <Card.Text>{proj.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </CardColumns>
              </div>
            </div>
          ))}
        </div>
        <div className="more-projects">
          <button
            className="more-projects-btn"
            onClick={() =>
              window.open("https://github.com/saky-semicolon", "_blank")
            }
            aria-label="View more projects on GitHub"
          >
            <span>More Projects</span>
            <i className="fab fa-github"></i> {/* GitHub Icon */}
          </button>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
