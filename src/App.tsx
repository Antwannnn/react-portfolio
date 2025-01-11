import React, { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Route, Routes, useLocation, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, About, Skills, Experiences, Projects, Contact, NavBar, ButSkills } from './components/Components';
import './styles/styles.css';
import './config/i18n';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <ThemeSwitcher />
    </div>
  );
}

const AppRouter: React.FC = () => {

  return (
    <>
      <main className="App min-h-screen flex overflow-hidden bg-background bg-cover bg-no-repeat bg-fixed scroll-none z-0">
        <NavBar />
        <AnimatePresence>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Analytics />
        </AnimatePresence>
      </main>
    </>
  );
}

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/butskills',
    element: <ButSkills />,
  },
  {
    path: '/experiences',
    element: <Experiences />,
  },

  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },

]




export default App;
