/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1208px',
      xl: '1440px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xxsm: '8px', // 8px
      xsm: '10px', // 10px
      sm: '12px', // 12px
      base: '14px', // 14px
      lg: '16px', // 16px
      xl: '22px', // 22px
      '2xl': '28px', // 28px
      '3xl': '32px', // 32px
      '4xl': '46px', // 46px
      '5xl': '56px', // 56px
      '6xl': '64px', // 64px
    },
    fontWeight: {
      normal: '400',
      bold: '600',
      extrabold: '700',
    },
    colors: {
      violet: {
        800: '#080843',
        600: '#111186',
        500: '#1515A8',
        400: '#2424E4',
        300: '#4646E8',
        200: '#4646E8',
        100: '#4646E8',
        50: '#4646E8',
      },
      blue: {
        800: '#032829',
        600: '#074F51',
        500: '#086365',
        400: '#0B8A8E',
        300: '#0D9EA2',
        200: '#16E7EC',
        100: '#3DEBEF',
        50: '#B1F7F9',
      },
      red: {
        800: '#540A04',
        600: '#A81408',
        500: '#D3190B',
        400: '#F54D40',
        300: '#F8746A',
        200: '#F9978F',
        100: '#FAA8A2',
        50: '#FDDCDA',
      },
      onyx: {
        Black: '#040404',
        800: '#1C1C1C',
        600: '#232323',
        500: '#3E3E3F',
        400: '#5A5A5A',
        300: '#919191',
        200: '#ACACAD',
        100: '#C8C8C8',
        50: '#E3E3E4',
        40: '#040404bf',
        White: '#F1F1F2',
      },
      green: {
        800: '#002F26',
        600: '#005F4C',
        500: '#00765E',
        400: '#00A584',
        300: '#00BD97',
        200: '#0EFFCF',
        100: '#36FFD7',
        50: '#AFFFEF',
      },
      white: '#FFFFFF',
      'button-bg': {
        primary: '#2424E4',
        secondary: '#040404',
        grey: '#F1F1F2',
        inverse: '#FCFCFC',
      },
      'button-text': {
        primary: '#FFFFFF',
        secondary: '#FCFCFC',
        grey: '#040404',
        inverse: '#040404',
        accent: '#2424E4',
      },
      hover: {
        accent: '#7474EE',
        onWhite: '#F1F1F2',
        onGrey: '#E3E3E4',
        inverseBlack: '#404040',
      },
      border: {
        accent: '#2424E4',
        onWhite: '#040404',
        onGrey: '#E3E3E4',
      },
      disabled: {
        onWhite: '#F6F6F6',
      },
      widget: {
        sale: '#FF3933',
        promo: '#2424E4',
        benefit: '#2424E4',
        new: '#040404',
        text: '#FFFFFF',
      },
    },
    extend: {
      spacing: {
        'no-spacing': '0',
        'spacing-01': '4px',
        'spacing-02': '8px',
        'spacing-03': '16px',
        'spacing-04': '18px',
        'spacing-05': '24px',
        'spacing-06': '32px',
        'spacing-07': '42px',
      },
      colors: {
        primary: '#2424E4',
        secondary: '#040404',
        grey: '#0404048F',
        sale: '#FF3933',
        background: {
          primary: '#FCFCFC',
          secondary: '#F1F1F2',
          tertiary: '#E3E3E4',
          accent: '#4646E8',
          'light-accent': '#8B8BF1',
          sale: '#FF3933',
          negative: '#D3190B',
          'light-negative': '#FDDCDA',
          positive: '#00765E',
          'light-positive': '#AFFFEF',
          'always-dark': '#040404',
          'always-light': '#FDFDFD',
          'inverse-secondary': '#3E3E3F',
          'inverse-tertitary': '#5A5A5A',
        },
        content: {
          primary: '#040404',
          secondary: '#040404BF',
          tertiary: '#0404048F',
        },
        border: {
          primary: '#F1F1F2',
          secondary: '#E3E3E4',
          tertiary: '#040404',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'auto' },
        },
        'accordion-up': {
          from: { height: 'auto' }, // need to confirm 'auto height works as expected.'
          to: { height: 0 },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 300ms ease-in',
        'fade-out': 'fadeOut 300ms ease-out',
      },
      gridTemplateColumns: {
        'plp-max': '290px repeat(10, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};
