import React, { useState } from 'react';
import { COLORS, WHATSAPP, PRODUCTS, DELIVERY_AREAS } from '../theme';

const EMPTY = {
  name:     '',
  phone:    '',
  area:     '',
  product:  '',
  quantity: '1',
  type:     'retail',
  payment:  'cash',
  notes:    '',
};

const Order = () => {
  const [form,       setForm]       = useState(EMPTY);
  const [submitted,  setSubmitted]  = useState(false);

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const selectedProduct = PRODUCTS.find(p => p.id === Number(form.product));

  const totalPrice = () => {
    if (!selectedProduct || !form.quantity) return 0;
    const price = form.type === 'retail'
      ? selectedProduct.price_retail || selectedProduct.price_wholesale
      : selectedProduct.price_wholesale || selectedProduct.price_retail;
    return price * Number(form.quantity);
  };

    const handleOrder = () => {
    if (!form.name) {
      alert('Please enter your full name.');
      return;
    }
    if (!form.phone) {
      alert('Please enter your phone number.');
      return;
    }
    if (!form.area) {
      alert('Please select your delivery area.');
      return;
    }
    if (!form.product) {
      alert('Please select a product before ordering.');
      return;
    }

    const price = form.type === 'retail'
      ? selectedProduct.price_retail || selectedProduct.price_wholesale
      : selectedProduct.price_wholesale || selectedProduct.price_retail;

    const msg = [
      '🔥 *NEW ORDER — AfriCarbon*',
      '',
      '*Customer Details:*',
      'Name: ' + form.name,
      'Phone: ' + form.phone,
      'Delivery Area: ' + form.area,
      '',
      '*Order Details:*',
      'Product: ' + selectedProduct.name,
      'Quantity: ' + form.quantity + ' bag(s)',
      'Sale Type: ' + (form.type === 'retail' ? 'Retail' : 'Wholesale'),
      'Price per bag: L$' + price,
      'Total: L$' + totalPrice().toLocaleString(),
      '',
      '*Payment Method:* ' + (form.payment === 'cash' ? 'Cash on Delivery' : 'Mobile Money'),
      '',
      form.notes ? '*Additional Notes:* ' + form.notes : '',
    ].filter(Boolean).join('\n');

    window.open(
      'https://wa.me/' + WHATSAPP.replace('+', '') + '?text=' + encodeURIComponent(msg),
      '_blank'
    );
    setSubmitted(true);
  };

  const isValid = form.name && form.phone && form.area && form.product;

  const inputStyle = {
    width:         '100%',
    background:    '#111111',
    border:        '1px solid ' + COLORS.cardBorder,
    borderRadius:  '10px',
    padding:       '14px 16px',
    color:         COLORS.white,
    fontSize:      '14px',
    outline:       'none',
    boxSizing:     'border-box',
    fontFamily:    'Arial, sans-serif',
    transition:    'border-color 0.2s ease',
  };

  const labelStyle = {
    display:       'block',
    color:         COLORS.textMuted,
    fontSize:      '11px',
    fontWeight:    '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom:  '8px',
  };

  if (submitted) {
    return (
      <div style={{
        minHeight:      '100vh',
        background:     COLORS.black,
        paddingTop:     '72px',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '2rem',
      }}>
        <div style={{
          background:   COLORS.cardBg,
          border:       '1px solid ' + COLORS.gold + '40',
          borderRadius: '24px',
          padding:      '4rem 3rem',
          textAlign:    'center',
          maxWidth:     '480px',
          width:        '100%',
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎉</div>
          <h2 style={{
            color:        COLORS.gold,
            fontSize:     '1.8rem',
            fontWeight:   '900',
            marginBottom: '1rem',
          }}>
            Order Sent!
          </h2>
          <p style={{
            color:        COLORS.textMuted,
            fontSize:     '1rem',
            lineHeight:   '1.7',
            marginBottom: '2rem',
          }}>
            Your order has been sent to AfriCarbon on WhatsApp.
            We will confirm your order and delivery details shortly.
          </p>
          <div style={{
            background:   COLORS.gold + '10',
            border:       '1px solid ' + COLORS.gold + '30',
            borderRadius: '12px',
            padding:      '1rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <p style={{
              color:    COLORS.gold,
              fontSize: '13px',
              fontWeight: '600',
            }}>
              Expected response time: within 30 minutes
            </p>
          </div>
          <button
            onClick={() => { setForm(EMPTY); setSubmitted(false); }}
            style={{
              background:    'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')',
              color:         COLORS.black,
              border:        'none',
              borderRadius:  '10px',
              padding:       '14px 32px',
              fontSize:      '13px',
              fontWeight:    '800',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor:        'pointer',
            }}
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

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
            Place Your Order
          </span>
        </div>
        <h1 style={{
          fontSize:      'clamp(2rem, 5vw, 3.5rem)',
          fontWeight:    '900',
          color:         COLORS.white,
          marginBottom:  '1rem',
          letterSpacing: '-1px',
        }}>
          Order
          <span style={{ color: COLORS.gold }}> AfriCarbon</span>
        </h1>
        <p style={{
          color:      COLORS.textMuted,
          fontSize:   '1.1rem',
          maxWidth:   '500px',
          margin:     '0 auto',
          lineHeight: '1.7',
        }}>
          Fill in your details and we will send your order directly
          to our WhatsApp for fast confirmation and delivery.
        </p>
      </div>

      {/* Order form + summary */}
      <div style={{
        maxWidth: '1100px',
        margin:   '0 auto',
        padding:  '4rem 2rem',
        display:  'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap:      '2rem',
        alignItems: 'start',
      }}>

        {/* Form */}
        <div style={{
          background:   COLORS.cardBg,
          border:       '1px solid ' + COLORS.cardBorder,
          borderRadius: '20px',
          padding:      '2.5rem',
        }}>
          <h2 style={{
            color:        COLORS.white,
            fontSize:     '1.2rem',
            fontWeight:   '800',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid ' + COLORS.cardBorder,
          }}>
            Your Details
          </h2>

          {/* Name */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={e => set('name', e.target.value)}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = COLORS.gold + '80'}
              onBlur={e => e.target.style.borderColor = COLORS.cardBorder}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Phone Number</label>
            <input
              type="tel"
              placeholder="+231 XX XXX XXXX"
              value={form.phone}
              onChange={e => set('phone', e.target.value)}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = COLORS.gold + '80'}
              onBlur={e => e.target.style.borderColor = COLORS.cardBorder}
            />
          </div>

          {/* Delivery area */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Delivery Area</label>
            <select
              value={form.area}
              onChange={e => set('area', e.target.value)}
              style={inputStyle}
            >
              <option value="">Select your area</option>
              {DELIVERY_AREAS.map(a => (
                <option key={a.area} value={a.area}>{a.area}</option>
              ))}
            </select>
          </div>

          {/* Delivery time info */}
          {form.area && (
            <div style={{
              background:   COLORS.gold + '10',
              border:       '1px solid ' + COLORS.gold + '30',
              borderRadius: '10px',
              padding:      '12px 16px',
              marginBottom: '1.5rem',
              display:      'flex',
              gap:          '12px',
              alignItems:   'center',
            }}>
              <span style={{ fontSize: '1.2rem' }}>🚚</span>
              <div>
                <div style={{ color: COLORS.gold, fontSize: '12px', fontWeight: '700' }}>
                  {DELIVERY_AREAS.find(a => a.area === form.area)?.time}
                </div>
                <div style={{ color: COLORS.textMuted, fontSize: '11px' }}>
                  {DELIVERY_AREAS.find(a => a.area === form.area)?.fee}
                </div>
              </div>
            </div>
          )}

          {/* Product */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Product</label>
            <select
              value={form.product}
              onChange={e => set('product', e.target.value)}
              style={inputStyle}
            >
              <option value="">Select a product</option>
              {PRODUCTS.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Quantity + Type row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:     '1rem',
            marginBottom: '1.5rem',
          }}>
            <div>
              <label style={labelStyle}>Quantity (bags)</label>
              <input
                type="number"
                min="1"
                max="500"
                value={form.quantity}
                onChange={e => set('quantity', e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = COLORS.gold + '80'}
                onBlur={e => e.target.style.borderColor = COLORS.cardBorder}
              />
            </div>
            <div>
              <label style={labelStyle}>Sale Type</label>
              <select
                value={form.type}
                onChange={e => set('type', e.target.value)}
                style={inputStyle}
              >
                <option value="retail">Retail</option>
                <option value="wholesale">Wholesale</option>
              </select>
            </div>
          </div>

          {/* Payment */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Payment Method</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { val: 'cash',   label: '💵 Cash on Delivery' },
                { val: 'mobile', label: '📱 Mobile Money'     },
              ].map(opt => (
                <button
                  key={opt.val}
                  onClick={() => set('payment', opt.val)}
                  style={{
                    flex:          1,
                    background:    form.payment === opt.val ? COLORS.gold + '20' : '#111111',
                    border:        '1px solid ' + (form.payment === opt.val ? COLORS.gold + '60' : COLORS.cardBorder),
                    borderRadius:  '10px',
                    padding:       '12px 8px',
                    color:         form.payment === opt.val ? COLORS.gold : COLORS.textMuted,
                    fontSize:      '12px',
                    fontWeight:    '600',
                    cursor:        'pointer',
                    transition:    'all 0.2s ease',
                    textAlign:     'center',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={labelStyle}>Additional Notes (optional)</label>
            <textarea
              placeholder="Any special instructions or requests..."
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              rows={3}
              style={{
                ...inputStyle,
                resize:     'vertical',
                lineHeight: '1.6',
              }}
              onFocus={e => e.target.style.borderColor = COLORS.gold + '80'}
              onBlur={e => e.target.style.borderColor = COLORS.cardBorder}
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleOrder}
            disabled={!isValid}
            style={{
              width:         '100%',
              background:    isValid
                ? 'linear-gradient(135deg, ' + COLORS.gold + ', ' + COLORS.goldDark + ')'
                : COLORS.cardBorder,
              color:         isValid ? COLORS.black : COLORS.textDim,
              border:        'none',
              borderRadius:  '12px',
              padding:       '16px',
              fontSize:      '14px',
              fontWeight:    '800',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor:        isValid ? 'pointer' : 'not-allowed',
              transition:    'all 0.3s ease',
            }}
          >
            Send Order on WhatsApp
          </button>

          {!isValid && (
            <p style={{
              color:     COLORS.textDim,
              fontSize:  '11px',
              textAlign: 'center',
              marginTop: '0.75rem',
            }}>
              Please fill in all required fields to continue
            </p>
          )}
        </div>

        {/* Right side — Order summary + delivery info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Order summary */}
          <div style={{
            background:   COLORS.cardBg,
            border:       '1px solid ' + COLORS.cardBorder,
            borderRadius: '20px',
            padding:      '2rem',
          }}>
            <h3 style={{
              color:        COLORS.white,
              fontWeight:   '800',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid ' + COLORS.cardBorder,
              fontSize:     '1rem',
            }}>
              Order Summary
            </h3>

            {selectedProduct ? (
              <div>
                <div style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  marginBottom:   '0.75rem',
                }}>
                  <span style={{ color: COLORS.textMuted, fontSize: '13px' }}>Product</span>
                  <span style={{ color: COLORS.white, fontSize: '13px', fontWeight: '600', textAlign: 'right', maxWidth: '60%' }}>
                    {selectedProduct.name}
                  </span>
                </div>
                <div style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  marginBottom:   '0.75rem',
                }}>
                  <span style={{ color: COLORS.textMuted, fontSize: '13px' }}>Quantity</span>
                  <span style={{ color: COLORS.white, fontSize: '13px', fontWeight: '600' }}>
                    {form.quantity} bag(s)
                  </span>
                </div>
                <div style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  marginBottom:   '0.75rem',
                }}>
                  <span style={{ color: COLORS.textMuted, fontSize: '13px' }}>Type</span>
                  <span style={{ color: COLORS.white, fontSize: '13px', fontWeight: '600' }}>
                    {form.type === 'retail' ? 'Retail' : 'Wholesale'}
                  </span>
                </div>
                <div style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  marginBottom:   '0.75rem',
                }}>
                  <span style={{ color: COLORS.textMuted, fontSize: '13px' }}>Payment</span>
                  <span style={{ color: COLORS.white, fontSize: '13px', fontWeight: '600' }}>
                    {form.payment === 'cash' ? 'Cash on Delivery' : 'Mobile Money'}
                  </span>
                </div>
                <div style={{
                  borderTop:      '1px solid ' + COLORS.cardBorder,
                  paddingTop:     '1rem',
                  marginTop:      '1rem',
                  display:        'flex',
                  justifyContent: 'space-between',
                  alignItems:     'center',
                }}>
                  <span style={{ color: COLORS.textLight, fontWeight: '700' }}>Total</span>
                  <span style={{
                    color:      COLORS.gold,
                    fontSize:   '1.5rem',
                    fontWeight: '900',
                  }}>
                    L${totalPrice().toLocaleString()}
                  </span>
                </div>
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding:   '2rem 0',
                color:     COLORS.textDim,
                fontSize:  '13px',
              }}>
                Select a product to see summary
              </div>
            )}
          </div>

          {/* Delivery areas */}
          <div style={{
            background:   COLORS.cardBg,
            border:       '1px solid ' + COLORS.cardBorder,
            borderRadius: '20px',
            padding:      '2rem',
          }}>
            <h3 style={{
              color:        COLORS.white,
              fontWeight:   '800',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid ' + COLORS.cardBorder,
              fontSize:     '1rem',
            }}>
              Delivery Areas
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {DELIVERY_AREAS.map(area => (
                <div key={area.area} style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  alignItems:     'center',
                  padding:        '10px 12px',
                  background:     '#111111',
                  borderRadius:   '8px',
                }}>
                  <div>
                    <div style={{ color: COLORS.white, fontSize: '13px', fontWeight: '600' }}>
                      {area.area}
                    </div>
                    <div style={{ color: COLORS.textDim, fontSize: '11px', marginTop: '2px' }}>
                      {area.fee}
                    </div>
                  </div>
                  <div style={{
                    color:      COLORS.gold,
                    fontSize:   '11px',
                    fontWeight: '700',
                    background: COLORS.gold + '15',
                    padding:    '4px 10px',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap',
                  }}>
                    {area.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Help box */}
          <div style={{
            background:   'linear-gradient(135deg, #1a1400, #111100)',
            border:       '1px solid ' + COLORS.gold + '30',
            borderRadius: '20px',
            padding:      '2rem',
            textAlign:    'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💬</div>
            <h4 style={{
              color:        COLORS.white,
              fontWeight:   '700',
              marginBottom: '0.5rem',
              fontSize:     '1rem',
            }}>
              Need Help?
            </h4>
            <p style={{
              color:        COLORS.textMuted,
              fontSize:     '12px',
              marginBottom: '1.25rem',
              lineHeight:   '1.6',
            }}>
              Call or WhatsApp us directly and we will take your order personally.
            </p>
            <a
              href={'tel:' + WHATSAPP}
              style={{
                color:          COLORS.gold,
                fontSize:       '1rem',
                fontWeight:     '800',
                textDecoration: 'none',
                display:        'block',
                marginBottom:   '0.25rem',
              }}
            >
              {WHATSAPP}
            </a>
            <p style={{ color: COLORS.textDim, fontSize: '11px' }}>
              Available 7 days a week
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Order;
