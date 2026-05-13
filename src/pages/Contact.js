import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const PageHeader = ({ title, subtitle, breadcrumb }) => (
  <div className="page-header">
    <div className="container" style={{position:'relative',zIndex:1}}>
      <h1 className="mb-2">{title}</h1>
      <p className="mb-3">{subtitle}</p>
      <nav>
        <ol className="breadcrumb justify-content-center breadcrumb-custom mb-0">
          <li className="breadcrumb-item"><Link to="/" style={{color:'rgba(255,255,255,0.7)'}}>Home</Link></li>
          {breadcrumb.map((b, i) => (
            <li key={i} className={`breadcrumb-item ${i === breadcrumb.length-1?'active':''}`}>{b}</li>
          ))}
        </ol>
      </nav>
    </div>
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name:'', email:'', phone:'', subject:'', message:'' });
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, color: 'gold', title: 'Our Address', lines: ['Tanishka International Public School,', 'Your City, State – PIN Code, India'] },
    { icon: <FaPhone />, color: '', title: 'Phone Numbers', lines: ['+91 12345 67890', '+91 09876 54321'] },
    { icon: <FaEnvelope />, color: '', title: 'Email Address', lines: ['info@tanishkaips.com', 'principal@tanishkaips.com'] },
    { icon: <FaClock />, color: 'gold', title: 'Office Hours', lines: ['Mon – Fri: 8:00 AM – 4:00 PM', 'Saturday: 8:00 AM – 1:00 PM', 'Sunday: Closed'] },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to us anytime."
        breadcrumb={['Contact Us']}
      />

      <section className="contact-section">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-5">
              <p style={{color:'#c8a900',fontWeight:600,letterSpacing:'2px',fontSize:'0.82rem',textTransform:'uppercase'}}>Get In Touch</p>
              <h2 className="section-title" style={{marginBottom:'0.5rem'}}>We're Here to Help</h2>
              <div className="section-divider left"></div>
              <p style={{color:'#666',fontSize:'0.93rem',lineHeight:'1.8',marginBottom:'2rem'}}>
                Have questions about admissions, academics, or anything else? Our team is ready to assist you. Reach out through any of the channels below.
              </p>

              <div className="contact-card p-0" style={{border:'none',boxShadow:'none'}}>
                {contactInfo.map((item, i) => (
                  <div className="contact-info-item" key={i}>
                    <div className={`contact-info-icon ${item.color}`}>{item.icon}</div>
                    <div>
                      <h6 style={{color:'#003366',fontWeight:700,marginBottom:'4px'}}>{item.title}</h6>
                      {item.lines.map((line, j) => (
                        <p key={j} style={{color:'#666',fontSize:'0.88rem',margin:'1px 0'}}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div style={{marginTop:'1.5rem'}}>
                <h6 style={{color:'#003366',fontWeight:700,marginBottom:'1rem'}}>Follow Us</h6>
                <div style={{display:'flex',gap:'10px'}}>
                  {['📘','🐦','📺','📸','💼'].map((icon, i) => (
                    <a key={i} href="#!" onClick={e=>e.preventDefault()} style={{
                      width:'40px',height:'40px',borderRadius:'50%',background:'#f4f7fc',
                      border:'2px solid rgba(0,51,102,0.1)',display:'flex',alignItems:'center',
                      justifyContent:'center',fontSize:'1.1rem',transition:'all 0.3s ease',
                      textDecoration:'none'
                    }}
                    onMouseOver={e=>{e.currentTarget.style.background='#003366';}}
                    onMouseOut={e=>{e.currentTarget.style.background='#f4f7fc';}}>
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-card">
                <h3 style={{color:'#003366',fontWeight:700,marginBottom:'0.5rem'}}>Send Us a Message</h3>
                <p style={{color:'#888',fontSize:'0.88rem',marginBottom:'1.5rem'}}>Fill the form below and we'll get back to you within 24 hours.</p>

                {submitted && (
                  <div className="alert" style={{background:'#d4edda',border:'1px solid #c3e6cb',borderRadius:'12px',color:'#155724',padding:'1rem',marginBottom:'1.5rem'}}>
                    ✅ Thank you! Your message has been sent successfully. We'll contact you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label style={{fontWeight:600,fontSize:'0.85rem',color:'#003366',marginBottom:'6px'}}>Full Name *</label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        className="form-control form-control-custom" placeholder="Your full name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{fontWeight:600,fontSize:'0.85rem',color:'#003366',marginBottom:'6px'}}>Email Address *</label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange} required
                        className="form-control form-control-custom" placeholder="your@email.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{fontWeight:600,fontSize:'0.85rem',color:'#003366',marginBottom:'6px'}}>Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="form-control form-control-custom" placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{fontWeight:600,fontSize:'0.85rem',color:'#003366',marginBottom:'6px'}}>Subject *</label>
                      <select
                        name="subject" value={form.subject} onChange={handleChange} required
                        className="form-control form-control-custom"
                        style={{appearance:'auto'}}
                      >
                        <option value="">Select subject</option>
                        <option>Admission Enquiry</option>
                        <option>Fee Structure</option>
                        <option>Academic Information</option>
                        <option>Transport Information</option>
                        <option>General Enquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label style={{fontWeight:600,fontSize:'0.85rem',color:'#003366',marginBottom:'6px'}}>Your Message *</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required rows={5}
                        className="form-control form-control-custom" placeholder="Type your message here..."
                        style={{resize:'vertical'}}
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-submit" style={{cursor:'pointer'}}>
                        <span style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'8px'}}>
                          <FaPaperPlane /> Send Message
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{padding:'0 0 80px'}}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Find Us on Map</h2>
            <div className="section-divider"></div>
          </div>
          <div className="map-wrapper" style={{height:'400px',background:'#e8f0fe',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'16px'}}>
            <div style={{textAlign:'center'}}>
              <FaMapMarkerAlt style={{fontSize:'3rem',color:'#003366',marginBottom:'1rem'}} />
              <h5 style={{color:'#003366',fontWeight:700}}>Tanishka International Public School</h5>
              <p style={{color:'#666',fontSize:'0.9rem'}}>Your City, State – PIN Code, India</p>
              {/* <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display:'inline-block',marginTop:'0.5rem',
                  background:'linear-gradient(135deg,#003366,#005599)',
                  color:'white',padding:'10px 24px',borderRadius:'50px',
                  fontWeight:600,fontSize:'0.85rem'
                }}
              >
                Open in Google Maps
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
