import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, About, Skills, Experiences, Projects, Contact, NavBar } from './components/Components';
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
  const [isAnyVisible, setIsAnyVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionEnter = (section: string) => {
    setIsAnyVisible(true);
    setActiveSection(section);
  }

  const handleSectionExit = () => {
    setIsAnyVisible(false);
    setActiveSection("");
  }

  return (
    <>
      <main className="App min-h-screen flex overflow-hidden bg-gradient-red bg-cover bg-no-repeat bg-fixed scroll-none z-0">
        <NavBar />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {(!isAnyVisible || activeSection === "home") && <Route path="/" element={<Home key={"home"} onEnter={() => handleSectionEnter("home")} onExit={() => handleSectionExit()}/>} />}
            {(!isAnyVisible || activeSection === "about") && <Route path="/about" element={<About key={"about"} onEnter={() => handleSectionEnter("about")} onExit={() => handleSectionExit()}/>} />}
            {(!isAnyVisible || activeSection === "skills") && <Route path="/skills" element={<Skills key={"skills"} onEnter={() => handleSectionEnter("skills")} onExit={() => handleSectionExit()}/>} />}
            {(!isAnyVisible || activeSection === "experiences") && <Route path="/experiences" element={<Experiences key={"experiences"} onEnter={() => handleSectionEnter("experiences")} onExit={() => handleSectionExit()}/>} />}
            {(!isAnyVisible || activeSection === "projects") && <Route path="/projects" element={<Projects key={"projects"} onEnter={() => handleSectionEnter("projects")} onExit={() => handleSectionExit()}/>} />}
            {(!isAnyVisible || activeSection === "contact") && <Route path="/contact" element={<Contact key={"contact"} onEnter={() => handleSectionEnter("contact")} onExit={() => handleSectionExit()}/>} />}
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}



export default App;
