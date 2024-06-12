/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333533',
        secondary: '#202020',
        tertiary: '#000000',
        dark_yellow: '#ffd100',
        light_yellow: '#ffee32',
        light: '#a5a3a3',
      }
    },
  },
  plugins: [],
}

