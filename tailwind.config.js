module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.tsx'],
  },
  theme: {
    extend: {
      colors: {
        darkBlue: '#1E3273',
        blue: '#4488C1',
        grey: '#636474',
        neutral: '#2D2F4475',
        mild: '#C4C4C4',
        black: '#14162E',
        overlay: '#22222225',
        article: '#2D2F44',
        white: '#FFFFFF',
        transparent: 'transparent'
      },
      margin: {
        auto: 'auto',
      },
      width: {
        '100%': '100%',
      },
      height: {
        '50%': '50%',
      },
      fontSize: {
        xs: '10px',
        s: '12px',
        m: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '36px',
        pageTitle: '48px',
      },
      borderRadius: {
        card: '10px'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      spacing: {
        // immediately by uxe
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '3px': '3px',
        '5px': '5px',
        '8px': '8px',
        '14px': '14px',
        '20px': '20px',
        '24px': '24px',
        '30px': '30px',
        '32px': '32px',
        '40px': '40px',
        '42px': '42px',
        '200px': '200px',
        '250px': '250px',
        7: '28px',
        9: '2.25rem',
        11: '44px',
        13: '52px',
        14: '56px',
        15: '60px',
        17: '68px',
        18: '72px',
        21: '84px',
        22: '88px',
        23: '92px',
        26: '104px',
        27: '108px',
        30: '120px',
        31: '124px',
        32: '128px',
        33: '132px',
        34: '136px',
        35: '140px',
        37: '148px',
        39: '156px',
        40: '160px',
        41: '164px',
        45: '180px',
        55: '220px',
        58: '232px',
        60: '240px',
        66: '264px',
        69: '276px',
        70: '280px',
        78: '312px',
        82: '328px',
        87: '348px',
        90: '360px',
        100: '400px',
        105: '420px',
        150: '600px',
        170: '680px',
        200: '800px',
        220: '880px'
      },
      boxShadow: {
        normal: '1px 3px 10px rgba(0, 0, 0, 0.10)',
        medium: '1px 3px 10px rgba(0, 0, 0, 0.25)',
        heavy: '1px 3px 5px rgba(0, 0, 0, 0.27)',
        hover: '3px 3px 6px rgba(34, 34, 34, 0.25)',
        select: '0px 1px 6px rgba(48, 127, 226, 0.18)'
      },
      flex: {
        '40%': '40%',
        '47%': '47%',
        '50%': '50%',
        '60%': '60%',
        '67%': '67%'
      },
      screens: {
        mini: { max: '359px' },
        phone: { min: '360px', max: '767px' },
        tablet: { min: '768px', max: '1200px' },
        'small-desktop': { min: '1200px', max: '1649px' },
        desktop: { min: '1650px', max: '2188px' }
      },
      zIndex: {
        100: 100
      },
      inset: {
        '1/2': '50%',
        '3/4': '75%'
      }
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    margin: ['responsive', 'hover', 'focus'],
    cursor: ['responsive', 'hover', 'focus', 'group-focus'],
    backgroundColor: ['responsive', 'hover', 'active']
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animatecss')({
      settings: {
        animatedSpeed: 500,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750
      },
      variants: ['responsive']
    })
  ]
};
