import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Sparkles, Quote, Volume2, VolumeX } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      videoSrc: '/videos/testimonial-1.mp4',
      name: 'Ananya & Raas Community',
      role: 'Navratri Foundation Batch Student',
      quote: '"Raas Jalsa transformed my confidence on the Garba floor! The steps were broken down so simply."',
      tag: 'Garba Enthusiast',
    },
    {
      id: 2,
      videoSrc: '/videos/testimonial-2.mp4',
      name: 'Rohan & Hyderabad Squad',
      role: 'Group Course Participants',
      quote: '"We joined as a group of 5 and it was the best Navratri decision. High energy and authentic steps!"',
      tag: 'Group Learner',
    },
    {
      id: 3,
      videoSrc: '/videos/testimonial-3.mp4',
      name: 'Priya Patel',
      role: 'Dandiya Special Batch',
      quote: '"The stick rhythm drills and circle formations were incredible! Can\'t wait for Navratri 2026."',
      tag: 'Dandiya Lover',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  // Auto-play continuous timer: transitions one after another
  useEffect(() => {
    if (isPaused || activeModalIndex !== null) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, activeModalIndex, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openModal = (index) => {
    setActiveModalIndex(index);
    setIsMuted(false);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };

  const handleNextVideo = () => {
    setActiveModalIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevVideo = () => {
    setActiveModalIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      style={{
        padding: '100px 0',
        background: '#FAF4EB',
        color: 'var(--text-dark)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(197, 155, 39, 0.25)',
        borderBottom: '1px solid rgba(197, 155, 39, 0.25)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <span className="badge-festive" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="var(--color-rani-pink)" />
            REAL STUDENT TESTIMONIALS
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--color-purple)',
              marginBottom: '16px',
            }}
          >
            THE RAAS JALSA <span className="text-magenta-gradient">EXPERIENCE</span>
          </h2>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.1rem',
              letterSpacing: '0.04em',
              fontWeight: 600,
            }}
          >
            DON'T JUST TAKE OUR WORD FOR IT. <br />
            <span style={{ color: 'var(--color-magenta)' }}>LET THE COMMUNITY TELL THE STORY.</span>
          </p>
        </div>

        {/* Continuous Auto-Playing Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            position: 'relative',
            maxWidth: '440px',
            margin: '0 auto',
          }}
        >
          {/* Arrow Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            style={{
              position: 'absolute',
              left: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFF',
              border: '2px solid var(--color-gold)',
              color: 'var(--color-purple)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            style={{
              position: 'absolute',
              right: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFF',
              border: '2px solid var(--color-gold)',
              color: 'var(--color-purple)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Active Card Slider */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                background: '#2C1A1D',
                border: '2px solid rgba(197, 155, 39, 0.45)',
                boxShadow: '0 20px 45px rgba(44, 26, 29, 0.2)',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => openModal(currentIndex)}
            >
              {/* 9:16 Video Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '9/16',
                  maxHeight: '520px',
                  background: '#1A042B',
                  overflow: 'hidden',
                }}
              >
                <video
                  src={testimonials[currentIndex].videoSrc}
                  muted
                  loop
                  playsInline
                  autoPlay
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.88,
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 50%, rgba(35,16,20,0.95) 100%)',
                  }}
                />

                {/* Play Button Trigger Center */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-rani-pink), var(--color-magenta))',
                    border: '2px solid var(--color-gold-bright)',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(227, 28, 121, 0.45)',
                  }}
                >
                  <Play size={30} style={{ marginLeft: '4px' }} />
                </motion.div>

                {/* Top Tag */}
                <span
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    padding: '6px 14px',
                    borderRadius: '99px',
                    background: 'rgba(245, 235, 224, 0.94)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--color-gold)',
                    color: 'var(--color-purple)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                  }}
                >
                  {testimonials[currentIndex].tag}
                </span>

                {/* Bottom Card Tag - Only Batch of 2026 */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    textAlign: 'center',
                    zIndex: 10,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '8px 22px',
                      borderRadius: '99px',
                      background: 'rgba(245, 235, 224, 0.94)',
                      backdropFilter: 'blur(10px)',
                      border: '1.5px solid var(--color-gold)',
                      color: 'var(--color-purple)',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    }}
                  >
                    Batch of 2026
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: currentIndex === idx ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '99px',
                  background: currentIndex === idx ? 'var(--color-rani-pink)' : 'rgba(197, 155, 39, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Video Modal */}
      <AnimatePresence>
        {activeModalIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(35, 16, 20, 0.95)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={closeModal}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '9/16',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '2px solid var(--color-gold)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                background: '#000',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={testimonials[activeModalIndex].videoSrc}
                autoPlay
                controls
                playsInline
                muted={isMuted}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />

              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(245, 235, 224, 0.9)',
                  border: '1.5px solid var(--color-gold)',
                  color: 'var(--color-purple)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 20,
                }}
                aria-label="Close video"
              >
                <X size={20} />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(245, 235, 224, 0.9)',
                  border: '1.5px solid var(--color-gold)',
                  color: 'var(--color-purple)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 20,
                }}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <button
                onClick={handlePrevVideo}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(245, 235, 224, 0.85)',
                  border: '1px solid var(--color-gold)',
                  color: 'var(--color-purple)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={handleNextVideo}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(245, 235, 224, 0.85)',
                  border: '1px solid var(--color-gold)',
                  color: 'var(--color-purple)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
