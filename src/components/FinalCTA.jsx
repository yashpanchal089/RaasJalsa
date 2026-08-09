import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalCTA({ onOpenReserve }) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#E31C79', '#D4AF37', '#D95D09', '#8A0B5D'],
    });
  };

  return (
    <section
      style={{
        padding: '110px 0',
        background: 'linear-gradient(135deg, #3B0954 0%, #7A0B56 50%, #8A0B5D 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '2px solid var(--color-gold)',
      }}
    >
      <div className="bandhani-overlay-dark" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 5, textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <span
            className="badge-festive badge-dark-gold"
            style={{ marginBottom: '20px', background: 'rgba(212, 175, 55, 0.2)' }}
          >
            <Sparkles size={14} color="var(--color-gold-bright)" />
            NAVRATRI 2026 BATCH OPEN
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              color: '#FFFFFF',
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            YOUR NAVRATRI <br />
            <span className="text-gold-gradient">STARTS HERE.</span>
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: 'var(--color-gold-bright)',
              letterSpacing: '0.12em',
              marginBottom: '20px',
            }}
          >
            Learn. Celebrate. Connect.
          </div>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              lineHeight: 1.6,
            }}
          >
            Reserve your place and get Navratri-ready with Raas Jalsa. Experience authentic Garba steps, vibrant energy, and a supportive community in Hyderabad.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
            <button
              onClick={() => {
                triggerConfetti();
                onOpenReserve();
              }}
              className="btn-primary"
              style={{ padding: '18px 40px', fontSize: '1rem' }}
            >
              <Sparkles size={18} /> RESERVE YOUR PLACE
            </button>

            <a
              href="tel:9502215750"
              className="btn-secondary"
              style={{
                padding: '18px 36px',
                fontSize: '1rem',
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FFF',
                border: '1.5px solid var(--color-gold)',
              }}
            >
              <Phone size={18} color="var(--color-gold-bright)" /> CALL 95022 15750
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
