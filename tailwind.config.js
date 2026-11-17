/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Azul Clínico Premium / Marinho Real
        navy: {
          50: '#f0f5fc',
          100: '#e0ecf8',
          200: '#c5ddf3',
          300: '#9bc4eb',
          400: '#6ca4df',
          500: '#4683d2',
          600: '#2f67c0',
          700: '#234fa3',
          800: '#1e4284',
          900: '#0d284e',
          950: '#071730',
        },
        // Verde Médico Regenerativo / Esmeralda Vital
        emerald: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Verde-Água / Teal Tecnológico
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'premium': '0 20px 45px -12px rgba(13, 40, 78, 0.09)',
        'premium-hover': '0 25px 55px -12px rgba(13, 40, 78, 0.16)',
        'card': '0 4px 20px -2px rgba(13, 40, 78, 0.05)',
        'emerald-glow': '0 8px 30px -4px rgba(22, 163, 74, 0.3)',
      }
    },
  },
  plugins: [],
}
