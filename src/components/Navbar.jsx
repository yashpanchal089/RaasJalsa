import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram, Sparkles, MapPin } from 'lucide-react';

export default function Navbar({ onOpenReserve }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Course', href: '#course' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s ease',
          padding: scrolled ? '10px 0' : '16px 0',
          background: scrolled ? 'rgba(42, 8, 69, 0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.2)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.25)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo & Brand */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <img
              src="/images/logo.png"
              alt="Raas Jalsa Logo"
              className="nav-logo-img"
              style={{
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.3s ease',
                filter: scrolled
                  ? 'drop-shadow(0 4px 12px rgba(212, 175, 55, 0.4))'
                  : 'drop-shadow(0 4px 12px rgba(138, 11, 93, 0.25))',
              }}
            />
            <div>
              <span
                className="nav-brand-title"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: scrolled ? '#FFFFFF' : 'var(--color-purple)',
                  letterSpacing: '0.04em',
                  display: 'block',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  transition: 'color 0.3s ease',
                }}
              >
                RAAS JALSA
              </span>
              <span
                className="nav-brand-sub"
                style={{
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: scrolled ? 'var(--color-gold-bright)' : 'var(--color-magenta)',
                  fontWeight: 700,
                  display: 'block',
                }}
              >
                GARBA & DANDIYA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              gap: '24px',
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-dark)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--color-rani-pink)')}
                onMouseLeave={(e) =>
                  (e.target.style.color = scrolled ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-dark)')
                }
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => onOpenReserve()}
              className="btn-primary nav-reserve-btn"
            >
              <Sparkles size={14} />
              RESERVE YOUR PLACE
            </button>

            {/* Animated Mobile Hamburger Toggle */}
            <motion.button
              whileTap={{ scale: 0.86 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(197, 155, 39, 0.14)',
                border: '1.5px solid var(--color-gold)',
                borderRadius: '12px',
                color: scrolled ? '#FFF' : 'var(--color-purple)',
                cursor: 'pointer',
                padding: '8px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(197, 155, 39, 0.25)',
              }}
              className="mobile-hamburger"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  {mobileMenuOpen ? <X size={26} color="var(--color-gold-bright)" /> : <Menu size={26} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'linear-gradient(170deg, rgba(26, 4, 43, 0.98) 0%, rgba(42, 8, 69, 0.97) 100%)',
              backdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              padding: '40px 20px',
            }}
          >
            <img
              src="/images/logo.png"
              alt="Raas Jalsa Logo"
              style={{
                height: '80px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 6px 16px rgba(212, 175, 55, 0.4))',
              }}
            />

            <div style={{ textAlign: 'center' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-gold-bright)',
                  fontSize: '2.2rem',
                  letterSpacing: '0.04em',
                  display: 'block',
                  lineHeight: 1.1,
                }}
              >
                RAAS JALSA
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontWeight: 700,
                  marginTop: '4px',
                  display: 'block',
                }}
              >
                GARBA & DANDIYA COMMUNITY
              </span>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '10px' }}>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, color: 'var(--color-gold-bright)' }}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
              >
                RESERVE YOUR PLACE
              </button>
              <a
                href="tel:9502215750"
                className="btn-secondary"
                style={{ width: '100%', textAlign: 'center', border: '1px solid var(--color-gold)', padding: '12px' }}
              >
                <Phone size={16} /> CALL 95022 15750
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-logo-img {
          height: 76px;
        }
        .nav-brand-title {
          font-size: 1.4rem;
        }
        .nav-brand-sub {
          font-size: 0.65rem;
        }
        .nav-reserve-btn {
          padding: 10px 22px;
          font-size: 0.85rem;
        }

        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-phone { display: flex !important; }
          .mobile-hamburger { display: none !important; }
        }

        @media (max-width: 768px) {
          .nav-logo-img {
            height: 60px !important;
          }
          .nav-brand-title {
            font-size: 1.3rem !important;
          }
          .nav-brand-sub {
            font-size: 0.68rem !important;
            letter-spacing: 0.14em !important;
          }
          .nav-reserve-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
