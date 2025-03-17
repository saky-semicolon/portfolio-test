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
          {[
            "Artificial Intelligence & Machine Learning",
            "Deep Learning & Computer Vision",
            "Software Engineering & Intelligent Systems",
            "Web Applications",
          ].map((id) => (
            <button
              key={id}
              className="nav-button fancy-button"
              onClick={() => this.scrollToSection(id)}
            >
              {id.replace("projectcards", "Projects ")}{" "}
              {/* Makes text more readable */}
            </button>
          ))}
        </div>

        <div className="project-sections">
          {[
            {
              id: "Artificial Intelligence & Machine Learning",
              title: "Artificial Intelligence & Machine Learning",
              description:
                "Empowering intelligent decision-making through predictive analytics, anomaly detection, natural language processing (NLP), and recommendation systems. These solutions are designed to optimize business processes, enhance automation, and extract meaningful insights from complex data.",
              data: projectcards,
            },
            {
              id: "Deep Learning & Computer Vision",
              title: "Deep Learning & Computer Vision",
              description:
                "Building AI-driven visual intelligence systems that enable machines to interpret and analyze images and videos with human-like precision. From medical imaging to object detection, these projects incorporate convolutional neural networks (CNNs), segmentation models, and advanced feature extraction techniques to solve real-world challenges.",
              data: projectcards2,
            },
            {
              id: "Software Engineering & Intelligent Systems",
              title: "Software Engineering & Intelligent Systems",
              description:
                "Bridging the gap between traditional software development and AI-powered automation. These projects focus on intelligent automation, business optimization, simulation modeling, and scalable system architectures to build robust and efficient software solutions.",
              data: projectcards3,
            },
            {
              id: "Web Applications",
              title: "Web Applications",
              description:
                "Crafting dynamic, responsive, and user-friendly web applications with a focus on seamless functionality and exceptional user experience. This includes building interactive dashboards, automation tools, real-time analytics platforms, and scalable web solutions that enhance accessibility and efficiency across various industries.",
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
