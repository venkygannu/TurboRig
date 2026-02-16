/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      colors: {
        dark: {
          950: '#050608',
          900: '#0a0c10',
          800: '#0f1218',
          700: '#151922',
          600: '#1a1f28',
          500: '#232a36',
          400: '#2d3544',
        },
        neon: {
          cyan: '#00f5ff',
          green: '#00ff88',
          purple: '#bf00ff',
          pink: '#ff006e',
          orange: '#ff6b35',
        },
        glass: 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0a0c10 0%, #0f1218 50%, #0a0c10 100%)',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0, 245, 255, 0.15), transparent 50%)',
        'card-glow': 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(0, 255, 136, 0.08), transparent)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 245, 255, 0.3), 0 0 40px rgba(0, 245, 255, 0.1)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.3), 0 0 40px rgba(0, 255, 136, 0.1)',
        'neon-purple': '0 0 20px rgba(191, 0, 255, 0.25)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'inner-glow': 'inset 0 0 60px rgba(0, 245, 255, 0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
