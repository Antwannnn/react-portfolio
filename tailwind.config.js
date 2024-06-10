/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary_dark: '#16191C',
        primary_light: '#E9ECEF',
        secondary_dark: '#1E2226',
        secondary_light: '#DEE2E6',
        tertiary_dark: '#2C3136',
        tertiary_light: '#CED4DA',
      }
    },
  },
  plugins: [],
}

