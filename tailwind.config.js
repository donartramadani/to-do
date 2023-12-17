/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grayscale300: '#DDDDDD',
        grayscale500: '#999999',
        grayscale900: '#333333',
        successLight: '#F2FBFA',
        successSemiDark: '#00B797',
        achromatic: '#FFFFFF',
        silver: '#CCCCCC',
      },
      fontFamily: {
        sansPro: '"Source Sans 3", serif',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
};
