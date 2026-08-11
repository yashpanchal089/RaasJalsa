import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function GarbaCarousel() {
  const slides = [
    {
      id: 1,
      image: '/images/community-1.jpg',
      tag: 'COMMUNITY',
      title: 'Warm Festive Garba Family',
      subtitle: 'Experience authentic Gujarati Garba culture with our energetic studio community.',
      fit: 'cover',
      objectPosition: 'center',
    },
    {
      id: 2,
      image: '/images/community-2.jpg',
      tag: 'DANDIYA DRILLS',
      title: 'Precision Dandiya & Stick Beats',
      subtitle: 'Learn stick coordination, partner formations, speed variation and signature moves.',
      fit: 'cover',
      objectPosition: 'center',
    },
    {
      id: 3,
      image: '/images/community-3.jpg',
      tag: 'STUDIO BATCH',
      title: 'Interactive Studio Sessions',
      subtitle: 'Step-by-step guidance designed for all skill levels from complete beginners to advanced.',
      fit: 'cover',
      objectPosition: 'center 30%',
    },
    {
      id: 4,
      image: '/images/community-4.jpg',
      tag: 'NAVRATRI READY',
      title: 'High Energy Raas Celebrations',
      subtitle: 'Build confidence on the dance floor and express yourself with festive elegance.',
      fit: 'cover',
      objectPosition: 'center',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="gallery"
      style={{
        padding: '100px 0',
        background: '#FAF4EB',
        color: 'var(--text-dark)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(197, 155, 39, 0.25)',
        borderBottom: '1px solid rgba(197, 155, 39, 0.25)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 28px auto' }}>
          <span className="badge-festive" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="var(--color-rani-pink)" />
            IMMERSIVE VISUAL GALLERY
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--color-purple)',
              marginBottom: '16px',
            }}
          >
            Feel the Energy of <span className="text-magenta-gradient">Raas Jalsa</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            High-energy Garba steps, decorated Dandiya rhythms, and a passionate community preparing for Navratri 2026.
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto' }}>
          <div
            className="carousel-card-container"
            style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1.5px solid rgba(197, 155, 39, 0.4)',
              boxShadow: '0 20px 45px rgba(44, 26, 29, 0.12)',
              background: '#2C1A1D',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', height: '100%', position: 'relative' }}
              >
                {/* Ambient Blurred Background for seamless fill */}
                <img
                  src={slides[currentIndex].image}
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'blur(20px) brightness(0.55)',
                    transform: 'scale(1.12)',
                  }}
                />

                {/* Main Foreground Image */}
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    objectFit: slides[currentIndex].fit || 'cover',
                    objectPosition: slides[currentIndex].objectPosition || 'center',
                  }}
                />

                {/* Gradient Vignette Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(44,26,29,0.05) 0%, rgba(44,26,29,0.3) 50%, rgba(35,16,20,0.92) 100%)',
                  }}
                />

                {/* Content Overlay */}
                <div
                  className="carousel-content-box"
                  style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '40px',
                    right: '40px',
                    zIndex: 10,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span
                      style={{
                        padding: '6px 16px',
                        borderRadius: '99px',
                        background: 'linear-gradient(135deg, var(--color-rani-pink), var(--color-magenta))',
                        color: '#FFF',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                      }}
                    >
                      {slides[currentIndex].tag}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-gold-bright)', fontWeight: 600 }}>
                      0{slides[currentIndex].id} / 0{slides.length}
                    </span>
                  </div>

                  <h3
                    className="carousel-title"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                      color: '#FFFFFF',
                      marginBottom: '8px',
                    }}
                  >
                    {slides[currentIndex].title}
                  </h3>

                  <p
                    className="carousel-subtitle"
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1.05rem',
                      maxWidth: '600px',
                    }}
                  >
                    {slides[currentIndex].subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                top: '50%',
                left: '20px',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(245, 235, 224, 0.9)',
                border: '1.5px solid var(--color-gold)',
                color: 'var(--color-purple)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                zIndex: 20,
                transition: 'all 0.3s ease',
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: '20px',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(245, 235, 224, 0.9)',
                border: '1.5px solid var(--color-gold)',
                color: 'var(--color-purple)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                zIndex: 20,
                transition: 'all 0.3s ease',
              }}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Pagination */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '28px',
            }}
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '36px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: index === currentIndex ? 'var(--color-magenta)' : 'rgba(138, 11, 93, 0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .carousel-card-container {
          height: 520px;
        }

        @media (max-width: 768px) {
          .carousel-card-container {
            height: 440px !important;
          }
          .carousel-content-box {
            bottom: 20px !important;
            left: 20px !important;
            right: 20px !important;
          }
          .carousel-title {
            font-size: 1.45rem !important;
          }
          .carousel-subtitle {
            font-size: 0.88rem !important;
          }
        }

        @media (max-width: 480px) {
          .carousel-card-container {
            height: 380px !important;
          }
          .carousel-content-box {
            bottom: 16px !important;
            left: 14px !important;
            right: 14px !important;
          }
          .carousel-title {
            font-size: 1.25rem !important;
          }
          .carousel-subtitle {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
