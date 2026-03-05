import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COLORS, WHATSAPP } from '../theme';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const waLink = 'https://wa.me/' + WHATSAPP.replace('+', '');

  const fade = (delay) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease ' + delay + 's, transform 0.8s ease ' + delay + 's',
  });

  return (
    <section style={{
      minHeight:   '100vh',
      background:  'radial-gradient(ellipse at 20% 50%, #1a1400 0%, #0a0a0a 60%)',
      display:     'flex',
      alignItems:  'center',
      position:    'relative',
      overflow:    'hidden',
      paddingTop:  '72px',
    }}>

      {/* Background gold circle top right */}
      <div style={{
        position:      'absolute',
        top:           '-200px',
        right:         '-200px',
        width:         '600px',
        height:        '600px',
        borderRadius:  '50%',
        background:    'radial-gradient(circle, ' + COLORS.gold + '15 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Background gold circle bottom left */}
      <div style={{
        position:      'absolute',
        bottom:        '-100px',
        left:          '-100px',
        width:         '400px',
        height:        '400px',
        borderRadius:  '50%',
        background:    'radial-gradient(circle, ' + COLORS.gold + '08 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Grid pattern overlay */}
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundImage: 'linear-gradient(' + COLORS.gold + '08 1px, transparent 1px), linear-gradient(90deg, ' + COLORS.gold + '08 1px, transparent 1px)',
        backgroundSize:  '60px 60px',
        pointerEvents:   'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin:   '0 auto',
        padding:  '4rem 2rem',
        width:    '100%',
      }}>
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '4rem',
          alignItems:          'center',
        }}>

          {/* Left — text content */}
          <div>

            {/* Badge */}
            <div style={{
              ...fade(0),
              display:      'inline-flex',
              alignItems:   'center',
              gap:          '8px',
              background:   COLORS.gold + '15',
              border:       '1px solid ' + COLORS.gold + '40',
              borderRadius: '100px',
              padding:      '6px 16px',
              marginBottom: '2rem',
            }}>
              <div style={{
                width:        '6px',
                height:       '6px',
                borderRadius: '50%',
                background:   COLORS.gold,
              }} />
              <span style={{
                color:         COLORS.gold,
                fontSize:      '11px',
                fontWeight:    '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}>
                Premium Charcoal — Liberia
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              ...fade(0.2),
              fontSize:      'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight:    '900',
              lineHeight:    '1.05',
              marginBottom:  '1.5rem',
              letterSpacing: '-1px',
            }}>
              <span style={{ color: COLORS.white }}>Fuel Your</span>
              <br />
              <span style={{ color: COLORS.gold }}>Fire With</span>
              <br />
              <span style={{ color: COLORS.white }}>The Best.</span>
            </h1>

            {/* Subheadline */}
            <p style={{
              ...fade(0.4),
              color:        COLORS.textLight,
              fontSize:     '1.1rem',
              lineHeight:   '1.7',
              marginBottom: '2.5rem',
              maxWidth:     '480px',
            }}>
              AfriCarbon delivers premium hardwood charcoal across Monrovia.
              High heat, long burn, low smoke — trusted by households and
              restaurants across Liberia.
            </p>

            {/* CTA buttons */}
            <div style={{
              ...fade(0.6),
              display:  'flex',
              gap:      '1rem',
              flexWrap: 'wrap',
            }}>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  background:     'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')',
                  color:          COLORS.black,
                  padding:        '16px 32px',
                  borderRadius:   '10px',
                  fontSize:       '14px',
                  fontWeight:     '800',
                  textDecoration: 'none',
                  letterSpacing:  '1px',
                  textTransform:  'uppercase',
                  display:        'inline-block',
                }}
              >
                Order on WhatsApp
              </a>
              <Link
                to="/products"
                style={{
                  background:     'transparent',
                  color:          COLORS.gold,
                  padding:        '16px 32px',
                  borderRadius:   '10px',
                  fontSize:       '14px',
                  fontWeight:     '700',
                  textDecoration: 'none',
                  letterSpacing:  '1px',
                  textTransform:  'uppercase',
                  border:         '1px solid ' + COLORS.gold + '50',
                  display:        'inline-block',
                }}
              >
                View Products
              </Link>
            </div>

            {/* Trust badges */}
            <div style={{
              ...fade(0.8),
              display:   'flex',
              gap:       '2rem',
              marginTop: '3rem',
              flexWrap:  'wrap',
            }}>
              {[
                { value: '100%', label: 'Natural Wood' },
                { value: 'Fast', label: 'Delivery'     },
                { value: '24/7', label: 'Support'      },
              ].map(badge => (
                <div key={badge.label}>
                  <div style={{
                    fontSize:   '1.5rem',
                    fontWeight: '900',
                    color:      COLORS.gold,
                  }}>
                    {badge.value}
                  </div>
                  <div style={{
                    fontSize:      '11px',
                    color:         COLORS.textMuted,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    {badge.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right — feature cards */}
          <div style={{
            ...fade(0.4),
            display:             'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:                 '1rem',
          }}>
            {[
              { icon: '🔥', title: 'High Heat',     desc: 'Maximum temperature for cooking and grilling'  },
              { icon: '⏱️', title: 'Long Burn',     desc: 'Burns longer so you use less per cook'         },
              { icon: '💨', title: 'Low Smoke',     desc: 'Clean burning — less smoke in your kitchen'    },
              { icon: '🚚', title: 'Fast Delivery', desc: 'Delivered to your door across Monrovia'        },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background:   COLORS.cardBg,
                  border:       '1px solid ' + COLORS.cardBorder,
                  borderRadius: '16px',
                  padding:      '1.5rem',
                  transition:   'border-color 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.gold + '60'}
                onMouseLeave={e => e.currentTarget.style.borderColor = COLORS.cardBorder}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
                  {card.icon}
                </div>
                <div style={{
                  color:        COLORS.white,
                  fontWeight:   '700',
                  fontSize:     '14px',
                  marginBottom: '0.4rem',
                }}>
                  {card.title}
                </div>
                <div style={{
                  color:      COLORS.textMuted,
                  fontSize:   '12px',
                  lineHeight: '1.5',
                }}>
                  {card.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position:      'absolute',
        bottom:        0,
        left:          0,
        right:         0,
        height:        '120px',
        background:    'linear-gradient(transparent, ' + COLORS.black + ')',
        pointerEvents: 'none',
      }} />

    </section>
  );
};

export default Hero;
