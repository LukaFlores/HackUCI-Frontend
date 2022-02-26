const color = require('color');

const shades = (colors) => {
  const result = {};

  for (const k of Object.keys(colors)) {
    result[k] = colors[k];
    result[k + '-lighter'] = color(colors[k]).lighten(0.05).hex();
    result[k + '-darker'] = color(colors[k]).darken(0.05).hex();
  }

  return result;
};

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    screens: {
      xs: '370px',
      sm: '580px',
      md: '768px',
      'base': '910px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1580px',
    },
    fontFamily: {
      // serif: [
      //   'ui-sans-serif',
      //   'system-ui',
      //   '-apple-system',
      //   'BlinkMacSystemFont',
      //   '"Segoe UI"',
      //   'Roboto',
      //   '"Helvetica Neue"',
      //   'Arial',
      //   '"Noto Sans"',
      //   'sans-serif',
      //   '"Apple Color Emoji"',
      //   '"Segoe UI Emoji"',
      //   '"Segoe UI Symbol"',
      //   '"Noto Color Emoji"',
      // ],
      sans: [
        'Bai Jamjuree',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Consolas',
        '"Liberation Mono"',
        'Menlo',
        'monospace',
      ],
    },
    fontSize: {
      xs6: '.25rem',
      xs5: '.375rem',
      xs4: '.5rem',
      xs3: '.625rem',
      xs2: '.75rem',
      xs: '.8rem',
      sm: '.875rem',
      tiny: '.875rem',
      md: '.93rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '5rem',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: '#000',
        white: '#fff',

        gray: {
          25: '#FBFBFB',
          50: '#F0F1F1',
          100: '#dfe4ea',
          200: '#C7C7C7',
          300: '#a4b0be',
          400: '#747d8c',
          500: '#57606f',
          600: '#2f3542',
          700: '#272b35',
          800: '#1e1e1e',
          900: '#0b0c0f',
          911: '#303030',
        },

        yellow: shades({
          1: '#eccc68',
          2: '#ffa502',
        }),

        orange: shades({
          1: '#ff7f50',
          2: '#ff6348',
          3: '#e78d03',
        }),

        red: shades({
          1: '#ff6b81',
          2: '#ff4757',
          3: '#702313',
          4: '#D88779',
          5: '#d30000',
        }),

        green: shades({
          1: '#7bed9f',
          2: '#2ed573',
          3: '#585F49',
          4: '#E6EABA',
          9: '#e6fffd',
          10: '#94bdbf',
          11: '#022933',
          12: '#035c73',
          13: '#f0fdff',
        }),

        blue: shades({
          1: '#60c6ea',
          2: '#1e90ff',
          3: '#5352ed',
          4: '#3742fa',
          6: '#c2e8f1',
          7: '#2aa6c1',
          8: '#005a74',
          88: '#429db1',
          9: '#3f5695',
          10: '#4b62b6',
          11: '#64cfe7',
        }),

        yeti: shades({
          1: '#e9f6fc',
          2: '#C4E8F5',
          3: '#27A9E1',
          4: '#120E43',
          5: '#000000',
          10: '#28aae1',
          11: '#cccccc',
          12: '#ebf6fb',
          13: '#101928',
          15: '#a5a5a5',
          112: '#b3d9e8',
          33: '#4c62b4',
        }),

        pancake: shades({
          1: '#FBDC8E',
          2: '#D1894D',
          3: '#603415',
        }),
      },
      margin: {
        '0.75' : '0.1875rem',
        '6.5' : '1.625rem'
      },
      width: {
        42: '10.5rem',
        88: '22rem',
        100: '30rem',
        125: '38rem',
        150: '45rem',
        200: '60rem',
        250: '75rem',
        350: '350px',
        450: '450px',
      },
      height : {
        620: '620px',
      }
    },
  },
  plugins: [],
};
