import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap, FaFlask, FaRunning, FaBus, FaLaptop, FaShieldAlt,
  FaTrophy, FaStar, FaBook, FaUsers, FaSchool, FaArrowRight, FaBell
} from 'react-icons/fa';
import Slider from 'react-slick';

/* ───────── Stats Bar ───────── */
const StatsBar = () => (
  <div className="stats-bar">
    <div className="container">
      <div className="row g-0">
        {[
          { number: '1500+', label: 'Students Enrolled' },
          { number: '80+', label: 'Expert Faculty' },
          { number: '15+', label: 'Years of Excellence' },
          { number: '95%', label: 'Board Pass Rate' },
        ].map((s, i) => (
          <div className="col-6 col-md-3 stat-item" key={i}>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ───────── About Snippet ───────── */
const AboutSnippet = () => (
  <section className="about-section">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <div className="about-img-wrapper">
            <img
              src="/images/WhatsApp Image 2026-05-06 at 9.52.34 AM.jpeg"
              alt="Tanishka International Public School Campus"
            />
            <div className="about-img-badge">
              <div className="years">15+</div>
              <div className="years-label">Years of Excellence</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-text">
            <p className="text-uppercase fw-600 mb-2" style={{color:'#c8a900',letterSpacing:'2px',fontSize:'0.82rem',fontWeight:600}}>About Our School</p>
            <h2 className="section-title">Shaping Bright Futures Since Our Founding</h2>
            <div className="section-divider left"></div>
            <p style={{color:'#555',lineHeight:'1.8',marginBottom:'1.5rem',fontSize:'0.95rem'}}>
              Tanishka International Public School is a premier CBSE-affiliated institution dedicated to providing world-class education in a nurturing environment. We believe every child is unique and has the potential to achieve greatness.
            </p>
            <p style={{color:'#555',lineHeight:'1.8',marginBottom:'2rem',fontSize:'0.95rem'}}>
              Our holistic approach combines rigorous academics with co-curricular activities, sports, and value-based education to develop well-rounded individuals ready for the challenges of the 21st century.
            </p>
            {[
              { icon: <FaGraduationCap />, title: 'CBSE Affiliated', desc: 'Nationally recognized board curriculum' },
              { icon: <FaTrophy />, title: 'Award Winning', desc: 'Multiple state & national achievements' },
              { icon: <FaUsers />, title: 'Expert Faculty', desc: '80+ experienced & dedicated teachers' },
            ].map((item, i) => (
              <div className="about-feature-item" key={i}>
                <div className="about-icon">{item.icon}</div>
                <div>
                  <h6 style={{color:'#003366',fontWeight:700,marginBottom:'2px'}}>{item.title}</h6>
                  <p style={{color:'#777',fontSize:'0.85rem',margin:0}}>{item.desc}</p>
                </div>
              </div>
            ))}
            <Link to="/about" className="btn mt-3 px-4 py-2" style={{
              background:'linear-gradient(135deg,#003366,#005599)',
              color:'white', borderRadius:'50px', fontWeight:600,
              display:'inline-flex', alignItems:'center', gap:'8px'
            }}>
              Discover More <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ───────── Features ───────── */
const FeaturesSection = () => {
  const features = [
    { icon: <FaGraduationCap />, title: 'Academic Excellence', desc: 'Rigorous CBSE curriculum with focus on conceptual clarity and critical thinking.' },
    { icon: <FaFlask />, title: 'Modern Laboratories', desc: 'State-of-the-art Science, Computer & Language labs for hands-on learning.' },
    { icon: <FaRunning />, title: 'Sports & Fitness', desc: 'Extensive sports facilities including courts, grounds, and trained coaches.' },
    { icon: <FaBus />, title: 'Safe Transport', desc: 'GPS-tracked school buses ensuring safe transportation across the city.' },
    { icon: <FaLaptop />, title: 'Smart Classrooms', desc: 'Digital-enabled classrooms with interactive boards for modern education.' },
    { icon: <FaShieldAlt />, title: 'Safe Environment', desc: 'CCTV surveillance and trained security personnel for student safety.' },
  ];
  return (
    <section className="features-section">
      <div className="container">
        <div className="text-center mb-5">
          <p style={{color:'#c8a900',fontWeight:600,letterSpacing:'2px',fontSize:'0.82rem',textTransform:'uppercase'}}>Why Choose Us</p>
          <h2 className="section-title">World-Class Facilities &amp; Programs</h2>
          <div className="section-divider"></div>
          <p style={{color:'#777',maxWidth:'560px',margin:'0 auto',fontSize:'0.93rem'}}>
            We provide a comprehensive learning environment equipped with the best resources to nurture talent and fuel ambition.
          </p>
        </div>
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────── Gallery ───────── */
const GallerySection = () => {
  const galleryImages = [
    { src: '/images/WhatsApp Image 2026-05-06 at 9.52.32 AM (2).jpeg', label: 'School Activities' },
    { src: '/images/WhatsApp Image 2026-05-06 at 9.52.34 AM (1).jpeg', label: 'Campus Life' },
    { src: '/images/WhatsApp Image 2026-05-06 at 9.52.34 AM (2).jpeg', label: 'Events & Celebrations' },
    { src: '/images/WhatsApp Image 2026-05-06 at 9.52.35 AM.jpeg', label: 'Sports & Fitness' },
    { src: '/images/WhatsApp Image 2026-05-06 at 9.52.33 AM.jpeg', label: 'Annual Function' },
    { src: '/images/WhatsApp Image 2026-05-06 at 9.52.33 AM (1).jpeg', label: 'Cultural Programs' },
  ];
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="text-center mb-5">
          <p style={{color:'#c8a900',fontWeight:600,letterSpacing:'2px',fontSize:'0.82rem',textTransform:'uppercase'}}>School Life</p>
          <h2 className="section-title">Glimpses of Our School</h2>
          <div className="section-divider"></div>
        </div>
        <div className="row g-3">
          {galleryImages.map((img, i) => (
            <div className="col-6 col-md-4" key={i}>
              <div className="gallery-item">
                <img src={img.src} alt={img.label} />
                <div className="gallery-overlay">
                  <span>{img.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────── Notices + Quick Links ───────── */
const NoticesSection = () => {
  const notices = [
    { date: ['12','May'], text: 'Admission forms for 2026-27 are now available. Apply before 30th June 2026.' },
    { date: ['10','May'], text: 'Annual Sports Day will be held on 26th May 2026. All parents are invited.' },
    { date: ['05','May'], text: 'Result of Class X & XII CBSE board examinations announced. Congratulations to all students.' },
    { date: ['01','May'], text: 'School will remain closed on 15th May 2025 on account of Buddha Purnima.' },
    { date: ['28','Apr'], text: 'Parent-Teacher Meeting scheduled for 20th May 2026. Please confirm attendance.' },
    { date: ['22','Apr'], text: 'Inter-school Science Olympiad registrations open. Contact class teacher for details.' },
  ];
  const quickLinks = [
    { icon: '📋', label: 'Admission Form' },
    { icon: '📅', label: 'Academic Calendar' },
    { icon: '💰', label: 'Fee Structure' },
    { icon: '📊', label: 'Exam Results' },
    { icon: '📚', label: 'Syllabus' },
    { icon: '🏆', label: 'Achievements' },
    { icon: '📰', label: 'Newsletter' },
    { icon: '📞', label: 'Contact Us' },
  ];
  return (
    <section className="notice-section">
      <div className="container">
        <div className="text-center mb-5">
          <p style={{color:'#c8a900',fontWeight:600,letterSpacing:'2px',fontSize:'0.82rem',textTransform:'uppercase'}}>Stay Updated</p>
          <h2 className="section-title">News &amp; Announcements</h2>
          <div className="section-divider"></div>
        </div>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="notice-card">
              <div className="notice-header">
                <FaBell /> Latest Notices &amp; Announcements
              </div>
              <ul className="notice-list">
                {notices.map((n, i) => (
                  <li className="notice-item" key={i}>
                    <div className="notice-date">
                      <div style={{fontSize:'1rem',fontWeight:800}}>{n.date[0]}</div>
                      <div>{n.date[1]}</div>
                    </div>
                    <a href="#!" onClick={e=>e.preventDefault()}>{n.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="notice-card h-100">
              <div className="notice-header"><FaBook /> Quick Access</div>
              <div className="p-3">
                <div className="row g-2">
                  {quickLinks.map((ql, i) => (
                    <div className="col-6" key={i}>
                      <div className="quick-link-card" style={{padding:'1rem 0.5rem'}}>
                        <span style={{fontSize:'1.5rem'}}>{ql.icon}</span>
                        <span style={{fontSize:'0.78rem',fontWeight:600,textAlign:'center'}}>{ql.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────── Testimonials ───────── */
const TestimonialsSection = () => {
  const testimonials = [
    { text: 'Tanishka International Public School has been a wonderful journey for my son. The teachers are incredibly dedicated and the facilities are excellent. We are proud parents!', name: 'Priya Sharma', role: 'Parent of Class V Student', initial: 'P' },
    { text: 'The school has given my daughter a strong foundation in academics as well as life skills. She has grown into a confident young woman, and I credit the school\'s environment for this.', name: 'Rajesh Kumar', role: 'Parent of Class VI Student', initial: 'R' },
    { text: 'What sets TIPS apart is their focus on individual attention. My child struggled initially, but the teachers worked patiently and now he is among the top performers.', name: 'Meena Gupta', role: 'Parent of Class VII Student', initial: 'M' },
    { text: 'Excellent school with a perfect blend of academics and extracurricular activities. My daughter loves going to school every day, which speaks volumes about the culture here.', name: 'Suresh Agarwal', role: 'Parent of Class VIII Student', initial: 'S' },
  ];
  const settings = { dots: true, infinite: true, speed: 600, slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 4500, responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }] };
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="text-center mb-5">
          <p style={{color:'#c8a900',fontWeight:600,letterSpacing:'2px',fontSize:'0.82rem',textTransform:'uppercase'}}>What Parents Say</p>
          <h2 className="section-title">Words from Our Community</h2>
          <div className="section-divider"></div>
        </div>
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i}>
              <div className="testimonial-card">
                <div className="testimonial-stars">{[...Array(5)].map((_, s) => <FaStar key={s} />)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

/* ───────── CTA Banner ───────── */
const CTASection = () => (
  <section className="cta-section">
    <div className="container text-center">
      <FaSchool size={48} style={{color:'#003366',marginBottom:'1rem',opacity:0.8}} />
      <h2 style={{fontSize:'2rem',fontWeight:800,marginBottom:'1rem'}}>Admissions Open for 2026–27 Academic Year</h2>
      <p style={{fontSize:'1.05rem',marginBottom:'2rem',maxWidth:'560px',margin:'0 auto 2rem'}}>
        Give your child the best start in life. Seats are limited — apply today and secure your child's future at Tanishka International Public School.
      </p>
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        <Link to="/contact" className="btn-cta">Apply for Admission</Link>
        <Link to="/about" className="btn btn-outline-dark px-4 py-2 rounded-pill fw-semibold">Learn More</Link>
      </div>
    </div>
  </section>
);

/* ───────── Home Page ───────── */
const Home = () => (
  <>
    <HeroSlider />
    <StatsBar />
    <AboutSnippet />
    <FeaturesSection />
    <GallerySection />
    <NoticesSection />
    <TestimonialsSection />
    <CTASection />
  </>
);

export default Home;
