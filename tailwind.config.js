/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import * as themes from 'daisyui/src/theming/themes';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
          primary: '#23B3A7',
          secondary: 'yellowgreen',
        },
        dark: {
          ...themes.dark,
          primary: 'blue',
          secondary: 'teal',
        },
      },
    ],
  },
}