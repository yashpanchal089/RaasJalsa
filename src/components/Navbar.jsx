import React, { useState, useEffect } from 'react';
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
    { name: 'Venue', href: '#venue' },
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
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'rgba(42, 8, 69, 0.92)' : 'transparent',
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
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: scrolled ? '44px' : '52px',
                height: scrolled ? '44px' : '52px',
                borderRadius: '50%',
                border: '2px solid var(--color-gold)',
                overflow: 'hidden',
                background: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(212,175,55,0.3)',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src="/images/logo.png"
                alt="Raas Jalsa Logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: scrolled ? '1.3rem' : '1.5rem',
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
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: scrolled ? 'var(--color-gold-bright)' : 'var(--color-magenta)',
                  fontWeight: 700,
                  display: 'block',
                }}
              >
                GARBA & DANDIYA COMMUNITY
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="tel:9502215750"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                color: scrolled ? 'var(--color-gold-bright)' : 'var(--color-purple)',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.88rem',
              }}
              className="desktop-phone"
            >
              <Phone size={16} color="var(--color-rani-pink)" />
              95022 15750
            </a>

            <button
              onClick={() => onOpenReserve()}
              className="btn-primary"
              style={{
                padding: scrolled ? '10px 22px' : '12px 26px',
                fontSize: '0.85rem',
              }}
            >
              <Sparkles size={16} />
              RESERVE YOUR PLACE
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: scrolled ? '#FFF' : 'var(--color-purple)',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
              className="mobile-hamburger"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'rgba(26, 4, 43, 0.96)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            padding: '40px 20px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid var(--color-gold)',
              overflow: 'hidden',
              background: '#FFF',
              marginBottom: '10px',
            }}
          >
            <img src="/images/logo.png" alt="Raas Jalsa Logo" style={{ width: '100%', height: '100%' }} />
          </div>

          <span
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-gold-bright)',
              fontSize: '1.8rem',
            }}
          >
            RAAS JALSA
          </span>

          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              RESERVE YOUR PLACE
            </button>
            <a
              href="tel:9502215750"
              className="btn-secondary"
              style={{ width: '100%', textAlign: 'center', border: '1px solid var(--color-gold)' }}
            >
              <Phone size={16} /> CALL 95022 15750
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-phone { display: flex !important; }
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
