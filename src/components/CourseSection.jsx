import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, Award, CheckCircle2, Star, ArrowRight, Phone } from 'lucide-react';

export default function CourseSection({ onOpenReserve }) {
  const courseDetails = [
    { label: 'STARTING', value: 'September, 2026', sub: '', icon: Calendar, color: 'var(--color-rani-pink)' },
    { label: 'TIMING', value: '5:00 PM – 7:00 PM', sub: '(Tentative)', icon: Clock, color: 'var(--color-orange)' },
    { label: 'FREQUENCY', value: '4 Classes A Month', sub: 'Weekly Weekend Sessions', icon: Sparkles, color: 'var(--color-teal)' },
    { label: 'CONTACT FOR SEATS', value: '95022 15750', sub: 'Call / WhatsApp Available', icon: Phone, color: 'var(--color-gold)' },
    { label: 'DIFFICULTY LEVEL', value: 'Beginner Friendly', sub: 'No Experience Needed', icon: Award, color: 'var(--color-magenta)' },
  ];

  const curriculumHighlights = [
    'Basic Garba Steps (Dodhiyu, Popat, 2-Taali, 3-Taali)',
    'Traditional Hand Expressions & Body Grace',
    'Dandiya Stick Rhythm & Double Stick Beats',
    'Circle Formations & Group Synchronization',
    'Navratri Dance Floor Confidence & Stamina Building',
    'Special Festive Choreography for Navratri 2026',
  ];

  return (
    <section
      id="course"
      style={{
        padding: '100px 0',
        background: '#F5EBE0',
        color: 'var(--text-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <span className="badge-festive" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="var(--color-rani-pink)" />
            OFFICIAL BATCH DETAILS
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--color-purple)',
              marginBottom: '16px',
            }}
          >
            THE FOUNDATION COURSE — <br />
            <span className="text-magenta-gradient">GARBA & DANDIYA</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Step into the spirit of Navratri. Learn authentic technique, build confidence, and dance your way into the festive season!
          </p>
        </div>

        {/* Main Grid: Details + Curriculum */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Quick Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {courseDetails.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '20px',
                    background: '#FCF8F2',
                    border: '1px solid rgba(197, 155, 39, 0.3)',
                    boxShadow: '0 4px 15px rgba(44, 26, 29, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(197, 155, 39, 0.15)',
                      border: '1px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-magenta)', fontWeight: 800 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-purple)' }}>
                      {item.value}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {item.sub}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Course Curriculum & Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '36px',
              borderRadius: '28px',
              background: '#FCF8F2',
              border: '1.5px solid var(--color-gold)',
              boxShadow: '0 16px 40px rgba(44, 26, 29, 0.08)',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Star size={20} color="var(--color-gold)" fill="var(--color-gold)" />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-purple)' }}>
                What You Will Learn
              </h3>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '28px', lineHeight: 1.6 }}>
              Our foundation course covers step-by-step techniques starting from basic footwork to complex circle choreography.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {curriculumHighlights.map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} color="var(--color-magenta)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenReserve}
              className="btn-primary"
              style={{ width: '100%', padding: '16px 28px', fontSize: '0.95rem' }}
            >
              ENROLL IN FOUNDATION COURSE <ArrowRight size={18} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
