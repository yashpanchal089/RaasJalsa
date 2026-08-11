import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, Users, User, Heart, Crown, ArrowRight } from 'lucide-react';

export default function PricingSection({ onOpenReserve }) {
  const plans = [
    {
      id: 'dropin',
      name: 'PER CLASS BASIS',
      badge: 'Flexible',
      price: '499',
      period: 'Single Class · Drop-in',
      desc: 'Ideal for trying out a session or drop-in practice.',
      icon: User,
      featured: false,
      benefits: [
        '1 Garba & Dandiya Session',
        '2 Hours Intensive Practice',
        'Beginner Guidance',
      ],
    },
    {
      id: 'single',
      name: 'SINGLE PERSON',
      badge: 'Popular',
      price: '1,699',
      period: '4 Classes a Month',
      desc: 'Complete 1-month foundation course for individual learners.',
      icon: User,
      featured: false,
      benefits: [
        '4 Sessions a Month',
        'Complete Garba Step Breakdown',
        'Dandiya Technique & Rhythm',
        'Community Access',
      ],
    },
    {
      id: 'couple',
      name: 'COUPLE / PARTNER',
      badge: 'Pair Special',
      price: '1,499',
      period: 'Per Person · 4 Classes a Month',
      desc: 'Join with a friend or partner and save per person.',
      icon: Heart,
      featured: false,
      benefits: [
        '4 Sessions a Month Each',
        'Partner Dandiya Drills',
        'Synchronized Dance Practice',
        'Discounted Per-Person Rate',
      ],
    },
    {
      id: 'group',
      name: 'GROUP OF 4 OR MORE',
      badge: 'BEST VALUE',
      price: '1,299',
      period: 'Per Person · 4 Classes a Month',
      desc: 'Bring your group & experience the ultimate Garba squad vibe!',
      icon: Users,
      featured: true,
      benefits: [
        '4 Sessions a Month Each',
        'Maximum Savings (Save ₹400/person)',
        'Dedicated Group Circle Practice',
        'Special Group Navratri Tagging',
      ],
    },
  ];

  return (
    <section
      id="pricing"
      style={{
        padding: '100px 0',
        background: '#F5EBE0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span className="badge-festive" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="var(--color-rani-pink)" />
            FLEXIBLE AFFORDABLE PLANS
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--color-purple)',
              marginBottom: '12px',
            }}
          >
            CHOOSE YOUR <span className="text-magenta-gradient">RAAS JALSA PLAN</span>
          </h2>

          <div
            style={{
              display: 'inline-block',
              padding: '6px 18px',
              borderRadius: '99px',
              background: 'rgba(138, 11, 93, 0.08)',
              color: 'var(--color-magenta)',
              fontSize: '0.88rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            4 CLASSES A MONTH · PRICING SHOWN PER PERSON
          </div>
        </div>

        {/* 4 Pricing Cards Grid - 4 cols on desktop, 2x2 grid on mobile */}
        <div className="pricing-cards-grid">
          {plans.map((plan, idx) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  borderRadius: '24px',
                  background: plan.featured
                    ? 'linear-gradient(165deg, #3B0954 0%, #58111A 50%, #8A0B5D 100%)'
                    : '#FCF8F2',
                  color: plan.featured ? '#FFFFFF' : 'var(--text-dark)',
                  border: plan.featured ? '2px solid var(--color-gold)' : '1px solid rgba(197, 155, 39, 0.3)',
                  boxShadow: plan.featured
                    ? '0 20px 45px rgba(138, 11, 93, 0.25)'
                    : '0 10px 30px rgba(44, 26, 29, 0.04)',
                  padding: '36px 24px 28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: plan.featured ? 'scale(1.03)' : 'none',
                }}
                className="pricing-card"
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      background: 'linear-gradient(135deg, var(--color-gold-bright), var(--color-gold))',
                      color: 'var(--color-purple)',
                      fontSize: '0.75rem',
                      fontWeight: 900,
                      letterSpacing: '0.12em',
                      padding: '6px 20px',
                      borderBottomLeftRadius: '16px',
                      boxShadow: '0 4px 15px rgba(197,155,39,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                    className="pricing-badge"
                  >
                    <Crown size={14} /> {plan.badge}
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: '12px',
                        background: plan.featured ? 'rgba(197, 155, 39, 0.2)' : 'rgba(138, 11, 93, 0.08)',
                        color: plan.featured ? 'var(--color-gold-bright)' : 'var(--color-magenta)',
                      }}
                      className="pricing-icon"
                    >
                      <IconComponent size={20} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: plan.featured ? 'var(--color-gold-bright)' : 'var(--color-magenta)',
                      }}
                      className="pricing-title"
                    >
                      {plan.name}
                    </span>
                  </div>

                  {/* Price display */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                      <span style={{ fontSize: '1.4rem', fontWeight: 700, color: plan.featured ? 'var(--color-gold-bright)' : 'var(--color-magenta)' }}>
                        ₹
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '2.8rem',
                          fontWeight: 700,
                          lineHeight: 1,
                          color: plan.featured ? '#FFFFFF' : 'var(--color-purple)',
                        }}
                        className="pricing-price-num"
                      >
                        {plan.price}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: plan.featured ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)' }}>
                        /-
                      </span>
                    </div>
                    <div
                      style={{ fontSize: '0.82rem', marginTop: '4px', fontWeight: 600, color: plan.featured ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)' }}
                      className="pricing-period"
                    >
                      {plan.period}
                    </div>
                  </div>

                  <p
                    style={{ fontSize: '0.88rem', color: plan.featured ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.5 }}
                    className="pricing-desc"
                  >
                    {plan.desc}
                  </p>

                  <div style={{ width: '100%', height: '1px', background: plan.featured ? 'rgba(197,155,39,0.3)' : 'rgba(0,0,0,0.08)', marginBottom: '20px' }} />

                  {/* Benefits */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                    {plan.benefits.map((b, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem' }} className="pricing-benefit-item">
                        <Check size={16} color={plan.featured ? 'var(--color-gold-bright)' : 'var(--color-magenta)'} />
                        <span style={{ color: plan.featured ? 'rgba(255,255,255,0.95)' : 'var(--text-dark)', fontWeight: 500 }}>
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenReserve(plan.name)}
                  className={(plan.featured ? 'btn-primary' : 'btn-secondary') + ' pricing-cta-btn'}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    fontSize: '0.88rem',
                    boxShadow: plan.featured ? '0 10px 25px rgba(227, 28, 121, 0.4)' : 'none',
                  }}
                >
                  RESERVE YOUR PLACE <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        @media (max-width: 1100px) {
          .pricing-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 576px) {
          .pricing-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .pricing-card {
            padding: 16px 12px 14px 12px !important;
            border-radius: 18px !important;
            transform: none !important;
          }
          .pricing-badge {
            font-size: 0.65rem !important;
            padding: 4px 10px !important;
          }
          .pricing-icon {
            padding: 6px !important;
            border-radius: 8px !important;
          }
          .pricing-title {
            font-size: 0.72rem !important;
            letter-spacing: 0.04em !important;
          }
          .pricing-price-num {
            font-size: 1.8rem !important;
          }
          .pricing-period {
            font-size: 0.7rem !important;
          }
          .pricing-desc {
            font-size: 0.74rem !important;
            margin-bottom: 12px !important;
            line-height: 1.3 !important;
          }
          .pricing-benefit-item {
            font-size: 0.74rem !important;
            gap: 4px !important;
          }
          .pricing-benefit-item svg {
            width: 14px !important;
            height: 14px !important;
          }
          .pricing-cta-btn {
            padding: 10px 8px !important;
            font-size: 0.72rem !important;
            gap: 4px !important;
          }
        }
      `}</style>
    </section>
  );
}
