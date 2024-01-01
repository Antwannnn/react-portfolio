import React from 'react';
import { HashRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, About, Skills, Experiences, Projects, Contact, NavBar } from './components/Components';
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

  const location = useLocation();

  return (
    <>
      <main className="App h-screen overflow-auto flex bg-gradient-red bg-cover bg-no-repeat bg-fixed scroll-none z-0">
        <NavBar />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}



export default App;
