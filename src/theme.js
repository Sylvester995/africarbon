export const COLORS = {
  // Backgrounds
  black:      '#0a0a0a',
  darkBg:     '#111111',
  cardBg:     '#1a1a1a',
  cardBorder: '#2a2a2a',

  // Gold
  gold:       '#D4AF37',
  goldLight:  '#F0D060',
  goldDark:   '#B8960C',
  goldMuted:  '#D4AF3720',

  // Text
  white:      '#FFFFFF',
  textLight:  '#CCCCCC',
  textMuted:  '#888888',
  textDim:    '#555555',

  // Status
  green:      '#27AE60',
  red:        '#E74C3C',
};

export const WHATSAPP = '+905338557240';
export const PHONE    = '+905338557240';

export const PRODUCTS = [
  {
    id: 1,
    name: 'Standard Wood Charcoal',
    description: 'Premium hardwood charcoal, perfect for household cooking. Long burn time, high heat, low smoke.',
    price_wholesale: 650,
    price_retail:    900,
    unit:            'per bag',
    available:       true,
    badge:           'Best Seller',
    features: [
      'High heat output',
      'Long burning time',
      'Low smoke production',
      'Ideal for cooking & grilling',
    ]
  },
  {
    id: 2,
    name: 'Bulk Wholesale Order',
    description: 'Large volume orders for restaurants, hotels, and businesses. Best pricing available for bulk buyers.',
    price_wholesale: 600,
    price_retail:    null,
    unit:            'per bag (min. 20 bags)',
    available:       true,
    badge:           'Best Value',
    features: [
      'Discounted bulk pricing',
      'Consistent quality guaranteed',
      'Direct delivery to your location',
      'Recurring order contracts available',
    ]
  },
  {
    id: 3,
    name: 'Premium Restaurant Grade',
    description: 'Specially selected charcoal for restaurants and hotels. Consistent size, superior heat for professional kitchens.',
    price_wholesale: null,
    price_retail:    1000,
    unit:            'per bag',
    available:       true,
    badge:           'Premium',
    features: [
      'Restaurant & hotel quality',
      'Uniform charcoal size',
      'Maximum heat retention',
      'Professional grade consistency',
    ]
  },
];

export const DELIVERY_AREAS = [
  { area: 'Monrovia Central',    time: '1-2 hours',  fee: 'Free on orders 10+ bags' },
  { area: 'Sinkor',              time: '1-2 hours',  fee: 'Free on orders 10+ bags' },
  { area: 'Congo Town',          time: '2-3 hours',  fee: 'Free on orders 10+ bags' },
  { area: 'Paynesville',         time: '2-4 hours',  fee: 'Small delivery fee' },
  { area: 'Bushrod Island',      time: '1-3 hours',  fee: 'Free on orders 10+ bags' },
  { area: 'Outside Monrovia',    time: 'Negotiated', fee: 'Contact us for pricing' },
];