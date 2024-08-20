/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
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