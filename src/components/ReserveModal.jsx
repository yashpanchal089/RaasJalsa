import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReserveModal({ isOpen, onClose, selectedPlan = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: selectedPlan || 'GROUP OF 4 OR MORE (₹1,299/person)',
    members: '1',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const whatsappMessage = `Hi Raas Jalsa! I want to reserve my place for Garba & Dandiya Classes (Navratri 2026).\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPlan: ${formData.plan}\nSeats: ${formData.members}`;
    const whatsappUrl = `https://wa.me/919502215750?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(44, 26, 29, 0.88)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '480px',
            borderRadius: '28px',
            background: '#FCF8F2',
            border: '2px solid var(--color-gold)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
            padding: '36px 30px',
            position: 'relative',
            color: 'var(--text-dark)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(138, 11, 93, 0.1)',
              border: 'none',
              color: 'var(--color-magenta)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(13, 148, 136, 0.12)',
                  color: 'var(--color-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}
              >
                <CheckCircle2 size={40} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-purple)', marginBottom: '10px' }}>
                Registration Redirecting!
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                We are connecting you to WhatsApp to confirm your batch reservation with Raas Jalsa team (95022 15750).
              </p>
              <a href="tel:9502215750" className="btn-primary" style={{ width: '100%', textDecoration: 'none' }}>
                <Phone size={18} /> CALL 95022 15750 NOW
              </a>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Sparkles size={16} color="var(--color-rani-pink)" />
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-magenta)', fontWeight: 800 }}>
                  NAVRATRI 2026 REGISTRATION
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-purple)', marginBottom: '6px' }}>
                Reserve Your Spot
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Classes start 1st September 2026. Fill details below for instant reservation.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px', color: 'var(--color-purple)' }}>
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(197, 155, 39, 0.4)',
                      background: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px', color: 'var(--color-purple)' }}>
                    PHONE / WHATSAPP NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(197, 155, 39, 0.4)',
                      background: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px', color: 'var(--color-purple)' }}>
                    SELECT PLAN
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(197, 155, 39, 0.4)',
                      background: '#FFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  >
                    <option value="GROUP OF 4 OR MORE (₹1,299/person)">GROUP OF 4 OR MORE — ₹1,299/person (BEST VALUE)</option>
                    <option value="COUPLE / PARTNER (₹1,499/person)">COUPLE / PARTNER — ₹1,499/person</option>
                    <option value="SINGLE PERSON (₹1,699/month)">SINGLE PERSON — ₹1,699/month</option>
                    <option value="PER CLASS BASIS (₹499/class)">SINGLE CLASS DROP-IN — ₹499/class</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', marginTop: '10px' }}>
                  <MessageSquare size={18} /> CONFIRM VIA WHATSAPP / CALL
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
