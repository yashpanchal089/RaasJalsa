import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music, Smile, Zap, Users, Flame, ArrowRight } from 'lucide-react';

export default function WhyRaasJalsa() {
  const cards = [
    {
      num: '01',
      tag: 'AUTHENTIC STEPS',
      title: 'TRADITIONAL GARBA',
      desc: 'Master authentic footwork, body grace, and Gujarati rhythm.',
      action: 'MASTER THE STEPS ⚡',
      icon: Music,
      accent: '#E31C79',
    },
    {
      num: '02',
      tag: 'ZERO EXPERIENCE',
      title: 'BEGINNER FRIENDLY',
      desc: 'Step-by-step guidance designed for absolute first-timers.',
      action: 'START LEARNING ➔',
      icon: Smile,
      accent: '#0D9488',
    },
    {
      num: '03',
      tag: 'DANCE FLOOR VIBES',
      title: 'BUILD CONFIDENCE',
      desc: 'Transform hesitation into effortless, graceful expression.',
      action: 'FEEL CONFIDENT 🔥',
      icon: Zap,
      accent: '#FF6F00',
    },
    {
      num: '04',
      tag: 'DUAL STICK BEATS',
      title: 'DANDIYA RHYTHM',
      desc: 'Develop speed, stick coordination, and partner formations.',
      action: 'PLAY THE BEAT 🥢',
      icon: Sparkles,
      accent: '#D4AF37',
    },
    {
      num: '05',
      tag: 'FESTIVE ENERGY',
      title: 'WARM COMMUNITY',
      desc: 'Connect with passionate dancers who love Navratri celebrations.',
      action: 'JOIN THE FAMILY 🎉',
      icon: Users,
      accent: '#8A0B5D',
    },
    {
      num: '06',
      tag: 'NAVRATRI 2026',
      title: 'FESTIVAL READY',
      desc: 'Shine brightly on every Garba ground with complete mastery.',
      action: 'SHINE ON FLOOR 🚀',
      icon: Flame,
      accent: '#E31C79',
    },
  ];

  return (
    <section
      id="why-us"
      style={{
        padding: '50px 0',
        background: 'linear-gradient(180deg, #FAF6F0 0%, #FFF5EB 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header - Compact Single Page View */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 28px auto' }}>
          <span className="badge-festive" style={{ marginBottom: '10px', fontSize: '0.78rem', padding: '4px 12px' }}>
            <Sparkles size={14} color="var(--color-rani-pink)" />
            WHY CHOOSE US
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
              color: 'var(--bg-deep-purple)',
              marginBottom: '8px',
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            AUTHENTIC BEATS. <span className="text-magenta-gradient">UNSTOPPABLE ENERGY.</span>
          </h2>
          <p style={{ color: 'var(--text-dark)', fontSize: '0.98rem', fontWeight: 600, maxWidth: '600px', margin: '0 auto' }}>
            Master authentic Garba footwork, Dandiya rhythms, and festive confidence in a warm community.
          </p>
        </div>

        {/* 6 Action-Oriented Cards Grid - Single Screen View */}
        <div className="why-cards-grid">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(138, 11, 93, 0.1)' }}
                style={{
                  padding: '20px 20px',
                  borderRadius: '18px',
                  background: '#FFFFFF',
                  border: '1.5px solid rgba(197, 155, 39, 0.35)',
                  boxShadow: '0 8px 24px rgba(42, 8, 69, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                className="why-card"
              >
                {/* Number Watermark Background */}
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '14px',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.2rem',
                    color: 'rgba(197, 155, 39, 0.15)',
                    fontWeight: 900,
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {card.num}
                </span>

                <div>
                  {/* Top Action Pill Badge */}
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      borderRadius: '99px',
                      background: `rgba(${card.accent === '#E31C79' ? '227, 28, 121' : card.accent === '#0D9488' ? '13, 148, 136' : '197, 155, 39'}, 0.12)`,
                      color: card.accent,
                      fontSize: '0.66rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      marginBottom: '10px',
                    }}
                  >
                    {card.tag}
                  </span>

                  {/* Icon & Title Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #FAF4EB 0%, #FFF 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: card.accent,
                        flexShrink: 0,
                        border: `1.5px solid ${card.accent}35`,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                      }}
                      className="card-icon"
                    >
                      <IconComponent size={22} />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--bg-deep-purple)',
                        margin: 0,
                        letterSpacing: '0.01em',
                        lineHeight: 1.2,
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Punchy Short Description */}
                  <p
                    style={{
                      color: 'var(--text-dark)',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      lineHeight: 1.45,
                      marginBottom: '12px',
                    }}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Action Pill Button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    borderTop: '1px solid rgba(197, 155, 39, 0.2)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      color: card.accent,
                      letterSpacing: '0.04em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {card.action}
                  </span>
                  <ArrowRight size={14} color={card.accent} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        @media (max-width: 1024px) {
          .why-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 768px) {
          #why-us {
            padding: 32px 0 !important;
          }
          .why-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .why-card {
            padding: 12px 10px !important;
            border-radius: 14px !important;
          }
          .why-card h3 {
            font-size: 0.88rem !important;
          }
          .why-card p {
            font-size: 0.74rem !important;
            margin-bottom: 8px !important;
            line-height: 1.35 !important;
          }
          .card-icon {
            width: 34px !important;
            height: 34px !important;
          }
          .card-icon svg {
            width: 17px !important;
            height: 17px !important;
          }
        }
      `}</style>
    </section>
  );
}
