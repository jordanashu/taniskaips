import React from 'react';
import Slider from 'react-slick';

const slides = [
  {
    image: '/images/WhatsApp Image 2026-05-06 at 9.52.33 AM.jpeg',
    badge: 'Welcome to Excellence',
    title: 'Tanishka International Public School',
    subtitle: 'Where Every Child\'s Potential is Nurtured and Excellence is a Way of Life',
    btn1: { label: 'Explore School', link: '/about' },
    btn2: { label: 'Contact Us', link: '/contact' },
  },
  {
    image: '/images/WhatsApp Image 2026-05-06 at 9.52.32 AM.jpeg',
    badge: 'Admissions Open 2025–26',
    title: 'Building Leaders of Tomorrow',
    subtitle: 'Join our vibrant community of learners, innovators, and future leaders',
    btn1: { label: 'Apply Now', link: '/contact' },
    btn2: { label: 'Learn More', link: '/about' },
  },
  {
    image: '/images/WhatsApp Image 2026-05-06 at 9.52.33 AM (1).jpeg',
    badge: 'CBSE Affiliated',
    title: 'Quality Education That Transforms Lives',
    subtitle: 'Experienced faculty, modern infrastructure, and a curriculum designed for 21st century success',
    btn1: { label: 'Our Vision', link: '/about' },
    btn2: { label: 'Mandatory Disclosure', link: '/mandatory-disclosure' },
  },
  {
    image: '/images/WhatsApp Image 2026-05-06 at 9.52.32 AM (1).jpeg',
    badge: 'Co-Curricular Excellence',
    title: 'Holistic Development Beyond Academics',
    subtitle: 'Sports, arts, technology and life skills — empowering students to thrive in all walks of life',
    btn1: { label: 'Gallery', link: '/' },
    btn2: { label: 'Contact Us', link: '/contact' },
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <section className="hero-slider-section">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div className="hero-slide">
              <img src={slide.image} alt={slide.title} />
              <div className="hero-overlay">
                <div className="container">
                  <div className="hero-content animate-fadeInLeft">
                    <span className="hero-badge">{slide.badge}</span>
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <div className="d-flex flex-wrap gap-3">
                      <a href={slide.btn1.link} className="btn-hero-primary">{slide.btn1.label}</a>
                      {/* <a href={slide.btn2.link} className="btn-hero-outline">{slide.btn2.label}</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
