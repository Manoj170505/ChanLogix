/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-moss': '#478501',
        'forest-mossHover': '#396b01',
        'forest-mossLight': '#eef7e4',
        'forest-mossSubtle': 'rgba(71, 133, 1, 0.12)',
        'sage-green': '#75953E',
        'sage-hover': '#617d31',
        'sage-light': '#f2f7ec',
        forest: {
          moss: '#478501',
          mossHover: '#396b01',
          mossLight: '#eef7e4',
          mossSubtle: 'rgba(71, 133, 1, 0.12)',
        },
        sage: {
          green: '#75953E',
          hover: '#617d31',
          light: '#f2f7ec',
        },
        onyx: {
          DEFAULT: '#151615',
          dark: '#0B0C0B',
          light: '#222522',
          surface: '#1A1C1A',
          border: '#2A2E2A',
        },
        silver: {
          DEFAULT: '#AFAEAE',
          light: '#D4D4D4',
          dark: '#7D7C7C',
        },
        black: '#000000',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-moss': '0 0 30px -5px rgba(71, 133, 1, 0.45)',
        'glow-sage': '0 0 30px -5px rgba(117, 149, 62, 0.35)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.12), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 35px -10px rgba(71, 133, 1, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
