import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Sparkles, Navigation } from 'lucide-react';

export default function VenueSection() {
  const primaryPhone = "95022 15750";
  const secondaryPhone = "+91 95022 15750";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Raas Jalsa Garba Dance Hyderabad')}`;

  return (
    <section
      id="venue"
      style={{
        padding: '80px 0',
        background: '#F5EBE0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Venue Layout Grid with Map & Contact Details (No Address Text) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            borderRadius: '28px',
            padding: '12px',
            background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-magenta) 50%, var(--color-purple) 100%)',
            boxShadow: '0 20px 45px rgba(44, 26, 29, 0.1)',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              borderRadius: '20px',
              background: '#FCF8F2',
              padding: '36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            {/* Left Contact & Helpline Details Card (NO ADDRESS) */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '99px',
                  background: 'rgba(138, 11, 93, 0.12)',
                  color: 'var(--color-magenta)',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <Sparkles size={16} /> CONTACT & REGISTRATION HELPLINE
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: 'var(--color-purple)',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                }}
              >
                Get In Touch With <span className="text-magenta-gradient">Raas Jalsa</span>
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '28px', lineHeight: 1.6 }}>
                Have questions about batch timings, group packages, or Navratri 2026 registration? Call or WhatsApp our team directly!
              </p>

              {/* Both Phone Numbers Box */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '24px',
                  borderRadius: '20px',
                  background: '#F5EBE0',
                  border: '1.5px solid var(--color-gold)',
                  marginBottom: '28px',
                }}
              >
                {/* Phone Number 1 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: '12px',
                        background: 'var(--color-rani-pink)',
                        color: '#FFF',
                      }}
                    >
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.08em' }}>
                        PRIMARY HELPLINE
                      </div>
                      <a
                        href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                        style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-purple)', textDecoration: 'none' }}
                      >
                        {primaryPhone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                    className="btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.8rem', textDecoration: 'none' }}
                  >
                    CALL NOW
                  </a>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(197, 155, 39, 0.3)' }} />

                {/* Phone Number 2 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: '12px',
                        background: 'var(--color-teal)',
                        color: '#FFF',
                      }}
                    >
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.08em' }}>
                        WHATSAPP & ENQUIRIES
                      </div>
                      <a
                        href={`https://wa.me/919502215750`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-purple)', textDecoration: 'none' }}
                      >
                        {secondaryPhone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/919502215750`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ padding: '10px 20px', fontSize: '0.8rem', textDecoration: 'none' }}
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>

            </div>

            {/* Right Map Embed Only (No Address Text) */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--color-gold)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                height: '380px',
                position: 'relative',
              }}
            >
              <iframe
                title="Raas Jalsa Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=Nallagandla%20Hyderabad%20Aparna%20Cyberlife&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
