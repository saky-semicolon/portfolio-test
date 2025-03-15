import React, { useState } from "react"; // ✅ Added useState
import Fade from "react-reveal/Fade";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationCard from "./PublicationCard";
import BlogCard from "./BlogCard";
import { publicationData } from "../../portfolio";
import "./PublicationPage.css";

function PublicationPage(props) {
  const { theme } = props;
  const [activeTab, setActiveTab] = useState("publications"); // ✅ Toggle between sections

  return (
    <div className="publication-main">
      <Header theme={theme} />
      <div className="main">
        <div className="publication-body-div">
          <Fade bottom>
            <h1 className="publication-heading">{publicationData.title}</h1>
          </Fade>
          <Fade bottom>
            <p className="publication-subtitle">
              {publicationData.description}
            </p>
          </Fade>

          {/* Toggle Buttons */}
          <div className="toggle-buttons">
            <button
              className={activeTab === "publications" ? "active" : ""}
              onClick={() => setActiveTab("publications")}
            >
              <span role="img" aria-label="Publications">
                📄
              </span>{" "}
              Publications
            </button>
            <button
              className={activeTab === "blogs" ? "active" : ""}
              onClick={() => setActiveTab("blogs")}
            >
              <span role="img" aria-label="Blogs">
                ✍️
              </span>{" "}
              Blogs
            </button>
          </div>

          {/* Publications Section */}
          {activeTab === "publications" && (
            <Fade bottom>
              <div className="publications-container">
                {publicationData.publications.map((publication, index) => (
                  <PublicationCard key={index} publication={publication} />
                ))}
              </div>
            </Fade>
          )}

          {/* Blogs Section */}
          {activeTab === "blogs" && (
            <Fade bottom>
              <div className="blogs-container">
                {publicationData.blogs.map((blog, index) => (
                  <BlogCard key={index} blog={blog} />
                ))}
              </div>
            </Fade>
          )}
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default PublicationPage;
