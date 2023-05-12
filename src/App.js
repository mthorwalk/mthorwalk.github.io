import './App.css';
import Navbar from './navbar';
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience'
import Contact from './pages/contact'
import Spotify from './pages/project3';
import { Routes, Route } from "react-router-dom";
import Ecommerce from './pages/project2';
import NETrust from './pages/project1';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/project1" element={<NETrust />} />
        <Route path ="/project2" element={<Ecommerce />} />
        <Route path ="/project3" element={<Spotify />} />
    </Routes>
    </>
  );
}

export default App;
