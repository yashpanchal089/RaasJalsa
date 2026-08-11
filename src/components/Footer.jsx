import React from 'react';
import { Phone, Instagram, Heart, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#2C1A1D',
        color: '#FFFFFF',
        padding: '70px 0 30px 0',
        borderTop: '1px solid rgba(197, 155, 39, 0.3)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/images/logo.png"
                alt="Raas Jalsa Logo"
                style={{
                  height: '76px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 10px rgba(212, 175, 55, 0.3))',
                }}
              />
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-gold-bright)', lineHeight: 1 }}>
                  RAAS JALSA
                </h3>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>
                  GARBA & DANDIYA COMMUNITY
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, marginBottom: '20px' }}>
              Step into the spirit of Navratri. Learn authentic technique, build confidence, and dance your way into the festive season!
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold-bright)', marginBottom: '18px' }}>
              QUICK LINKS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="#hero" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem' }}>Home</a>
              <a href="#about" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem' }}>About Community</a>
              <a href="#course" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem' }}>Foundation Course</a>
              <a href="#pricing" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem' }}>Pricing Plans</a>
              <a href="#testimonials" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem' }}>Video Testimonials</a>
              <a href="#venue" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem' }}>Location & Contact</a>
            </div>
          </div>

          {/* Col 3: Contact & Social (NO ADDRESS) */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold-bright)', marginBottom: '18px' }}>
              CONTACT & HELPLINE
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--color-rani-pink)" />
                <a href="tel:9502215750" style={{ color: '#FFF', textDecoration: 'none', fontWeight: 700 }}>
                  95022 15750
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={18} color="var(--color-teal)" />
                <a href="https://wa.me/919502215750" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', textDecoration: 'none', fontWeight: 700 }}>
                  +91 95022 15750
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Instagram size={18} color="var(--color-gold-bright)" />
                <a href="https://instagram.com/raas_jalsa" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF', textDecoration: 'none', fontWeight: 700 }}>
                  @raas_jalsa
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
          <div>© 2026 Raas Jalsa. All Rights Reserved.</div>
          <div>Crafted with <Heart size={14} color="var(--color-rani-pink)" style={{ display: 'inline', verticalAlign: 'middle' }} /> for Navratri Garba Lovers</div>
        </div>
      </div>
    </footer>
  );
}
