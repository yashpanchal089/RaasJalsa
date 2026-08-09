import React from 'react';
import { Phone, Sparkles } from 'lucide-react';

export default function MobileStickyBar({ onOpenReserve }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        background: 'rgba(26, 4, 43, 0.95)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--color-gold)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
      className="mobile-sticky-bar"
    >
      <a
        href="tel:9502215750"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '12px',
          borderRadius: '99px',
          background: 'rgba(255, 255, 255, 0.12)',
          color: 'var(--color-gold-bright)',
          border: '1px solid var(--color-gold)',
          fontWeight: 700,
          fontSize: '0.85rem',
          textDecoration: 'none',
        }}
      >
        <Phone size={16} /> CALL 95022 15750
      </a>

      <button
        onClick={onOpenReserve}
        className="btn-primary"
        style={{
          flex: 1.2,
          padding: '12px',
          fontSize: '0.85rem',
        }}
      >
        <Sparkles size={16} /> RESERVE PLACE
      </button>

      <style>{`
        @media (min-width: 768px) {
          .mobile-sticky-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
