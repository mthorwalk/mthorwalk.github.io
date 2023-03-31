import './App.css';
import Navbar from './navbar';
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience'
import Contact from './pages/contact'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
