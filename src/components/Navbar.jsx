import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COLORS } from '../theme';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { label: 'Home',     to: '/'         },
    { label: 'Products', to: '/products' },
    { label: 'Order',    to: '/order'    },
    { label: 'About',    to: '/about'    },
    { label: 'Contact',  to: '/contact'  },
  ];

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <React.Fragment>
      <nav style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        zIndex:         1000,
        background:     scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom:   scrolled ? '1px solid ' + COLORS.cardBorder : 'none',
        transition:     'all 0.3s ease',
        padding:        '0 2rem',
      }}>
        <div style={{
          maxWidth:       '1200px',
          margin:         '0 auto',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          height:         '72px',
        }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width:          '36px',
                height:         '36px',
                background:     'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')',
                borderRadius:   '8px',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontSize:       '18px',
              }}>
                🔥
              </div>
              <div>
                <div style={{
                  fontSize:      '20px',
                  fontWeight:    '900',
                  color:         COLORS.gold,
                  letterSpacing: '2px',
                }}>
                  AFRICARBON
                </div>
                <div style={{
                  fontSize:      '9px',
                  color:         COLORS.textMuted,
                  letterSpacing: '1px',
                  marginTop:     '-2px',
                }}>
                  FUELING AFRICA. POWERING THE WORLD.
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div
            className="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  textDecoration: 'none',
                  color:          isActive(link.to) ? COLORS.gold : COLORS.textLight,
                  fontSize:       '13px',
                  fontWeight:     isActive(link.to) ? '700' : '400',
                  letterSpacing:  '1px',
                  textTransform:  'uppercase',
                  borderBottom:   isActive(link.to) ? '2px solid ' + COLORS.gold : '2px solid transparent',
                  paddingBottom:  '4px',
                  transition:     'all 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

            {/* Desktop CTA */}
            <Link
               to="/order"
               className="desktop-nav"
               style={{
               background:     'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')',
               color:          COLORS.black,
               padding:        '10px 20px',
               borderRadius:   '8px',
               fontSize:       '12px',
               fontWeight:     '800',
               textDecoration: 'none',
               letterSpacing:  '1px',
               textTransform:  'uppercase',
               whiteSpace:     'nowrap',
           }}
             >
              Order Now
           </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-nav"
              style={{
                background:    'none',
                border:        '1px solid ' + COLORS.cardBorder,
                borderRadius:  '8px',
                padding:       '8px 10px',
                cursor:        'pointer',
                display:       'flex',
                flexDirection: 'column',
                gap:           '5px',
              }}
            >
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width:        '22px',
                  height:       '2px',
                  background:   COLORS.gold,
                  borderRadius: '2px',
                  transition:   'all 0.3s ease',
                  opacity:      menuOpen && i === 1 ? 0 : 1,
                  transform:    menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                              : menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                              : 'none',
                }} />
              ))}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position:       'fixed',
          top:            '72px',
          left:           0,
          right:          0,
          background:     'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom:   '1px solid ' + COLORS.cardBorder,
          zIndex:         999,
          padding:        '1.5rem 2rem',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  textDecoration: 'none',
                  color:          isActive(link.to) ? COLORS.gold : COLORS.textLight,
                  fontSize:       '16px',
                  fontWeight:     isActive(link.to) ? '700' : '400',
                  padding:        '12px 0',
                  borderBottom:   '1px solid ' + COLORS.cardBorder,
                  letterSpacing:  '1px',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              style={{
              background:     'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')',
              color:          COLORS.black,
              padding:        '14px 20px',
              borderRadius:   '8px',
              fontSize:       '14px',
              fontWeight:     '800',
              textDecoration: 'none',
              textAlign:      'center',
              marginTop:      '1rem',
              letterSpacing:  '1px',
              textTransform:  'uppercase',
              display:        'block',
            }}
            >
               Order Now
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav  { display: none  !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none  !important; }
          .mobile-nav  { display: flex  !important; }
        }
      `}</style>

    </React.Fragment>
  );
};

export default Navbar;
