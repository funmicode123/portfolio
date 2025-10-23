import React, { useState } from 'react';
import styles from '../project/Project.module.css';

const estate_git = import.meta.env.VITE_ESTATE_GIT_URL;
const frontend = import.meta.env.VITE_FRONT_END_URL;
const contact_git = import.meta.env.VITE_CONTACT_GIT_URL;
const movie_git = import.meta.env.VITE_MOVIE_GIT_URL;
const vla_git = import.meta.env.VITE_VLA_GIT_URL;
const crm_git = import.meta.env.VITE_CRM_GIT_URL;

const projects = [
  {
    title: 'Movie App',
    description: `Movie App is a React-based application that integrates with external movie APIs (like TMDb) to deliver real-time movie data. 
    It allows users to search films, view detailed info, watch trailers, and maintain a personal watchlist — all in a sleek and responsive UI.`,
    github: movie_git,
    // page: frontend,
  },

  {
    title: 'Estate Management App',
    description: `Estate Management App is a seamless and efficient solution designed to simplify estate operations. 
    It enables you to:
    
    - Manage buildings: Keep track of the number and types of buildings within the estate.
    - Generate visitor codes: Residents can generate valid, time-bound codes for their visitors.
    - Track visitors: Ensure security by tracking visitors from entry to the respective residents.
    - Monitor security personnel: Maintain accountability by recording which security staff are on duty during each shift.`,
    github: estate_git,
    // page: frontend,
  },
  {
    title: 'Contact Management App',
    description: `Contact Management App is a professional tool designed to streamline how businesses manage client 
    and team contacts. It allows easy storage, quick search, and real-time updates of essential contact details—ensuring seamless communication 
    and organized networking.`,
    github: contact_git,
    // page: frontend,
  },
  {
    title: 'Virtual Learning App',
    description: `A professional platform built to enhance online participant engagement with facilitators. 
    It provides seamless tracking of participant involvement after each session, supports quick search, 
    and delivers real-time updates of essential chat details—ensuring smooth and effective communication.`,
    github: vla_git,
    // page: frontend,
  },
  {
    title: 'University CRM Platform',
    description: `A professional platform built to enhance university management and student engagement. 
    It provides seamless tracking of student involvement after each session, supports quick search, 
    and delivers real-time updates of essential academic details—ensuring smooth and effective communication between students and faculty.`,
    github: vla_git,
    // page: frontend,
  }
  
];

function Project() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
      <div id= "projects" className={styles.mywork}>
        <h1>My Projects</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const shouldShowToggle = project.description.length > 100;
            const displayText = isExpanded
              ? project.description
              : project.description.slice(0, 100) + (shouldShowToggle ? '...' : '');

            return (
              <div className={styles.Project} key={index}>
                <div className={styles.title}>
                  <h2>{project.title}</h2>
                  <p>
                    {displayText}
                    {shouldShowToggle && (
                      <span
                        style={{ color: '#007bff', cursor: 'pointer', marginLeft: '8px' }}
                        onClick={() => toggleDescription(index)}
                      >
                        {isExpanded ? 'See less' : 'See more'}
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button>GitHub Link</button>
                  </a>
                  {/* <a href={project.page} target="_blank" rel="noopener noreferrer">
                    <button>Page</button>
                  </a> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
}

export default Project;
