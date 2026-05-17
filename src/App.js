import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="*" element={
              <div style={{padding:'100px 20px',textAlign:'center'}}>
                <h2 style={{color:'#003366',fontSize:'3rem',fontWeight:800}}>404</h2>
                <p style={{color:'#666'}}>Page not found</p>
                <a href="/" style={{color:'#003366',fontWeight:600}}>← Back to Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
