import React from 'react';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Skills from '../../pages/skills/Skills';
import Project from '../../pages/project/Project';
import ContactMe from '../../pages/contactMe/ContactMe';

function HomePage() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contactMe">
        <ContactMe />
      </section>
    </div>
  );
}

export default HomePage;
