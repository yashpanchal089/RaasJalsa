import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Flame, ShieldCheck, Heart, Award } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { title: 'AUTHENTIC TECHNIQUE', desc: 'True Gujarati Garba steps, posture & footwork', icon: Award, color: 'var(--color-rani-pink)' },
    { title: 'BEGINNER FRIENDLY', desc: 'No prior dance background required', icon: ShieldCheck, color: 'var(--color-teal)' },
    { title: 'COMMUNITY DRIVEN', desc: 'Connect with Garba lovers across Hyderabad', icon: Users, color: 'var(--color-orange)' },
    { title: 'NAVRATRI READY', desc: 'Dance with full confidence on the festival floor', icon: Flame, color: 'var(--color-gold)' },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        background: '#FAF6F0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Gold Circular Motif Accent */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          border: '1.5px dashed rgba(212, 175, 55, 0.2)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '56px', alignItems: 'center' }}>
          
          {/* Left Column: Team/Instructor Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '480px',
                margin: '0 auto',
                borderRadius: '24px',
                padding: '12px',
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-magenta) 100%)',
                boxShadow: '0 20px 40px rgba(138, 11, 93, 0.15)',
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/5',
                  background: '#2A0845',
                }}
              >
                <img
                  src="/images/about-instructors.jpg"
                  alt="Raas Jalsa Lead Garba Instructors"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
                />
                
                {/* Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    padding: '14px 18px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-magenta)', fontWeight: 800, textTransform: 'uppercase' }}>
                      FOUNDATION INSTRUCTORS
                    </div>
                    <div style={{ fontWeight: 700, color: 'var(--bg-deep-purple)', fontSize: '0.95rem' }}>
                      Passionate & Certified Team
                    </div>
                  </div>
                  <Heart color="var(--color-rani-pink)" fill="var(--color-rani-pink)" size={20} />
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                right: '20px',
                background: 'var(--bg-deep-purple)',
                color: '#FFF',
                padding: '14px 22px',
                borderRadius: '18px',
                border: '1.5px solid var(--color-gold)',
                boxShadow: '0 10px 25px rgba(42, 8, 69, 0.3)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-gold-bright)', fontWeight: 700, lineHeight: 1 }}>
                100%
              </div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                AUTHENTIC VIBES
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge-festive" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} color="var(--color-rani-pink)" />
              ABOUT RAAS JALSA
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                color: 'var(--bg-deep-purple)',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              MORE THAN A DANCE CLASS. <br />
              <span className="text-magenta-gradient">IT'S A COMMUNITY.</span>
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-dark)',
                marginBottom: '24px',
                lineHeight: 1.7,
              }}
            >
              Raas Jalsa is a dedicated Garba and Dandiya community designed to help complete beginners and enthusiasts learn authentic techniques, gain confidence, and dance your way into the festive spirit of Navratri.
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                marginBottom: '36px',
                lineHeight: 1.6,
              }}
            >
              Whether you are stepping onto the Garba floor for the very first time or refining your turns and rhythm, our structured 4-class monthly foundation course builds grace, stamina, and unforgettable memories!
            </p>

            {/* Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '16px',
                      background: '#FFFBF5',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      boxShadow: '0 4px 15px rgba(42, 8, 69, 0.04)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: '12px',
                        background: 'rgba(212, 175, 55, 0.12)',
                        color: item.color,
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: 'var(--bg-deep-purple)',
                          letterSpacing: '0.05em',
                          marginBottom: '4px',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
