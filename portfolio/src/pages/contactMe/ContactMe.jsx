import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from './ContactMe.module.css';

const gitProfile = import.meta.env.VITE_GIT_PROFILE_URL;
const linkedIn = import.meta.env.VITE_LINKEDIN_URL;
const facebook = import.meta.env.VITE_FACEBOOK_URL;
const instagram = import.meta.env.VITE_INSTAGRAM_URL;
const whatsapp = import.meta.env.VITE_WHATSAPP_LINK;
const resume = import.meta.env.VITE_RESUME_PATH;

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className={styles.back}>
        <div id= "contact" className={styles.contact}>
        <div className={styles.details}>
          <h1>Contact Me</h1>
          <h5>Email: sannifunmilola26@gmail.com</h5>
          <h5>Phone Number: +2349054820474</h5>
          <div className={styles.media_handle}>
            <a href={gitProfile} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#171515" }}/>
            </a>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#0077B5" }}/>
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{ color: "#1877F2" }}/>
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagramSquare} size="2x" style={{ color: "#E1306C" }}/>
            </a>
            <a
              href= {whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{color: "#25D366"}}/>
          </a>
          </div>
          
          <a href={resume} download className={styles.downloadCV}>
            <button>Download CV</button>
          </a>

        </div>

        <div className={styles.message}>
          <form onSubmit={handleFormSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
