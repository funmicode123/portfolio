import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import styles from '../home/Home.module.css'
import ProfileImage from '../../assets/Profile 2.png'
import { Link } from 'react-router-dom';

const facebook = import.meta.env.VITE_FACEBOOK_URL;
const github = import.meta.env.VITE_PROFILE_GIT_URL;
const instagram = import.meta.env.VITE_INSTAGRAM_URL;
const whatsapp = import.meta.env.VITE_WHATSAPP_LINK;
const linkedIn = import.meta.env.VITE_LINKEDIN_URL;



function Home() {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.intro}>
        <div className={styles.name}>
          {/* <h4>Hi, I am</h4> */}
          <h1>Funmilola Sanni from Nigeria</h1>
          <p>Software Engineer</p>
          {/* <button>View Projects</button> */}
        </div>

        <div className={styles.media_handle}>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#171515" }} /></a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#0077B5" }} />
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{ color: "#1877F2" }} />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" style={{ color: "#E1306C" }} />
          </a>
          
          <a
            href= {whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{color: "#25D366"}}/>
        </a>
        </div>


        <div className={styles.viewButton}>
        <Link to="/contactMe">
              <button>Contact</button>
            </Link>
        </div>
        <div className={styles.summary}>
          <h5>Dynamic and results-oriented software Developer building scalable backend systems, designing RESTful APIs, 
            and integrating secure cloud-based architectures. 
            Led the development of microservices-based applications that improved load times by 60% and reduced server crashes by 95%. 
            Proven track record of delivering production-grade software through strategic collaboration, agile methodologies, and performance-optimized code.</h5>
        </div>
      </div>

      <div className={styles.image}>
        <img src={ProfileImage} alt="profile" />
      </div>
    </div>
  );
}

export default Home;
