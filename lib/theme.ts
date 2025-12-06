/**
 * Design Tokens - Dott. Mario Colombo
 * Palette cromatica professionale per sito medico ginecologico/ostetrico
 */

export const theme = {
  colors: {
    primary: {
      DEFAULT: '#004B87',
      light: '#3D79F2',
      dark: '#003366',
    },
    secondary: {
      DEFAULT: '#A3D3D0',
      light: '#D0E9DC',
      dark: '#7FB8B5',
    },
    accent: {
      lilac: '#A47DAB',
      blush: '#FFB2B0',
      lilacLight: '#C4A5CA',
      blushLight: '#FFD4D2',
    },
    background: {
      DEFAULT: '#F7FAFC',
      alt: '#EDF2F4',
      surface: '#FFFFFF',
    },
    border: {
      subtle: '#E2E8F0',
      DEFAULT: '#CBD5E0',
      dark: '#A0AEC0',
    },
    text: {
      main: '#1A202C',
      muted: '#4A5568',
      light: '#718096',
      inverse: '#FFFFFF',
    },
    status: {
      success: '#38A169',
      error: '#E53E3E',
      warning: '#D69E2E',
      info: '#3182CE',
    },
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },
  borderRadius: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    full: '9999px',   // pill shape
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
} as const

export type Theme = typeof theme

