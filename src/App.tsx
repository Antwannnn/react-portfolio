import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Route, Routes, useLocation, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, About, Skills, Experiences, Projects, Contact, NavBar } from './components/Components';
import './styles/styles.css';
import './config/i18n';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

const AppRouter: React.FC = () => {

  return (
    <>
      <main className="App min-h-screen flex overflow-hidden bg-gradient-red bg-cover bg-no-repeat bg-fixed scroll-none z-0">
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
