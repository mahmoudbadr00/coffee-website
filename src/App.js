import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import { useTranslation } from 'react-i18next';
import logo from './utils/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from './components/ScrollToTop';
function App() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navbarRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode, i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && 
          !navbarRef.current.contains(event.target) && 
          expanded) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [expanded]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <ScrollToTop />
      <Navbar 
        expand="lg" 
        className={`fixed-top shadow ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
        ref={navbarRef}
        expanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand fw-semibold'>
              <img 
                src={logo} 
                alt="React Restaurant Logo" 
                style={{ height: '70px', margin: '-10px', border: 'none', padding: '0px' }} 
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100' style={{alignItems:'end'}}>
              <Nav.Link 
                as={Link} 
                to='/' 
                className={`text-uppercase ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setExpanded(false)}
              >
                {t('home.home')}
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to='/menu' 
                className={`text-uppercase ${location.pathname === '/menu' ? 'active' : ''}`}
                onClick={() => setExpanded(false)}
              >
                {t('home.menu')}
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to='/about' 
                className={`text-uppercase ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={() => setExpanded(false)}
              >
                {t('home.about')}
              </Nav.Link>
              <Nav.Link 
                onClick={() => {
                  toggleLanguage();
                  setExpanded(false);
                }} 
                className='text-uppercase'
              >
                {i18n.language === 'en' ? 'AR' : 'EN'}
              </Nav.Link>
              <Nav.Link 
                onClick={() => {
                  toggleDarkMode();
                  setExpanded(false);
                }} 
                className='text-uppercase'
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <footer className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <p className='p-3 m-0 text-center'>{t('home.footerText')}</p>
      </footer>
    </div>
  );
}

export default App;