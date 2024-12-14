import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 100s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        // Main colours
        mainBlue: ' #1B7387',
        mainDark: '#134F5D',
        mainLight: '#F9F9F9',
        // Secondary blues
        secBlue1: '#D6F0F7',
        secBlue2: '#B0E3EF',
        secBlue3: '#76CFE3',
        secBlue4: '#1B7387',
        secBlue5: '#0C323A',
        // Secondary greens
        secGreen1: '#D6F7DD',
        secGreen2: '#8FE5A2',
        secGreen3: '#5DA76D',
        secGreen4: '#2A6938',
        secGreen5: '#114A1E',
        // Secondary grays
        secGray1: '#E7E7E7',
        secGray2: '#B5B5B5',
        secGray3: '#989898',
        secGray4: '#717171',
        secGray5: '#464646',

        footer: '#1E83BB',
      },
      width: {
        modal: '700px',
      },
    },
    fontSize: {
      // Headers
      h1_custom: '56px',
      h2_custom: '45px',
      h3_custom: '35px',
      h4_custom: '27px',
      h5_custom: '21px',
      h6_custom: '16px',
      // Body
      b1_custom: '20px',
      b2_custom: '17px',
      b3_custom: '15px',
      b4_custom: '12px',
    },
    fontFamily: {
      palanquinDark: ['Palanquin Dark, sans-serif'],
      dm_Sans: ['DM Sans, sans-serif'],
    },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
