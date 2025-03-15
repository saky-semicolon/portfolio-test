import React from "react";
import "../../App.css";
import "./PublicationPage.css";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div className="blog-header">
        <h2 className="blog-title">{blog.title}</h2>
        <p className="blog-author">
          <strong>
            <span role="img" aria-label="author">
              ✍️
            </span>{" "}
            Author:
          </strong>{" "}
          {blog.author}
        </p>
      </div>

      <div className="blog-details">
        <p>
          <strong>
            <span role="img" aria-label="platform">
              📌
            </span>{" "}
            Platform:
          </strong>{" "}
          {blog.platform}
        </p>
        <p>
          <strong>
            <span role="img" aria-label="year">
              📅
            </span>{" "}
            Year:
          </strong>{" "}
          {blog.year}
        </p>
        <p className="blog-description">{blog.description}</p>
      </div>

      <div className="blog-footer">
        <a href={blog.link} target="_blank" rel="noopener noreferrer">
          <button className="read-more-btn">
            <span role="img" aria-label="read more">
              📖
            </span>{" "}
            Read More
          </button>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
