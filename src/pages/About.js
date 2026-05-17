import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaEye, FaBullseye, FaHeart, FaArrowRight } from 'react-icons/fa';

const PageHeader = ({ title, subtitle, breadcrumb }) => (
  <div className="page-header">
    <div className="container" style={{position:'relative',zIndex:1}}>
      <h1 className="mb-2">{title}</h1>
      <p className="mb-3">{subtitle}</p>
      <nav>
        <ol className="breadcrumb justify-content-center breadcrumb-custom mb-0">
          <li className="breadcrumb-item"><Link to="/" style={{color:'rgba(255,255,255,0.7)'}}>Home</Link></li>
          {breadcrumb.map((b, i) => (
            <li key={i} className={`breadcrumb-item ${i === breadcrumb.length - 1 ? 'active' : ''}`}>{b}</li>
          ))}
        </ol>
      </nav>
    </div>
  </div>
);

const About = () => {
  // const team = [
  //   { name: 'Dr. Ramesh Sharma', role: 'Principal', initial: 'R', desc: 'Ph.D. in Education with 25+ years of leadership experience in CBSE institutions.' },
  //   { name: 'Mrs. Anita Verma', role: 'Vice Principal', initial: 'A', desc: 'M.Ed. with specialization in curriculum development and student welfare.' },
  //   { name: 'Mr. Sunil Gupta', role: 'Head of Academics', initial: 'S', desc: 'M.Sc. Mathematics, State-level best teacher award winner with 20 years experience.' },
  //   { name: 'Mrs. Kavita Singh', role: 'Head of Co-Curriculars', initial: 'K', desc: 'Trained in performing arts, leading the sports & cultural development programs.' },
  // ];

  const values = [
    { icon: '🎓', title: 'Academic Excellence', desc: 'Maintaining the highest standards of academic achievement through innovative teaching methods.' },
    { icon: '🌱', title: 'Holistic Growth', desc: 'Developing well-rounded individuals through sports, arts, and extracurricular activities.' },
    { icon: '🤝', title: 'Integrity & Ethics', desc: 'Instilling strong values, moral character, and ethical behavior in every student.' },
    { icon: '🌍', title: 'Global Perspective', desc: 'Preparing students to be responsible global citizens in an interconnected world.' },
    { icon: '💡', title: 'Innovation', desc: 'Encouraging creative thinking, problem-solving and technological literacy.' },
    { icon: '❤️', title: 'Inclusivity', desc: 'Creating an inclusive environment where every student belongs and thrives.' },
  ];

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey, mission, and the people who make us great"
        breadcrumb={['About Us']}
      />

      {/* Mission Vision */}
      <section className="about-page-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Mission &amp; Vision</h2>
            <div className="section-divider"></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="vision-mission-card">
                <div style={{fontSize:'2.5rem',marginBottom:'1rem'}}><FaEye style={{color:'#003366'}}/></div>
                <h4>Our Vision</h4>
                <p style={{color:'#666',fontSize:'0.9rem',lineHeight:'1.8'}}>
                  To be a world-class educational institution that transforms students into responsible, compassionate, and innovative global citizens equipped to lead in the 21st century.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-mission-card">
                <div style={{fontSize:'2.5rem',marginBottom:'1rem'}}><FaBullseye style={{color:'#c8a900'}}/></div>
                <h4>Our Mission</h4>
                <p style={{color:'#666',fontSize:'0.9rem',lineHeight:'1.8'}}>
                  To provide quality education that nurtures intellectual curiosity, builds character, and empowers every student to realize their full potential through excellence in teaching, infrastructure, and holistic development.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-mission-card">
                <div style={{fontSize:'2.5rem',marginBottom:'1rem'}}><FaHeart style={{color:'#e63946'}}/></div>
                <h4>Our Philosophy</h4>
                <p style={{color:'#666',fontSize:'0.9rem',lineHeight:'1.8'}}>
                  We believe education is not merely about academic achievement but about shaping individuals who contribute positively to society. Every child is unique and deserves personalized attention and encouragement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Detail */}
      <section style={{padding:'80px 0',background:'#f4f7fc'}}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div style={{borderRadius:'20px',overflow:'hidden',boxShadow:'0 20px 60px rgba(0,0,0,0.15)'}}>
                <img src="/images/WhatsApp Image 2026-05-06 at 9.52.32 AM (1).jpeg" alt="School Building" style={{width:'100%',height:'420px',objectFit:'cover'}} />
              </div>
            </div>
            <div className="col-lg-6">
              <p style={{color:'#c8a900',fontWeight:600,letterSpacing:'2px',fontSize:'0.82rem',textTransform:'uppercase'}}>Our Story</p>
              <h2 className="section-title" style={{marginBottom:'1rem'}}>A Legacy of Excellence in Education</h2>
              <div className="section-divider left"></div>
              <p style={{color:'#555',lineHeight:'1.8',fontSize:'0.93rem',marginBottom:'1rem'}}>
                Tanishka International Public School was established with a clear purpose: to create an institution where academic excellence meets character development. Since our founding, we have grown to become one of the most respected schools in the region.
              </p>
              <p style={{color:'#555',lineHeight:'1.8',fontSize:'0.93rem',marginBottom:'1.5rem'}}>
                Our CBSE affiliation ensures that our students receive a nationally recognized education while our innovative teaching methodologies prepare them for the future. With over 1,500 students and 80+ dedicated faculty members, we are committed to making a difference one student at a time.
              </p>
              {['CBSE Affiliated & Nationally Recognized','Modern Infrastructure & Smart Classrooms','Experienced & Dedicated Faculty Team','Comprehensive Co-curricular Programs','Safe & Nurturing Learning Environment'].map((item, i) => (
                <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
                  <FaCheckCircle style={{color:'#c8a900',flexShrink:0}} />
                  <span style={{fontSize:'0.88rem',color:'#444'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{padding:'80px 0',background:'white'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Core Values</h2>
            <div className="section-divider"></div>
          </div>
          <div className="row g-4">
            {values.map((v, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="feature-card">
                  <div style={{fontSize:'2.5rem',marginBottom:'1rem'}}>{v.icon}</div>
                  <h5>{v.title}</h5>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      {/* <section style={{padding:'80px 0',background:'#f4f7fc'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Leadership Team</h2>
            <div className="section-divider"></div>
            <p style={{color:'#777',maxWidth:'540px',margin:'0 auto',fontSize:'0.93rem'}}>
              Guided by experienced educators who are passionate about transforming lives through quality education.
            </p>
          </div>
          <div className="row g-4">
            {team.map((member, i) => (
              <div className="col-sm-6 col-lg-3" key={i}>
                <div className="feature-card text-center">
                  <div style={{
                    width:'80px',height:'80px',borderRadius:'50%',margin:'0 auto 1rem',
                    background:'linear-gradient(135deg,#003366,#005599)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    color:'white',fontSize:'1.8rem',fontWeight:700,fontFamily:'Playfair Display,serif'
                  }}>
                    {member.initial}
                  </div>
                  <h5 style={{color:'#003366',fontSize:'1rem',marginBottom:'4px'}}>{member.name}</h5>
                  <p style={{color:'#c8a900',fontWeight:600,fontSize:'0.8rem',marginBottom:'0.7rem'}}>{member.role}</p>
                  <p style={{fontSize:'0.82rem',color:'#666'}}>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery snippet */}
      <section style={{padding:'80px 0',background:'white'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Campus</h2>
            <div className="section-divider"></div>
          </div>
          <div className="row g-3">
            {[
              '/images/WhatsApp Image 2026-05-06 at 9.52.34 AM (1).jpeg',
              '/images/WhatsApp Image 2026-05-06 at 9.52.34 AM (2).jpeg',
              '/images/WhatsApp Image 2026-05-06 at 9.52.35 AM.jpeg',
              '/images/WhatsApp Image 2026-05-06 at 9.52.32 AM (2).jpeg',
            ].map((src, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="gallery-item">
                  <img src={src} alt={`Campus ${i+1}`} style={{height:'200px'}} />
                  <div className="gallery-overlay"><span>Campus Life</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'60px 0',background:'linear-gradient(135deg,#003366,#005599)',textAlign:'center'}}>
        <div className="container">
          <h2 style={{color:'white',fontSize:'2rem',fontWeight:800,marginBottom:'1rem'}}>Ready to Join Our School Family?</h2>
          <p style={{color:'rgba(255,255,255,0.8)',marginBottom:'2rem',maxWidth:'480px',margin:'0 auto 2rem'}}>
            Admissions for 2026-27 are open. Contact us today to learn more about our programs.
          </p>
          <Link to="/contact" style={{
            background:'linear-gradient(135deg,#c8a900,#f0d060)',
            color:'#003366',padding:'13px 32px',borderRadius:'50px',
            fontWeight:700,display:'inline-flex',alignItems:'center',gap:'8px'
          }}>
            Get in Touch <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
