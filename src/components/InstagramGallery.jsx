import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Sparkles } from 'lucide-react';

export default function InstagramGallery() {
  const instaTiles = [
    { id: 1, image: '/images/hero.png', caption: 'Navratri energy loading! #RaasJalsa #GarbaHyderabad' },
    { id: 2, image: '/images/garba-1.png', caption: 'Garba circles in Hyderabad! #FoundationCourse' },
    { id: 3, image: '/images/garba-2.png', caption: 'Dandiya stick precision! #Navratri2026' },
    { id: 4, image: '/images/garba-3.png', caption: 'Pure festive grace. #GarbaCommunity' },
    { id: 5, image: '/images/instructor.png', caption: 'Meet our passionate instructors! #DanceHyderabad' },
    { id: 6, image: '/images/hero.png', caption: 'Step into the festive season! #RaasJalsa' },
  ];

  return (
    <section
      id="instagram"
      style={{
        padding: '100px 0',
        background: '#F5EBE0',
        color: 'var(--text-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
          <span className="badge-festive" style={{ marginBottom: '16px' }}>
            <Instagram size={14} color="var(--color-rani-pink)" />
            INSTAGRAM COMMUNITY
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--color-purple)',
              marginBottom: '12px',
            }}
          >
            FOLLOW THE <span className="text-magenta-gradient">RAAS</span>
          </h2>

          <a
            href="https://instagram.com/raas_jalsa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '1.25rem',
              color: 'var(--color-magenta)',
              fontWeight: 800,
              textDecoration: 'none',
              letterSpacing: '0.08em',
            }}
          >
            @raas_jalsa
          </a>
        </div>

        {/* 6 Visual Tiles Grid - 2 per row on mobile */}
        <div className="insta-grid">
          {instaTiles.map((tile) => (
            <motion.a
              key={tile.id}
              href="https://instagram.com/raas_jalsa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '1/1',
                border: '1px solid rgba(197, 155, 39, 0.35)',
                display: 'block',
                boxShadow: '0 8px 20px rgba(44, 26, 29, 0.06)',
              }}
              className="insta-tile"
            >
              <img
                src={tile.image}
                alt="Raas Jalsa Instagram"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
              />

              {/* Hover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(59, 9, 84, 0.85)',
                  backdropFilter: 'blur(4px)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  textAlign: 'center',
                }}
                className="insta-overlay"
              >
                <Instagram size={32} color="var(--color-gold-bright)" style={{ marginBottom: '8px' }} />
                <p style={{ fontSize: '0.78rem', color: '#FFF', fontWeight: 600, lineHeight: 1.3 }}>
                  {tile.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://instagram.com/raas_jalsa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            <Instagram size={20} /> FOLLOW US ON INSTAGRAM
          </a>
        </div>
      </div>

      <style>{`
        .insta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 40px;
        }

        @media (min-width: 992px) {
          .insta-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .insta-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
            margin-bottom: 24px !important;
          }
          .insta-tile {
            border-radius: 12px !important;
          }
        }

        .insta-tile:hover .insta-overlay {
          opacity: 1 !important;
        }
        .insta-tile:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
