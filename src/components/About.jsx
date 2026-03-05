import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS, WHATSAPP } from '../theme';

const About = () => {
  const waLink = 'https://wa.me/' + WHATSAPP.replace('+', '');

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
            Our Story
          </span>
        </div>
        <h1 style={{
          fontSize:      'clamp(2rem, 5vw, 3.5rem)',
          fontWeight:    '900',
          color:         COLORS.white,
          marginBottom:  '1rem',
          letterSpacing: '-1px',
        }}>
          About
          <span style={{ color: COLORS.gold }}> AfriCarbon</span>
        </h1>
        <p style={{
          color:      COLORS.textMuted,
          fontSize:   '1.1rem',
          maxWidth:   '500px',
          margin:     '0 auto',
          lineHeight: '1.7',
        }}>
          A Liberian business with a vision to fuel Africa and power the world.
        </p>
      </div>

      <div style={{
        maxWidth: '1100px',
        margin:   '0 auto',
        padding:  '4rem 2rem',
      }}>

        {/* Mission + Story */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '2rem',
          marginBottom:        '4rem',
          alignItems:          'center',
        }}>
          {/* Big fire emblem */}
          <div style={{
            background:   'linear-gradient(135deg, #1a1400 0%, #111100 100%)',
            border:       '1px solid ' + COLORS.gold + '30',
            borderRadius: '24px',
            padding:      '4rem 2rem',
            textAlign:    'center',
          }}>
            <div style={{ fontSize: '6rem', marginBottom: '1.5rem' }}>🔥</div>
            <div style={{
              fontSize:      '2rem',
              fontWeight:    '900',
              color:         COLORS.gold,
              letterSpacing: '3px',
              marginBottom:  '0.5rem',
            }}>
              AFRICARBON
            </div>
            <div style={{
              color:         COLORS.textMuted,
              fontSize:      '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Fueling Africa. Powering the World.
            </div>
          </div>

          {/* Story text */}
          <div>
            <h2 style={{
              color:        COLORS.white,
              fontSize:     '1.8rem',
              fontWeight:   '900',
              marginBottom: '1.5rem',
              lineHeight:   '1.2',
            }}>
              Born in Liberia.
              <br />
              <span style={{ color: COLORS.gold }}>Built for Africa.</span>
            </h2>
            <p style={{
              color:        COLORS.textLight,
              fontSize:     '1rem',
              lineHeight:   '1.8',
              marginBottom: '1.25rem',
            }}>
              AfriCarbon was founded by Sylvester McDaniel Kollie with a simple
              but powerful vision — to take Liberia's rich forest resources and
              turn them into a world-class charcoal brand that serves households,
              restaurants, and businesses across Africa and beyond.
            </p>
            <p style={{
              color:        COLORS.textLight,
              fontSize:     '1rem',
              lineHeight:   '1.8',
              marginBottom: '1.25rem',
            }}>
              Operating across multiple production sites in Liberia, AfriCarbon
              combines traditional burning expertise with modern business
              management to deliver consistent, high-quality charcoal that
              customers trust.
            </p>
            <p style={{
              color:      COLORS.textMuted,
              fontSize:   '1rem',
              lineHeight: '1.8',
            }}>
              We are just getting started. Our goal is to expand across West
              Africa and into European markets — making AfriCarbon a name
              synonymous with premium charcoal from the African continent.
            </p>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              color:         COLORS.white,
              fontSize:      '2rem',
              fontWeight:    '900',
              marginBottom:  '0.75rem',
              letterSpacing: '-0.5px',
            }}>
              Our <span style={{ color: COLORS.gold }}>Core Values</span>
            </h2>
            <p style={{ color: COLORS.textMuted, fontSize: '1rem' }}>
              The principles that guide everything we do
            </p>
          </div>

          <div style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap:                 '1.5rem',
          }}>
            {[
              {
                icon:  '⭐',
                title: 'Quality',
                desc:  'Every bag meets consistent standards of size, weight, and burn efficiency. We never compromise.',
              },
              {
                icon:  '🌿',
                title: 'Sustainability',
                desc:  'We are committed to responsible forest management and plan to introduce eco-certified products.',
              },
              {
                icon:  '👥',
                title: 'Community',
                desc:  'We create jobs and economic opportunity for workers and families in rural Liberia.',
              },
              {
                icon:  '💡',
                title: 'Innovation',
                desc:  'We use technology to manage our business better — from production tracking to digital ordering.',
              },
              {
                icon:  '🤝',
                title: 'Transparency',
                desc:  'We operate with full visibility — our customers and investors always know what is happening.',
              },
              {
                icon:  '🌍',
                title: 'Vision',
                desc:  'We think beyond Liberia. AfriCarbon is an African brand built for the global market.',
              },
            ].map((val, i) => (
              <div
                key={i}
                style={{
                  background:   COLORS.cardBg,
                  border:       '1px solid ' + COLORS.cardBorder,
                  borderRadius: '16px',
                  padding:      '2rem 1.5rem',
                  transition:   'border-color 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.gold + '50'}
                onMouseLeave={e => e.currentTarget.style.borderColor = COLORS.cardBorder}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{val.icon}</div>
                <div style={{
                  color:        COLORS.gold,
                  fontWeight:   '800',
                  fontSize:     '1rem',
                  marginBottom: '0.5rem',
                }}>
                  {val.title}
                </div>
                <div style={{
                  color:      COLORS.textMuted,
                  fontSize:   '13px',
                  lineHeight: '1.6',
                }}>
                  {val.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              color:         COLORS.white,
              fontSize:      '2rem',
              fontWeight:    '900',
              marginBottom:  '0.75rem',
              letterSpacing: '-0.5px',
            }}>
              Our <span style={{ color: COLORS.gold }}>Growth Plan</span>
            </h2>
            <p style={{ color: COLORS.textMuted, fontSize: '1rem' }}>
              From Liberia to the world — one step at a time
            </p>
          </div>

          <div style={{
            display:       'flex',
            flexDirection: 'column',
            gap:           '1.5rem',
          }}>
            {[
              {
                phase: 'Phase 1',
                title: 'Establish & Scale',
                time:  'Year 1',
                color: COLORS.gold,
                active: true,
                items: [
                  'Complete business registration in Liberia',
                  'Scale to 6-10 batches per month',
                  'Secure restaurant and hotel contracts in Monrovia',
                  'Launch online ordering platform',
                ],
              },
              {
                phase: 'Phase 2',
                title: 'Regional Expansion',
                time:  'Year 2-3',
                color: '#C0C0C0',
                active: false,
                items: [
                  'Expand to neighboring West African countries',
                  'Introduce coconut shell and bamboo charcoal',
                  'Build regional distribution partnerships',
                  'Grow team with dedicated sales and operations staff',
                ],
              },
              {
                phase: 'Phase 3',
                title: 'International Markets',
                time:  'Year 3-5',
                color: '#CD7F32',
                active: false,
                items: [
                  'Obtain FSC sustainability certification',
                  'Export to UK, Germany, France and Netherlands',
                  'Launch AfriCarbon brand in European retail',
                  'Target $1M+ annual revenue',
                ],
              },
            ].map((phase, i) => (
              <div
                key={i}
                style={{
                  background:   COLORS.cardBg,
                  border:       '1px solid ' + (phase.active ? COLORS.gold + '40' : COLORS.cardBorder),
                  borderRadius: '16px',
                  padding:      '2rem',
                  display:      'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap:          '2rem',
                  alignItems:   'start',
                }}
              >
                <div style={{ textAlign: 'center', minWidth: '80px' }}>
                  <div style={{
                    width:          '48px',
                    height:         '48px',
                    borderRadius:   '50%',
                    background:     phase.color + '20',
                    border:         '2px solid ' + phase.color + '60',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    margin:         '0 auto 0.5rem',
                    fontSize:       '1.2rem',
                    fontWeight:     '900',
                    color:          phase.color,
                  }}>
                    {i + 1}
                  </div>
                  <div style={{
                    fontSize:   '10px',
                    color:      phase.color,
                    fontWeight: '700',
                    letterSpacing: '1px',
                  }}>
                    {phase.time}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize:     '10px',
                    color:        phase.color,
                    fontWeight:   '700',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem',
                  }}>
                    {phase.phase}
                  </div>
                  <div style={{
                    color:        COLORS.white,
                    fontSize:     '1.1rem',
                    fontWeight:   '800',
                    marginBottom: '1rem',
                  }}>
                    {phase.title}
                  </div>
                  <div style={{
                    display:       'flex',
                    flexDirection: 'column',
                    gap:           '0.5rem',
                  }}>
                    {phase.items.map((item, j) => (
                      <div key={j} style={{
                        display:    'flex',
                        alignItems: 'center',
                        gap:        '10px',
                      }}>
                        <div style={{
                          width:          '6px',
                          height:         '6px',
                          borderRadius:   '50%',
                          background:     phase.color,
                          flexShrink:     0,
                        }} />
                        <span style={{
                          color:    COLORS.textMuted,
                          fontSize: '13px',
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div style={{
          background:   'linear-gradient(135deg, #1a1400 0%, #111100 100%)',
          border:       '1px solid ' + COLORS.gold + '40',
          borderRadius: '24px',
          padding:      '4rem 2rem',
          textAlign:    'center',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
          <h3 style={{
            color:        COLORS.white,
            fontSize:     '1.8rem',
            fontWeight:   '900',
            marginBottom: '0.75rem',
          }}>
            Be Part of the Journey
          </h3>
          <p style={{
            color:        COLORS.textMuted,
            fontSize:     '1rem',
            marginBottom: '2rem',
            maxWidth:     '500px',
            margin:       '0 auto 2rem',
            lineHeight:   '1.7',
          }}>
            Whether you are a customer, investor, or business partner —
            AfriCarbon welcomes you. Let us build something great together.
          </p>
          <div style={{
            display:        'flex',
            gap:            '1rem',
            justifyContent: 'center',
            flexWrap:       'wrap',
          }}>
            <Link
              to="/order"
              style={{
                background:     'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')',
                color:          COLORS.black,
                padding:        '16px 32px',
                borderRadius:   '10px',
                fontSize:       '13px',
                fontWeight:     '800',
                textDecoration: 'none',
                letterSpacing:  '1px',
                textTransform:  'uppercase',
                display:        'inline-block',
              }}
            >
              Order Now
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              style={{
                background:     'transparent',
                color:          COLORS.gold,
                padding:        '16px 32px',
                borderRadius:   '10px',
                fontSize:       '13px',
                fontWeight:     '700',
                textDecoration: 'none',
                letterSpacing:  '1px',
                textTransform:  'uppercase',
                border:         '1px solid ' + COLORS.gold + '50',
                display:        'inline-block',
              }}
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
