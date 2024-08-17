/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#e5ecf3',
        icon: '#1c1b1f',
        cta: '#cec4eb',
        button: '#fcfbfd',
        fontColor: '#6947bf',
        secondaryBackground: '#CEC4EB',
      }
    },
  },
  plugins: [],
};
