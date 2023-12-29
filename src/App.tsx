import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Skills, Experiences, Projects, Contact } from './components/Components';
import ParticlesBackground from "./Particles/ParticlesBackground";
import './styles/styles.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

const AppRouter = () => {
  return (
    <>
      <main className="App h-screen overflow-auto bg-gradient-dark-red bg-cover bg-no-repeat bg-fixed scroll-none z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}



export default App;
