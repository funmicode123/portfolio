import React from 'react'
import styles from '../about/About.module.css'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div id = "about" className={styles.about}>
      <div  className={styles.About}>
        <h1>About Me</h1>
        <p>Hi, my name is <strong>Sanni Funmilola Leah</strong>. I’m a highly motivated and detail-oriented Front-end Engineer skilled in technologies like HTML, CSS, JavaScript, 
          and proficient in React. I also have experience with back-end development using Java and Python, leveraging frameworks such as Spring Boot, Flask, and Django.
          I specialize in designing RESTful APIs and building scalable, user-centric web applications. 
          I'm passionate about ensuring software reliability through thorough manual and automated testing. I've worked with tools like Jest, Postman, JUnit, Pytest, and Unittest to maintain and improve software quality. 
          I constantly refine my approach to identify and resolve issues early in the development lifecycle.
          My journey as a software developer is driven by a strong desire to solve real-world problems and continuously improve my skills with the latest technologies. I have a proven track record of delivering high-quality solutions on time, 
          and I've optimized web performance to improve loading speeds by 30% through various best practices.
          I'm also proficient in UX/UI design principles, with a strong focus on accessibility, security, and responsive design. A collaborative team player with excellent communication skills, 
          I am passionate about staying current with both trends and pushing the boundaries of what's possible on the web.
        </p>
      </div>
      

      <div className={styles.Quality}>
        <Link to= "/skills">Skills</Link>
        <Link to="/project">Projects</Link>
        <Link to="/education">Education</Link>
      </div>
    </div>

    
  )
}

export default About
