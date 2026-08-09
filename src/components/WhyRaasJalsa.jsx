import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music, Smile, ShieldAlert, Zap, Users, Flame } from 'lucide-react';

export default function WhyRaasJalsa() {
  const cards = [
    {
      num: '01',
      title: 'LEARN AUTHENTIC GARBA',
      desc: 'Learn proper Garba movements, authentic footwork, posture, and traditional rhythmic steps.',
      icon: Music,
      accent: '#E31C79',
    },
    {
      num: '02',
      title: 'BEGINNER FRIENDLY',
      desc: 'No previous dance experience required! Step-by-step breakdown designed for all skill levels.',
      icon: Smile,
      accent: '#0D9488',
    },
    {
      num: '03',
      title: 'BUILD CONFIDENCE',
      desc: 'Become completely comfortable, expressive, and graceful on the Garba floor.',
      icon: Zap,
      accent: '#FF6F00',
    },
    {
      num: '04',
      title: 'LEARN DANDIYA',
      desc: 'Develop stick rhythm, speed, hand-eye coordination, and dynamic partner Dandiya techniques.',
      icon: Sparkles,
      accent: '#D4AF37',
    },
    {
      num: '05',
      title: 'FESTIVE COMMUNITY',
      desc: 'Meet like-minded people who share your love for Garba, culture, music, and Navratri celebrations.',
      icon: Users,
      accent: '#8A0B5D',
    },
    {
      num: '06',
      title: 'GET NAVRATRI READY',
      desc: 'Prepare yourself to confidently participate and shine during the grand Navratri 2026 season!',
      icon: Flame,
      accent: '#E31C79',
    },
  ];

  return (
    <section
      id="why-us"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #FAF6F0 0%, #FFF5EB 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span className="badge-festive" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="var(--color-rani-pink)" />
            WHY CHOOSE US
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--bg-deep-purple)',
              marginBottom: '16px',
            }}
          >
            WHY <span className="text-magenta-gradient">RAAS JALSA?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Experience the perfect blend of authentic Gujarati culture, energetic teaching, and a warm festive community.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                style={{
                  padding: '32px 28px',
                  borderRadius: '24px',
                  background: '#FFFBF5',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 10px 30px rgba(42, 8, 69, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                className="why-card"
              >
                {/* Number Watermark */}
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '20px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.4rem',
                    color: 'rgba(212, 175, 55, 0.2)',
                    fontWeight: 700,
                  }}
                >
                  {card.num}
                </span>

                {/* Icon Container */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `rgba(212, 175, 55, 0.12)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: card.accent,
                    marginBottom: '20px',
                    border: `1px solid ${card.accent}33`,
                    transition: 'all 0.3s ease',
                  }}
                  className="card-icon"
                >
                  <IconComponent size={28} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--bg-deep-purple)',
                    marginBottom: '10px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {card.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {card.desc}
                </p>

                {/* Bottom Decorative Gold Line Accent */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                    opacity: 0.6,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
