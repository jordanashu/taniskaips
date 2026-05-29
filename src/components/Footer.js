import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
  FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin,
  FaChevronRight
} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/mandatory-disclosure', label: 'Mandatory Disclosure' },
  ];

  const usefulLinks = [
    { href: 'https://cbse.gov.in', label: 'CBSE Website' },
    { href: 'https://ncert.nic.in', label: 'NCERT' },
    { href: 'https://www.education.gov.in', label: 'Ministry of Education' },
    { href: '#', label: 'Fee Structure' },
    { href: '#', label: 'Academic Calendar' },
    { href: '#', label: 'Results' },
  ];

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-brand mb-3">
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
                <div style={{
                  width:'50px',height:'50px',borderRadius:'50%',
                  background:'linear-gradient(135deg,#c8a900,#f0d060)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  flexShrink:0
                }}>
                  <span style={{color:'#003366',fontWeight:'900',fontSize:'1.3rem',fontFamily:'Playfair Display,serif'}}>T</span>
                </div>
                <div>
                  <div className="main-name">Tanishka International</div>
                  <div className="main-name">Public School</div>
                  <div className="sub-name">tanishkaips.com</div>
                </div>
              </div>
            </div>
            <p className="footer-desc">
             Rooted in strong academics, guided by compassion, and driven by the belief that every student is extraordinary.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to}>
                    <FaChevronRight size={10} style={{color:'#c8a900'}} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Useful Links</h6>
            <ul className="footer-links">
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <FaChevronRight size={10} style={{color:'#c8a900'}} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-heading">Contact Us</h6>
            <div className="footer-contact-item">
              <FaMapMarkerAlt className="footer-contact-icon" />
              <p>Tanishka International Public School,<br />Bareilly, State - Uttar Pradesh,243001<br />India</p>
            </div>
            <div className="footer-contact-item">
              <FaPhone className="footer-contact-icon" />
              <p>
                <a href="tel:+911234567890" style={{color:'rgba(255,255,255,0.65)'}}>+91 94587 51691</a><br />
                <a href="tel:+910987654321" style={{color:'rgba(255,255,255,0.65)'}}>+91 94587 51691</a>
              </p>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-contact-icon" />
              <p>
                <a href="mailto:info@tanishkaips.com" style={{color:'rgba(255,255,255,0.65)'}}>info@tanishkaips.com</a><br />
                <a href="mailto:principal@tanishkaips.com" style={{color:'rgba(255,255,255,0.65)'}}>principal@tanishkaips.com</a>
              </p>
            </div>
            <div className="footer-contact-item">
              <FaClock className="footer-contact-icon" />
              <p>Mon – Sat: 8:00 AM – 4:00 PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom mt-4">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <span>
              © {new Date().getFullYear()} Tanishka International Public School. All Rights Reserved. |{' '}
              <a href="https://tanishkaips.com">tanishkaips.com</a>
            </span>
            <span style={{display:'flex',alignItems:'center',gap:'4px'}}>
              Made By Ashutosh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
