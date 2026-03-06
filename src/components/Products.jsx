import React, { useState } from 'react';
import { COLORS, WHATSAPP, PRODUCTS } from '../theme';

const Products = () => {
  const [hovered, setHovered] = useState(null);

  const waOrder = () => {
    window.location.href = '/order';
  };

  return (
    <div style={{
      minHeight:  '100vh',
      background: COLORS.black,
      paddingTop: '72px',
    }}>

      {/* Page header */}
      <div style={{
        background:    'radial-gradient(ellipse at 50% 0%, #1a1400 0%, #0a0a0a 70%)',
        padding:       '5rem 2rem 4rem',
        textAlign:     'center',
        borderBottom:  '1px solid ' + COLORS.cardBorder,
        position:      'relative',
        overflow:      'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'linear-gradient(' + COLORS.gold + '06 1px, transparent 1px), linear-gradient(90deg, ' + COLORS.gold + '06 1px, transparent 1px)',
          backgroundSize:  '60px 60px',
          pointerEvents:   'none',
        }} />

        <div style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '8px',
          background:     COLORS.gold + '15',
          border:         '1px solid ' + COLORS.gold + '40',
          borderRadius:   '100px',
          padding:        '6px 16px',
          marginBottom:   '1.5rem',
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
            Our Products
          </span>
        </div>

        <h1 style={{
          fontSize:      'clamp(2rem, 5vw, 3.5rem)',
          fontWeight:    '900',
          color:         COLORS.white,
          marginBottom:  '1rem',
          letterSpacing: '-1px',
        }}>
          Premium Charcoal
          <span style={{ color: COLORS.gold }}> Products</span>
        </h1>
        <p style={{
          color:     COLORS.textMuted,
          fontSize:  '1.1rem',
          maxWidth:  '500px',
          margin:    '0 auto',
          lineHeight: '1.7',
        }}>
          High quality hardwood charcoal for households, restaurants,
          and bulk buyers across Monrovia and beyond.
        </p>
      </div>

      {/* Products grid */}
      <div style={{
        maxWidth: '1200px',
        margin:   '0 auto',
        padding:  '4rem 2rem',
      }}>
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap:                 '2rem',
        }}>
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background:    COLORS.cardBg,
                border:        '1px solid ' + (hovered === product.id ? COLORS.gold + '60' : COLORS.cardBorder),
                borderRadius:  '20px',
                overflow:      'hidden',
                transition:    'all 0.3s ease',
                transform:     hovered === product.id ? 'translateY(-4px)' : 'translateY(0)',
                display:       'flex',
                flexDirection: 'column',
                position:      'relative',
              }}
            >
              {/* Badge */}
              {product.badge && (
                <div style={{
                  position:   'absolute',
                  top:        '1.25rem',
                  right:      '1.25rem',
                  background: 'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')',
                  color:      COLORS.black,
                  fontSize:   '10px',
                  fontWeight: '800',
                  padding:    '4px 12px',
                  borderRadius: '100px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  zIndex:     1,
                }}>
                  {product.badge}
                </div>
              )}

              {/* Product icon area */}
              <div style={{
                background:     'linear-gradient(135deg, #1a1400 0%, ' + COLORS.cardBg + ' 100%)',
                padding:        '3rem 2rem',
                textAlign:      'center',
                borderBottom:   '1px solid ' + COLORS.cardBorder,
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  {i === 0 ? '🔥' : i === 1 ? '📦' : '⭐'}
                </div>
                <h2 style={{
                  color:         COLORS.white,
                  fontSize:      '1.3rem',
                  fontWeight:    '800',
                  marginBottom:  '0.5rem',
                  letterSpacing: '-0.5px',
                }}>
                  {product.name}
                </h2>
                <p style={{
                  color:      COLORS.textMuted,
                  fontSize:   '13px',
                  lineHeight: '1.6',
                }}>
                  {product.description}
                </p>
              </div>

              {/* Pricing */}
              <div style={{
                padding:      '1.5rem 2rem',
                borderBottom: '1px solid ' + COLORS.cardBorder,
              }}>
                {product.price_retail && (
                  <div style={{
                    display:        'flex',
                    justifyContent: 'space-between',
                    alignItems:     'center',
                    marginBottom:   '0.75rem',
                  }}>
                    <span style={{
                      color:     COLORS.textMuted,
                      fontSize:  '13px',
                    }}>
                      Retail Price
                    </span>
                    <span style={{
                      color:      COLORS.gold,
                      fontSize:   '1.3rem',
                      fontWeight: '900',
                    }}>
                      L${product.price_retail.toLocaleString()}
                      <span style={{
                        color:    COLORS.textDim,
                        fontSize: '11px',
                        fontWeight: '400',
                        marginLeft: '4px',
                      }}>
                        {product.unit}
                      </span>
                    </span>
                  </div>
                )}
                {product.price_wholesale && (
                  <div style={{
                    display:        'flex',
                    justifyContent: 'space-between',
                    alignItems:     'center',
                  }}>
                    <span style={{
                      color:    COLORS.textMuted,
                      fontSize: '13px',
                    }}>
                      Wholesale Price
                    </span>
                    <span style={{
                      color:      COLORS.textLight,
                      fontSize:   '1.1rem',
                      fontWeight: '700',
                    }}>
                      L${product.price_wholesale.toLocaleString()}
                      <span style={{
                        color:      COLORS.textDim,
                        fontSize:   '11px',
                        fontWeight: '400',
                        marginLeft: '4px',
                      }}>
                        {product.unit}
                      </span>
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <div style={{ padding: '1.5rem 2rem', flex: 1 }}>
                <div style={{
                  fontSize:      '10px',
                  color:         COLORS.textDim,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom:  '1rem',
                  fontWeight:    '700',
                }}>
                  What You Get
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {product.features.map((f, fi) => (
                    <div key={fi} style={{
                      display:    'flex',
                      alignItems: 'center',
                      gap:        '10px',
                    }}>
                      <div style={{
                        width:        '18px',
                        height:       '18px',
                        borderRadius: '50%',
                        background:   COLORS.gold + '20',
                        border:       '1px solid ' + COLORS.gold + '40',
                        display:      'flex',
                        alignItems:   'center',
                        justifyContent: 'center',
                        flexShrink:   0,
                        fontSize:     '10px',
                        color:        COLORS.gold,
                        fontWeight:   '900',
                      }}>
                        ✓
                      </div>
                      <span style={{
                        color:    COLORS.textLight,
                        fontSize: '13px',
                      }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ padding: '1.5rem 2rem' }}>
                <button
                  onClick={() => waOrder()}
                  style={{
                    width:         '100%',
                    background:    hovered === product.id
                      ? 'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')'
                      : 'transparent',
                    color:         hovered === product.id ? COLORS.black : COLORS.gold,
                    border:        '1px solid ' + COLORS.gold + '60',
                    borderRadius:  '10px',
                    padding:       '14px',
                    fontSize:      '13px',
                    fontWeight:    '800',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor:        'pointer',
                    transition:    'all 0.3s ease',
                  }}
                >
                  Order on WhatsApp
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bulk order banner */}
        <div style={{
          marginTop:    '4rem',
          background:   'linear-gradient(135deg, #1a1400 0%, #111100 100%)',
          border:       '1px solid ' + COLORS.gold + '40',
          borderRadius: '20px',
          padding:      '3rem 2rem',
          textAlign:    'center',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚚</div>
          <h3 style={{
            color:        COLORS.white,
            fontSize:     '1.5rem',
            fontWeight:   '800',
            marginBottom: '0.75rem',
          }}>
            Need a Large Order?
          </h3>
          <p style={{
            color:        COLORS.textMuted,
            fontSize:     '1rem',
            marginBottom: '2rem',
            maxWidth:     '500px',
            margin:       '0 auto 2rem',
            lineHeight:   '1.7',
          }}>
            We offer special pricing for bulk orders of 20+ bags.
            Contact us directly for restaurants, hotels, and business buyers.
          </p>
          <a
            href={'https://wa.me/' + WHATSAPP.replace('+', '') + '?text=' + encodeURIComponent('Hello AfriCarbon! I am interested in placing a bulk order. Please send me pricing details.')}
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
            Get Bulk Pricing
          </a>
        </div>
      </div>

    </div>
  );
};

export default Products;
