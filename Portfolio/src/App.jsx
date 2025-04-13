import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import HeroSec from './components/HeroSec';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Enrichment from './components/Enrichment';
import Footer from './components/Footer';
import MiniProject from './components/MiniProject';
import FrontEnd from './components/FrontEnd';
import FullStack from './components/FullStack';
import ScrollToTop from './components/ScrollTop';

function MainLayout(){
  return(
    <>
      <NavBar />
      <HeroSec />
      <AboutMe />
      <Skills />
      <Projects />
      <Enrichment />
      <Footer />
    </>
  )
}

function App() {
  return (

    <Router>  {/* Router should wrap everything */}
        <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/mini-projects' element={<MiniProject />} />
        <Route path='/front-end-projects' element={<FrontEnd />} />
        <Route path='/full-stack-projects' element={<FullStack />} />
      </Routes>
    </Router>
  );
}

export default App;
