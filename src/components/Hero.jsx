import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, ArrowRight, Award, Phone, Zap, Music } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenReserve }) {
  const [activeSound, setActiveSound] = useState('');
  const [clapCount, setClapCount] = useState(0);
  const [dandiyaCount, setDandiyaCount] = useState(0);
  const currentAudioRef = useRef(null);

  const playAudioSound = (type, e) => {
    if (e) e.stopPropagation();

    // Immediately stop any currently playing audio track
    if (currentAudioRef.current) {
      try {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
      } catch (err) {
        console.error(err);
      }
    }

    const soundFile = type === 'clap' ? '/Music/Clap.mp3' : '/Music/Dandiya.mp3';

    if (type === 'clap') {
      setClapCount((prev) => prev + 1);
    } else {
      setDandiyaCount((prev) => prev + 1);
    }

    setActiveSound(type);
    setTimeout(() => setActiveSound(''), 500);

    try {
      const audio = new Audio(soundFile);
      currentAudioRef.current = audio;
      audio.play().catch((err) => console.log('Audio error:', err));
    } catch (err) {
      console.error(err);
    }

    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: type === 'clap' ? 40 : 35,
        spread: 65,
        origin: { x, y },
        colors:
          type === 'clap'
            ? ['#E31C79', '#8A0B5D', '#D4AF37', '#FFF']
            : ['#D4AF37', '#0D9488', '#D95D09', '#E31C79'],
        scalar: 0.9,
      });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '90px',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(170deg, #F5EBE0 0%, #F4ECE1 40%, #EFE3D3 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Animated Floating Particles */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + '%',
              y: '110%',
              opacity: 0,
              scale: Math.random() * 0.6 + 0.4,
            }}
            animate={{
              y: '-10%',
              opacity: [0, 0.7, 0.7, 0],
              rotate: 360,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              width: i % 2 === 0 ? '12px' : '8px',
              height: i % 2 === 0 ? '12px' : '8px',
              borderRadius: '50%',
              background: i % 3 === 0 ? 'var(--color-gold)' : i % 3 === 1 ? 'var(--color-rani-pink)' : 'var(--color-magenta)',
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Interactive Rotating Garba Ring & Mandala */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-8%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          border: '1.5px dashed rgba(197, 155, 39, 0.3)',
          background: 'radial-gradient(circle, rgba(227, 28, 121, 0.05) 0%, rgba(197, 155, 39, 0.04) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <div style={{ position: 'absolute', inset: '40px', borderRadius: '50%', border: '1px dotted rgba(138, 11, 93, 0.25)' }} />
        <div style={{ position: 'absolute', inset: '100px', borderRadius: '50%', border: '1.5px dashed rgba(197, 155, 39, 0.35)' }} />
      </motion.div>

      {/* Floating Animated Dandiya Sticks Graphic Elements */}
      <motion.div
        animate={{
          y: [-14, 14, -14],
          rotate: [-18, -12, -18],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '22%',
          left: '2%',
          pointerEvents: 'none',
          zIndex: 3,
          opacity: 0.85,
        }}
      >
        <div
          style={{
            width: '200px',
            height: '16px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #E31C79 0%, #D4AF37 40%, #8A0B5D 100%)',
            boxShadow: '0 10px 25px rgba(227, 28, 121, 0.35)',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', left: '18px', top: 0, bottom: 0, width: '7px', background: '#FFF' }} />
          <div style={{ position: 'absolute', left: '36px', top: 0, bottom: 0, width: '7px', background: '#FFF' }} />
          <div style={{ position: 'absolute', right: '24px', top: 0, bottom: 0, width: '7px', background: '#FFF' }} />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [14, -14, 14],
          rotate: [22, 28, 22],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '18%',
          right: '3%',
          pointerEvents: 'none',
          zIndex: 3,
          opacity: 0.85,
        }}
      >
        <div
          style={{
            width: '180px',
            height: '16px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #0D9488 0%, #D4AF37 50%, #D95D09 100%)',
            boxShadow: '0 10px 25px rgba(13, 148, 136, 0.35)',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', left: '22px', top: 0, bottom: 0, width: '7px', background: '#FFF' }} />
          <div style={{ position: 'absolute', right: '30px', top: 0, bottom: 0, width: '7px', background: '#FFF' }} />
        </div>
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>

          {/* Left Column: Hero Animated Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Event Tag & Badge Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '22px' }}>

              <motion.span
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 16px',
                  borderRadius: '99px',
                  background: 'rgba(59, 9, 84, 0.08)',
                  color: 'var(--color-purple)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  border: '1px solid rgba(59, 9, 84, 0.15)',
                }}
              >
                <Award size={14} color="var(--color-gold)" />
                BEGINNER FRIENDLY · NO EXPERIENCE NEEDED
              </motion.span>
            </div>


            {/* Main Headline with Animated Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 4.3rem)',
                lineHeight: 1.12,
                color: 'var(--color-purple)',
                marginBottom: '20px',
              }}
            >
              Transform Your Moves In <br />
              <span className="text-magenta-gradient">Garba & Dandiya</span>
            </motion.h1>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'var(--text-dark)',
                maxWidth: '620px',
                marginBottom: '28px',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Step into the spirit of Navratri. Learn authentic technique, build confidence, and dance your way into the festive season!
            </p>

            {/* Interactive Clap & Dandiya Sound Beats Banner */}
            <div
              style={{
                padding: '16px 18px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(252, 248, 242, 0.98) 0%, rgba(245, 235, 224, 0.95) 100%)',
                border: '2px dashed var(--color-gold)',
                boxShadow: '0 10px 30px rgba(44, 26, 29, 0.08)',
                marginBottom: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                maxWidth: '580px',
              }}
            >
              {/* Top Row: Left Side Clap Button & Right Side Dandiya Button Side-by-Side */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                {/* Left: Clap Button */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => playAudioSound('clap', e)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    borderRadius: '16px',
                    background: activeSound === 'clap'
                      ? 'linear-gradient(135deg, #E31C79 0%, #8A0B5D 100%)'
                      : 'linear-gradient(135deg, rgba(227, 28, 121, 0.12) 0%, rgba(138, 11, 93, 0.18) 100%)',
                    border: '2px solid var(--color-rani-pink)',
                    boxShadow: '0 4px 15px rgba(227, 28, 121, 0.2)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <motion.span
                    animate={{
                      y: [-3, 3, -3],
                      rotate: [-6, 6, -6],
                      scale: activeSound === 'clap' ? [1, 1.3, 1] : [1, 1.05, 1],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ fontSize: '1.4rem', display: 'inline-block' }}
                  >
                    👏
                  </motion.span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-purple)', letterSpacing: '0.04em', lineHeight: 1.1 }}>
                      TAP CLAP
                    </div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-rani-pink)', marginTop: '2px' }}>
                      🔊 Play Sound
                    </div>
                  </div>
                </motion.div>

                {/* Right: Dandiya Button */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => playAudioSound('dandiya', e)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    borderRadius: '16px',
                    background: activeSound === 'dandiya'
                      ? 'linear-gradient(135deg, #D4AF37 0%, #C59B27 100%)'
                      : 'linear-gradient(135deg, rgba(197, 155, 39, 0.15) 0%, rgba(212, 175, 55, 0.22) 100%)',
                    border: '2px solid var(--color-gold)',
                    boxShadow: '0 4px 15px rgba(197, 155, 39, 0.25)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <motion.div
                    animate={{
                      y: [3, -3, 3],
                      rotate: [10, -10, 10],
                      scale: activeSound === 'dandiya' ? [1, 1.3, 1] : [1, 1.05, 1],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 21L19 5" stroke="#C59B27" strokeWidth="2.8" strokeLinecap="round"/>
                      <path d="M5 19L21 3" stroke="#E31C79" strokeWidth="2.8" strokeLinecap="round"/>
                      <circle cx="19" cy="5" r="1.8" fill="#D4AF37"/>
                      <circle cx="21" cy="3" r="1.8" fill="#E31C79"/>
                    </svg>
                  </motion.div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-purple)', letterSpacing: '0.04em', lineHeight: 1.1 }}>
                      TAP DANDIYA
                    </div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-orange)', marginTop: '2px' }}>
                      🎵 Play Sound
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Row: Centered Instructions & Live Counters */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--color-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <Sparkles size={14} color="var(--color-gold)" />
                  Feel The Festive Beats!
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '2px' }}>
                  Tap Clap 👏 or Dandiya 🥢 above to play live sounds!
                </div>
                {(clapCount > 0 || dandiyaCount > 0) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-magenta)', marginTop: '4px' }}
                  >
                    🎉 Claps: {clapCount} | Dandiya Hits: {dandiyaCount}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Quick Event Info Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '16px',
                padding: '20px',
                borderRadius: '18px',
                background: '#FCF8F2',
                border: '1px solid rgba(197, 155, 39, 0.35)',
                boxShadow: '0 8px 30px rgba(44, 26, 29, 0.05)',
                marginBottom: '36px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Calendar size={20} color="var(--color-rani-pink)" />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Starts</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-purple)' }}>September 2026</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={20} color="var(--color-orange)" />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Time (Sat)</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-purple)' }}>5:00 - 7:00 PM</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={20} color="var(--color-teal)" />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Contact</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-purple)' }}>95022 15750</div>
                </div>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenReserve}
                className="btn-primary"
              >
                <Sparkles size={18} />
                RESERVE YOUR PLACE
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#course"
                className="btn-secondary"
              >
                VIEW COURSE <ArrowRight size={18} />
              </motion.a>
            </div>

          </motion.div>

          {/* Right Column: Interactive Hero Visual with Floating Dandiya Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* Outer Rotating Bandhani Ring Frame */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '36px',
                border: '2px dashed rgba(227, 28, 121, 0.4)',
                pointerEvents: 'none',
              }}
            />

            {/* Main Featured Visual Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                borderRadius: '28px',
                padding: '12px',
                background: 'linear-gradient(135deg, rgba(197,155,39,0.7) 0%, rgba(227,28,121,0.6) 50%, rgba(59,9,84,0.85) 100%)',
                boxShadow: '0 25px 50px rgba(44, 26, 29, 0.2)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/5',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#2C1A1D',
                }}
              >
                <img
                  src="/images/hero.png"
                  alt="Raas Jalsa Garba Dance Class"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease',
                  }}
                />

                {/* Floating Bottom Card Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    background: 'rgba(245, 235, 224, 0.94)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(197, 155, 39, 0.5)',
                    color: 'var(--color-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-magenta)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>
                      NAVRATRI PREPARATION
                    </div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700 }}>
                      4 Classes A Month
                    </div>
                  </div>
                  <span
                    style={{
                      background: 'var(--color-rani-pink)',
                      color: '#FFF',
                      padding: '6px 14px',
                      borderRadius: '99px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                    }}
                  >
                    REGISTER NOW
                  </span>
                </div>
              </div>
            </div>

            {/* Circular Garba Ring Badge Floating */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '-25px',
                right: '-10px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-rani-pink), var(--color-magenta))',
                border: '2px solid var(--color-gold)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '10px',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                boxShadow: '0 10px 25px rgba(227,28,121,0.35)',
                zIndex: 6,
              }}
            >
              AUTHENTIC GARBA TECHNIQUE
            </motion.div>

            {/* Additional Dandiya Floating Badge Bottom Left */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: '-15px',
                left: '-10px',
                background: 'var(--color-purple)',
                color: '#FFF',
                padding: '12px 20px',
                borderRadius: '16px',
                border: '1.5px solid var(--color-gold)',
                boxShadow: '0 10px 25px rgba(59, 9, 84, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 6,
              }}
            >
              <Zap size={18} color="var(--color-gold)" />
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>DANDIYA RHYTHM DRILLS</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
