// PublicationCard.js

import React from "react";
import "../../App.css";
import "./PublicationPage.css";

function PublicationCard({ publication }) {
  return (
    // <div className="publication-card">
    //   <h2 className="publication-title">{publication.title}</h2>
    //   <p className="publication-authors"><strong>Authors:</strong> {publication.authors}</p>
    //   {publication.journal && (
    //     <p><strong>Journal:</strong> {publication.journal}, Vol. {publication.volume}, Issue {publication.issue}, Pages {publication.pages}</p>
    //   )}
    //   {publication.conference && (
    //     <p><strong>Conference:</strong> {publication.conference}</p>
    //   )}
    //   <p><strong>Year:</strong> {publication.year}</p>
    //   <p><strong>Publisher:</strong> {publication.publisher}</p>
    //   <p><strong>DOI:</strong> <a href={publication.link} target="_blank" rel="noopener noreferrer">{publication.doi}</a></p>
    //   <p className="publication-abstract"><strong>Abstract:</strong> {publication.abstract}</p>
    //   {publication.codeLink && (
    //     <p>
    //     <strong></strong>
    //     <a href={publication.codeLink} target="_blank" rel="noopener noreferrer">
    //       <button className="read-paper-btn">
    //         <i className="fas fa-file-alt"></i> Read Paper
    //       </button>
    //     </a>
    //   </p>
    //   )}
    // </div>
    <div className="publication-card">
      <h2 className="publication-title">{publication.title}</h2>

      <p className="publication-authors">
        <i className="fas fa-user-edit"></i> <strong>Authors:</strong>{" "}
        {publication.authors}
      </p>

      {publication.journal && (
        <p>
          <i className="fas fa-book"></i> <strong>Journal:</strong>{" "}
          {publication.journal}, Vol. {publication.volume}, Issue{" "}
          {publication.issue}, Pages {publication.pages}
        </p>
      )}

      {publication.conference && (
        <p>
          <i className="fas fa-microphone"></i> <strong>Conference:</strong>{" "}
          {publication.conference}
        </p>
      )}

      <p>
        <i className="fas fa-calendar"></i> <strong>Year:</strong>{" "}
        {publication.year}
      </p>
      <p>
        <i className="fas fa-building"></i> <strong>Publisher:</strong>{" "}
        {publication.publisher}
      </p>

      <p>
        <i className="fas fa-link"></i> <strong>DOI: </strong>
        <a href={publication.link} target="_blank" rel="noopener noreferrer">
          {publication.doi}
        </a>
      </p>

      {/* <p className="publication-abstract">
    <i className="fas fa-align-left"></i> <strong>Abstract:</strong> {publication.abstract}
  </p> */}

      <p className="publication-abstract">
        <i className="fas fa-align-left"></i>{" "}
        <strong class="abs-title">Abstract:</strong>
        <span className="abstract-text">{publication.abstract}</span>
      </p>

      {publication.codeLink && (
        <p>
          <a
            href={publication.codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="read-paper-btn">
              <i className="fas fa-file-alt"></i> Read Paper
            </button>
          </a>
        </p>
      )}
    </div>
  );
}

export default PublicationCard;
