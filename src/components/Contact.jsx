import React, { useState } from 'react';
import { COLORS, WHATSAPP, DELIVERY_AREAS } from '../theme';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const waLink    = 'https://wa.me/' + WHATSAPP.replace('+', '');
  const waGeneral = waLink + '?text=' + encodeURIComponent('Hello AfriCarbon! I would like to get in touch.');

  const copyPhone = () => {
    navigator.clipboard.writeText(WHATSAPP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight:  '100vh',
      background: COLORS.black,
      paddingTop: '72px',
    }}>

      {/* Page header */}
      <div style={{
        background:   'radial-gradient(ellipse at 50% 0%, #1a1400 0%, #0a0a0a 70%)',
        padding:      '5rem 2rem 4rem',
        textAlign:    'center',
        borderBottom: '1px solid ' + COLORS.cardBorder,
        position:     'relative',
        overflow:     'hidden',
      }}>
        <div style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'linear-gradient(' + COLORS.gold + '06 1px, transparent 1px), linear-gradient(90deg, ' + COLORS.gold + '06 1px, transparent 1px)',
          backgroundSize:  '60px 60px',
          pointerEvents:   'none',
        }} />
        <div style={{
          display:      'inline-flex',
          alignItems:   'center',
          gap:          '8px',
          background:   COLORS.gold + '15',
          border:       '1px solid ' + COLORS.gold + '40',
          borderRadius: '100px',
          padding:      '6px 16px',
          marginBottom: '1.5rem',
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
            Get In Touch
          </span>
        </div>
        <h1 style={{
          fontSize:      'clamp(2rem, 5vw, 3.5rem)',
          fontWeight:    '900',
          color:         COLORS.white,
          marginBottom:  '1rem',
          letterSpacing: '-1px',
        }}>
          Contact
          <span style={{ color: COLORS.gold }}> Us</span>
        </h1>
        <p style={{
          color:      COLORS.textMuted,
          fontSize:   '1.1rem',
          maxWidth:   '500px',
          margin:     '0 auto',
          lineHeight: '1.7',
        }}>
          We are available 7 days a week. Reach us on WhatsApp or by phone
          for orders, bulk pricing, or any questions.
        </p>
      </div>

      <div style={{
        maxWidth: '1100px',
        margin:   '0 auto',
        padding:  '4rem 2rem',
      }}>

        {/* Contact cards row */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap:                 '1.5rem',
          marginBottom:        '4rem',
        }}>

          {/* WhatsApp */}
          <div style={{
            background:   'linear-gradient(135deg, #0d2010, #111111)',
            border:       '1px solid #25D36640',
            borderRadius: '20px',
            padding:      '2.5rem 2rem',
            textAlign:    'center',
            transition:   'transform 0.3s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
            <div style={{
              color:        '#25D366',
              fontWeight:   '800',
              fontSize:     '1.1rem',
              marginBottom: '0.5rem',
            }}>
              WhatsApp
            </div>
            <div style={{
              color:        COLORS.textMuted,
              fontSize:     '13px',
              marginBottom: '1.5rem',
              lineHeight:   '1.6',
            }}>
              Fastest way to reach us. Send a message anytime and we will
              respond within 30 minutes.
            </div>
            <a
              href={waGeneral}
              target="_blank"
              rel="noreferrer"
              style={{
                background:     '#25D366',
                color:          '#ffffff',
                padding:        '12px 24px',
                borderRadius:   '10px',
                fontSize:       '13px',
                fontWeight:     '800',
                textDecoration: 'none',
                letterSpacing:  '1px',
                textTransform:  'uppercase',
                display:        'inline-block',
              }}
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Phone */}
          <div style={{
            background:   COLORS.cardBg,
            border:       '1px solid ' + COLORS.cardBorder,
            borderRadius: '20px',
            padding:      '2.5rem 2rem',
            textAlign:    'center',
            transition:   'transform 0.3s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
            <div style={{
              color:        COLORS.gold,
              fontWeight:   '800',
              fontSize:     '1.1rem',
              marginBottom: '0.5rem',
            }}>
              Phone Call
            </div>
            <div style={{
              color:        COLORS.textMuted,
              fontSize:     '13px',
              marginBottom: '1rem',
              lineHeight:   '1.6',
            }}>
              Prefer to talk? Call us directly and we will take your
              order or answer your questions.
            </div>
            <a
              href={'tel:' + WHATSAPP}
              style={{
                color:          COLORS.gold,
                fontSize:       '1.2rem',
                fontWeight:     '900',
                textDecoration: 'none',
                display:        'block',
                marginBottom:   '1rem',
              }}
            >
              {WHATSAPP}
            </a>
            <button
              onClick={copyPhone}
              style={{
                background:    copied ? COLORS.gold + '20' : 'transparent',
                color:         copied ? COLORS.gold : COLORS.textMuted,
                border:        '1px solid ' + (copied ? COLORS.gold + '50' : COLORS.cardBorder),
                borderRadius:  '8px',
                padding:       '8px 20px',
                fontSize:      '12px',
                fontWeight:    '600',
                cursor:        'pointer',
                transition:    'all 0.2s ease',
                letterSpacing: '1px',
              }}
            >
              {copied ? '✓ Copied!' : 'Copy Number'}
            </button>
          </div>

          {/* Hours */}
          <div style={{
            background:   COLORS.cardBg,
            border:       '1px solid ' + COLORS.cardBorder,
            borderRadius: '20px',
            padding:      '2.5rem 2rem',
            textAlign:    'center',
            transition:   'transform 0.3s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕐</div>
            <div style={{
              color:        COLORS.gold,
              fontWeight:   '800',
              fontSize:     '1.1rem',
              marginBottom: '0.5rem',
            }}>
              Business Hours
            </div>
            <div style={{
              color:        COLORS.textMuted,
              fontSize:     '13px',
              marginBottom: '1.5rem',
              lineHeight:   '1.6',
            }}>
              We are available every day to serve you.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { day: 'Monday – Friday', time: '7:00 AM – 8:00 PM' },
                { day: 'Saturday',        time: '7:00 AM – 6:00 PM' },
                { day: 'Sunday',          time: '9:00 AM – 4:00 PM' },
              ].map(h => (
                <div key={h.day} style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  alignItems:     'center',
                  padding:        '8px 12px',
                  background:     '#111111',
                  borderRadius:   '8px',
                }}>
                  <span style={{ color: COLORS.textMuted, fontSize: '12px' }}>{h.day}</span>
                  <span style={{ color: COLORS.gold, fontSize: '12px', fontWeight: '700' }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Delivery areas */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{
              color:         COLORS.white,
              fontSize:      '2rem',
              fontWeight:    '900',
              marginBottom:  '0.75rem',
              letterSpacing: '-0.5px',
            }}>
              Delivery <span style={{ color: COLORS.gold }}>Areas</span>
            </h2>
            <p style={{ color: COLORS.textMuted, fontSize: '1rem' }}>
              We currently deliver across the Monrovia area
            </p>
          </div>

          <div style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap:                 '1rem',
          }}>
            {DELIVERY_AREAS.map((area, i) => (
              <div
                key={i}
                style={{
                  background:   COLORS.cardBg,
                  border:       '1px solid ' + COLORS.cardBorder,
                  borderRadius: '14px',
                  padding:      '1.5rem',
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '1rem',
                  transition:   'border-color 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.gold + '50'}
                onMouseLeave={e => e.currentTarget.style.borderColor = COLORS.cardBorder}
              >
                <div style={{
                  width:          '42px',
                  height:         '42px',
                  borderRadius:   '10px',
                  background:     COLORS.gold + '15',
                  border:         '1px solid ' + COLORS.gold + '30',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontSize:       '1.2rem',
                  flexShrink:     0,
                }}>
                  📍
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    color:      COLORS.white,
                    fontWeight: '700',
                    fontSize:   '14px',
                  }}>
                    {area.area}
                  </div>
                  <div style={{
                    color:     COLORS.textDim,
                    fontSize:  '12px',
                    marginTop: '2px',
                  }}>
                    {area.fee}
                  </div>
                </div>
                <div style={{
                  color:         COLORS.gold,
                  fontSize:      '11px',
                  fontWeight:    '700',
                  background:    COLORS.gold + '15',
                  padding:       '4px 10px',
                  borderRadius:  '100px',
                  whiteSpace:    'nowrap',
                  flexShrink:    0,
                }}>
                  {area.time}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop:    '1.5rem',
            background:   COLORS.gold + '10',
            border:       '1px solid ' + COLORS.gold + '30',
            borderRadius: '12px',
            padding:      '1rem 1.5rem',
            textAlign:    'center',
          }}>
            <p style={{
              color:    COLORS.gold,
              fontSize: '13px',
              fontWeight: '600',
            }}>
              🚚 Free delivery on orders of 10+ bags within Monrovia Central, Sinkor, Congo Town and Bushrod Island
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{
              color:         COLORS.white,
              fontSize:      '2rem',
              fontWeight:    '900',
              marginBottom:  '0.75rem',
              letterSpacing: '-0.5px',
            }}>
              Common <span style={{ color: COLORS.gold }}>Questions</span>
            </h2>
          </div>

          <div style={{
            display:       'flex',
            flexDirection: 'column',
            gap:           '1rem',
            maxWidth:      '700px',
            margin:        '0 auto',
          }}>
            {[
              {
                q: 'How do I place an order?',
                a: 'You can place an order through our Order page, or contact us directly on WhatsApp or by phone. We will confirm your order and arrange delivery.',
              },
              {
                q: 'What is the minimum order quantity?',
                a: 'There is no minimum for retail orders. For wholesale pricing, a minimum of 20 bags is required.',
              },
              {
                q: 'How long does delivery take?',
                a: 'Delivery within Monrovia Central and Sinkor takes 1-2 hours. Other areas may take 2-4 hours. We will confirm the exact time when you order.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash on delivery and mobile money. You can select your preferred method when placing your order.',
              },
              {
                q: 'Do you offer bulk or business pricing?',
                a: 'Yes! We offer special pricing for restaurants, hotels, and bulk buyers of 20+ bags. Contact us on WhatsApp for a custom quote.',
              },
              {
                q: 'Do you deliver outside Monrovia?',
                a: 'Currently we deliver within the Monrovia area. For deliveries outside Monrovia, please contact us directly to arrange.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  background:   COLORS.cardBg,
                  border:       '1px solid ' + COLORS.cardBorder,
                  borderRadius: '14px',
                  padding:      '1.5rem',
                  transition:   'border-color 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.gold + '40'}
                onMouseLeave={e => e.currentTarget.style.borderColor = COLORS.cardBorder}
              >
                <div style={{
                  color:        COLORS.white,
                  fontWeight:   '700',
                  fontSize:     '15px',
                  marginBottom: '0.75rem',
                  display:      'flex',
                  alignItems:   'flex-start',
                  gap:          '10px',
                }}>
                  <span style={{
                    color:      COLORS.gold,
                    fontWeight: '900',
                    flexShrink: 0,
                  }}>Q.</span>
                  {faq.q}
                </div>
                <div style={{
                  color:      COLORS.textMuted,
                  fontSize:   '13px',
                  lineHeight: '1.7',
                  display:    'flex',
                  gap:        '10px',
                }}>
                  <span style={{
                    color:      COLORS.textDim,
                    fontWeight: '700',
                    flexShrink: 0,
                  }}>A.</span>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          background:   'linear-gradient(135deg, #1a1400 0%, #111100 100%)',
          border:       '1px solid ' + COLORS.gold + '40',
          borderRadius: '24px',
          padding:      '4rem 2rem',
          textAlign:    'center',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔥</div>
          <h3 style={{
            color:        COLORS.white,
            fontSize:     '1.8rem',
            fontWeight:   '900',
            marginBottom: '0.75rem',
          }}>
            Ready to Order?
          </h3>
          <p style={{
            color:        COLORS.textMuted,
            fontSize:     '1rem',
            marginBottom: '2rem',
            maxWidth:     '400px',
            margin:       '0 auto 2rem',
            lineHeight:   '1.7',
          }}>
            Contact us now and we will get your charcoal delivered fast.
          </p>
          <a
            href={waGeneral}
            target="_blank"
            rel="noreferrer"
            style={{
              background:     'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')',
              color:          COLORS.black,
              padding:        '16px 40px',
              borderRadius:   '10px',
              fontSize:       '13px',
              fontWeight:     '800',
              textDecoration: 'none',
              letterSpacing:  '1px',
              textTransform:  'uppercase',
              display:        'inline-block',
            }}
          >
            Message Us on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
