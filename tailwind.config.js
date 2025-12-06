/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: 'var(--mc-primary)',
          light: 'var(--mc-primary-light)',
          dark: 'var(--mc-primary-dark)',
        },
        // Secondary Colors
        secondary: {
          DEFAULT: 'var(--mc-secondary)',
          light: 'var(--mc-secondary-light)',
          dark: 'var(--mc-secondary-dark)',
        },
        // Accent Colors
        accent: {
          lilac: 'var(--mc-accent-lilac)',
          'lilac-light': 'var(--mc-accent-lilac-light)',
          blush: 'var(--mc-accent-blush)',
          'blush-light': 'var(--mc-accent-blush-light)',
        },
        // Background Colors
        bg: {
          DEFAULT: 'var(--mc-bg)',
          alt: 'var(--mc-bg-alt)',
          surface: 'var(--mc-surface)',
        },
        // Border Colors
        border: {
          subtle: 'var(--mc-border-subtle)',
          DEFAULT: 'var(--mc-border)',
          dark: 'var(--mc-border-dark)',
        },
        // Text Colors
        text: {
          main: 'var(--mc-text-main)',
          muted: 'var(--mc-text-muted)',
          light: 'var(--mc-text-light)',
          inverse: 'var(--mc-text-inverse)',
        },
        // Status Colors
        success: 'var(--mc-success)',
        error: 'var(--mc-error)',
        warning: 'var(--mc-warning)',
        info: 'var(--mc-info)',
        // Legacy support (gradual migration)
        neutral: {
          dark: 'var(--mc-text-main)',
          DEFAULT: 'var(--mc-text-muted)',
          light: 'var(--mc-border-subtle)',
          lighter: 'var(--mc-bg)',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        pill: '9999px',
      },
    },
  },
  plugins: [],
}

