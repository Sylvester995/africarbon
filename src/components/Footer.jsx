import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS, WHATSAPP } from '../theme';

const Footer = () => {
  const waLink = 'https://wa.me/' + WHATSAPP.replace('+', '');
  const year   = new Date().getFullYear();

  return (
    <footer style={{
      background:   '#080808',
      borderTop:    '1px solid ' + COLORS.cardBorder,
      paddingTop:   '4rem',
    }}>

      <div style={{
        maxWidth: '1200px',
        margin:   '0 auto',
        padding:  '0 2rem',
      }}>

        {/* Top section */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap:                 '3rem',
          paddingBottom:       '3rem',
          borderBottom:        '1px solid ' + COLORS.cardBorder,
        }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{
                width:          '36px',
                height:         '36px',
                background:     'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')',
                borderRadius:   '8px',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontSize:       '18px',
                flexShrink:     0,
              }}>
                🔥
              </div>
              <div>
                <div style={{
                  fontSize:      '18px',
                  fontWeight:    '900',
                  color:         COLORS.gold,
                  letterSpacing: '2px',
                }}>
                  AFRICARBON
                </div>
                <div style={{
                  fontSize:      '8px',
                  color:         COLORS.textDim,
                  letterSpacing: '1px',
                  marginTop:     '-1px',
                }}>
                  FUELING AFRICA. POWERING THE WORLD.
                </div>
              </div>
            </div>
            <p style={{
              color:        COLORS.textDim,
              fontSize:     '13px',
              lineHeight:   '1.7',
              marginBottom: '1.5rem',
            }}>
              Premium hardwood charcoal from the heart of Liberia.
              Serving households, restaurants and businesses across
              Monrovia and beyond.
            </p>
            {/* Social / contact icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  width:          '38px',
                  height:         '38px',
                  background:     '#25D36620',
                  border:         '1px solid #25D36640',
                  borderRadius:   '10px',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontSize:       '1.1rem',
                  textDecoration: 'none',
                  transition:     'background 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#25D36640'}
                onMouseLeave={e => e.currentTarget.style.background = '#25D36620'}
              >
                💬
              </a>
              <a
                href={'tel:' + WHATSAPP}
                style={{
                  width:          '38px',
                  height:         '38px',
                  background:     COLORS.gold + '15',
                  border:         '1px solid ' + COLORS.gold + '30',
                  borderRadius:   '10px',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontSize:       '1.1rem',
                  textDecoration: 'none',
                  transition:     'background 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = COLORS.gold + '30'}
                onMouseLeave={e => e.currentTarget.style.background = COLORS.gold + '15'}
              >
                📞
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{
              color:         COLORS.gold,
              fontSize:      '11px',
              fontWeight:    '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom:  '1.25rem',
            }}>
              Quick Links
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Home',     to: '/'         },
                { label: 'Products', to: '/products' },
                { label: 'Order',    to: '/order'    },
                { label: 'About',    to: '/about'    },
                { label: 'Contact',  to: '/contact'  },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    color:          COLORS.textDim,
                    textDecoration: 'none',
                    fontSize:       '13px',
                    transition:     'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = COLORS.gold}
                  onMouseLeave={e => e.currentTarget.style.color = COLORS.textDim}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div style={{
              color:         COLORS.gold,
              fontSize:      '11px',
              fontWeight:    '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom:  '1.25rem',
            }}>
              Products
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                'Standard Wood Charcoal',
                'Bulk Wholesale Orders',
                'Premium Restaurant Grade',
                'Coming Soon: Coconut Shell',
                'Coming Soon: Bamboo Charcoal',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    color:    i >= 3 ? COLORS.textDim + '80' : COLORS.textDim,
                    fontSize: '13px',
                    fontStyle: i >= 3 ? 'italic' : 'normal',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div style={{
              color:         COLORS.gold,
              fontSize:      '11px',
              fontWeight:    '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom:  '1.25rem',
            }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ color: COLORS.textDim, fontSize: '11px', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  WhatsApp
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color:          COLORS.gold,
                    fontSize:       '13px',
                    fontWeight:     '600',
                    textDecoration: 'none',
                  }}
                >
                  {WHATSAPP}
                </a>
              </div>
              <div>
                <div style={{ color: COLORS.textDim, fontSize: '11px', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Phone
                </div>
                <a
                  href={'tel:' + WHATSAPP}
                  style={{
                    color:          COLORS.textLight,
                    fontSize:       '13px',
                    fontWeight:     '600',
                    textDecoration: 'none',
                  }}
                >
                  {WHATSAPP}
                </a>
              </div>
              <div>
                <div style={{ color: COLORS.textDim, fontSize: '11px', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Location
                </div>
                <div style={{ color: COLORS.textLight, fontSize: '13px' }}>
                  Monrovia, Liberia
                </div>
              </div>
              <div>
                <div style={{ color: COLORS.textDim, fontSize: '11px', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Hours
                </div>
                <div style={{ color: COLORS.textLight, fontSize: '13px' }}>
                  Mon–Fri: 7AM – 8PM
                </div>
                <div style={{ color: COLORS.textDim, fontSize: '12px' }}>
                  Sat: 7AM – 6PM | Sun: 9AM – 4PM
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          padding:        '1.5rem 0',
          flexWrap:       'wrap',
          gap:            '1rem',
        }}>
          <div style={{
            color:    COLORS.textDim,
            fontSize: '12px',
          }}>
            © {year} AfriCarbon. All rights reserved. Made in 🇱🇷 Liberia.
          </div>
          <div style={{
            color:    COLORS.textDim,
            fontSize: '12px',
            display:  'flex',
            gap:      '1.5rem',
          }}>
            <span>Fueling Africa.</span>
            <span style={{ color: COLORS.gold }}>Powering the World.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
