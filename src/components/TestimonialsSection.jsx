import React, { useState } from 'react';
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

  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

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
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
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

        {/* Video Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#2C1A1D',
                border: '1.5px solid rgba(197, 155, 39, 0.35)',
                boxShadow: '0 20px 40px rgba(44, 26, 29, 0.15)',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => openModal(index)}
            >
              {/* 9:16 Video Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '9/16',
                  maxHeight: '480px',
                  background: '#1A042B',
                  overflow: 'hidden',
                }}
              >
                <video
                  src={item.videoSrc}
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
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 60%, rgba(35,16,20,0.95) 100%)',
                  }}
                />

                {/* Play Button Trigger Center */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-rani-pink), var(--color-magenta))',
                    border: '2px solid var(--color-gold-bright)',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(227, 28, 121, 0.4)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Play size={28} style={{ marginLeft: '4px' }} />
                </div>

                {/* Top Tag */}
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 14px',
                    borderRadius: '99px',
                    background: 'rgba(245, 235, 224, 0.92)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--color-gold)',
                    color: 'var(--color-purple)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                  }}
                >
                  {item.tag}
                </span>

                {/* Bottom Student Details */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                  }}
                >
                  <Quote size={20} color="var(--color-gold-bright)" style={{ marginBottom: '6px', opacity: 0.9 }} />
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.92)', fontStyle: 'italic', marginBottom: '8px', lineHeight: 1.4 }}>
                    {item.quote}
                  </p>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gold-bright)' }}>
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
