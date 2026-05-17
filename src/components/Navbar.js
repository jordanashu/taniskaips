import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/mandatory-disclosure', label: 'Mandatory Public Disclosure' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div className="d-flex align-items-center gap-3">
              <span className="d-flex align-items-center gap-1">
                <FaPhone size={11} style={{color:'#c8a900'}} />
                <a href="tel:+911234567890">+91 94587 51691</a>
              </span>
              <span className="d-none d-md-flex align-items-center gap-1">
                <FaEnvelope size={11} style={{color:'#c8a900'}} />
                <a href="mailto:info@tanishkaips.com">principal@tanishkaips.com</a>
              </span>
            </div>
            <div className="d-none d-lg-flex align-items-center gap-2">
              <span className="d-flex align-items-center gap-1">
                <FaMapMarkerAlt size={11} style={{color:'#c8a900'}} />
                <span>tanishkaips.com</span>
              </span>
              <div style={{width:'1px',height:'14px',background:'rgba(255,255,255,0.2)'}}></div>
              <div className="d-flex gap-2">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`main-navbar navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}
           style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.15)' : '0 2px 20px rgba(0,0,0,0.08)' }}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <div className="navbar-brand-wrapper">
              <div className="school-logo" style={{
                width:'60px', height:'60px', borderRadius:'50%',
                border:'3px solid #c8a900', overflow:'hidden',
                display:'flex', alignItems:'center', justifyContent:'center',
                background:'linear-gradient(135deg,#003366,#005599)',
                flexShrink: 0
              }}>
                <span style={{color:'white',fontWeight:'800',fontSize:'1.4rem',fontFamily:'Playfair Display,serif'}}>T</span>
              </div>
              <div className="school-name-nav">
                <span className="main-name">Tanishka International</span>
                <span className="main-name" style={{fontSize:'0.95rem'}}>Public School</span>
                <span className="sub-name">tanishkaips.com</span>
              </div>
            </div>
          </Link>

          <button
            className="navbar-toggler border-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{color:'#003366', fontSize:'1.4rem'}}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {navLinks.map(link => (
                <li className="nav-item" key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link nav-link-custom ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="nav-item ms-lg-3">
                <Link to="/contact" className="btn btn-sm px-4 py-2" style={{
                  background:'linear-gradient(135deg,#003366,#005599)',
                  color:'white', borderRadius:'50px', fontWeight:'600',
                  fontSize:'0.85rem', transition:'all 0.3s ease'
                }}>
                  Admissions Open
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
