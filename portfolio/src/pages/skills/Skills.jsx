import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import styles from './Skills.module.css';
import flask from '../../logo/flask.svg'
import django from '../../logo/django.svg'
import tailwind from '../../logo/tailwindcss.svg'
import springboot from '../../logo/springboot.svg'

function Skills() {
  return (
    <div id="skills" className={styles.skills}>
      <h1>Skills</h1>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <div className={styles.programingSkills}>
            <h4>Python</h4><FontAwesomeIcon icon={faPython} size="2x" style={{ color: "#3776AB" }} />
            <h4>Java</h4><FontAwesomeIcon icon={faJava} size="2x" style={{ color: "#007396" }} />
            <h4>Javascript</h4><FontAwesomeIcon icon={faJs} size="2x" style={{ color: "#F7DF1E" }} />
            <h4>React</h4><FontAwesomeIcon icon={faReact} size="2x" style={{ color: "#61DAFB" }} />

            <h4>Flask</h4><img src={flask} alt="Flask" className={styles.customIcon} style={{ filter: "grayscale(100%)" }} />
            <h4>Django</h4><img src={django} alt="Django" className={styles.customIcon} style={{ filter: "brightness(0) saturate(100%) invert(14%) sepia(14%) saturate(2300%) hue-rotate(88deg) brightness(95%) contrast(86%)" }} />
            <h4>Tailwind</h4><img src={tailwind} alt="Tailwind CSS" className={styles.customIcon} style={{ filter: "brightness(0) saturate(100%) invert(66%) sepia(46%) saturate(726%) hue-rotate(142deg) brightness(96%) contrast(87%)" }} />
            <h4>Spring Boot</h4><img src={springboot} alt="Spring Boot" className={styles.customIcon} style={{ filter: "brightness(0) saturate(100%) invert(63%) sepia(21%) saturate(1580%) hue-rotate(56deg) brightness(96%) contrast(91%)" }} />
          </div>

          <div className={styles.programingSkills}>
            <h4>Python</h4><FontAwesomeIcon icon={faPython} size="2x" style={{ color: "#3776AB" }} />
            <h4>Java</h4><FontAwesomeIcon icon={faJava} size="2x" style={{ color: "#007396" }} />
            <h4>Javascript</h4><FontAwesomeIcon icon={faJs} size="2x" style={{ color: "#F7DF1E" }} />
            <h4>React</h4><FontAwesomeIcon icon={faReact} size="2x" style={{ color: "#61DAFB" }} />

            <h4>Flask</h4><img src={flask} alt="Flask" className={styles.customIcon} style={{ filter: "grayscale(100%)" }} />
            <h4>Django</h4><img src={django} alt="Django" className={styles.customIcon} style={{ filter: "brightness(0) saturate(100%) invert(14%) sepia(14%) saturate(2300%) hue-rotate(88deg) brightness(95%) contrast(86%)" }} />
            <h4>Tailwind</h4><img src={tailwind} alt="Tailwind CSS" className={styles.customIcon} style={{ filter: "brightness(0) saturate(100%) invert(66%) sepia(46%) saturate(726%) hue-rotate(142deg) brightness(96%) contrast(87%)" }} />
            <h4>Spring Boot</h4><img src={springboot} alt="Spring Boot" className={styles.customIcon} style={{ filter: "brightness(0) saturate(100%) invert(63%) sepia(21%) saturate(1580%) hue-rotate(56deg) brightness(96%) contrast(91%)" }} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Skills;
