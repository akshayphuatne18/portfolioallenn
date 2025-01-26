import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;
