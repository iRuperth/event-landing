/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--clr-primary)',
        secondary: 'var(--clr-secondary)',
        surface: 'var(--clr-surface)',
        text: 'var(--clr-text)',
        muted: 'var(--clr-muted)',
        panel: '#FFFFFF',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
