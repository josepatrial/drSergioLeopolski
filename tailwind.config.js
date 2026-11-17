/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Espresso & Warm Mocha (Substituindo o Azul Escuro com elegância nobre)
        espresso: {
          50: '#fdfbf8',
          100: '#f7efe4',
          200: '#edd8c3',
          300: '#ddbc9b',
          400: '#bf926b',
          500: '#9d6e46',
          600: '#7d5231',
          700: '#5c3920',
          800: '#412716',
          900: '#2b1810', // Cor do topbar e cartões escuros na imagem de referência
          950: '#1b0e09',
        },
        // Mapeamento compatível para navy (agora Espresso Mocha acolhedor)
        navy: {
          50: '#fdfbf8',
          100: '#f7efe4',
          200: '#edd8c3',
          300: '#ddbc9b',
          400: '#bf926b',
          500: '#9d6e46',
          600: '#7d5231',
          700: '#5c3920',
          800: '#412716',
          900: '#2b1810',
          950: '#1e110a',
        },
        // Cognac, Caramelo & Âmbar Dourado (Substituindo o verde com luxo quente)
        cognac: {
          50: '#fdf8f4',
          100: '#f9ede2',
          200: '#f3d7c3',
          300: '#e7b998',
          400: '#d79568',
          500: '#c5743f',
          600: '#b86835', // Cor primária dos botões no mockup
          700: '#9a4f27',
          800: '#7f4122',
          900: '#67361f',
          950: '#381a0e',
        },
        // Mapeamento de emerald para o tom Cognac / Caramelo Quente
        emerald: {
          50: '#fdf8f4',
          100: '#f9ede2',
          200: '#f3d7c3',
          300: '#e7b998',
          400: '#d79568',
          500: '#c5743f',
          600: '#b86835',
          700: '#9a4f27',
          800: '#7f4122',
          900: '#67361f',
          950: '#381a0e',
        },
        // Champagne, Marfim & Areia Nobre (Fundo e superfícies suaves)
        champagne: {
          50: '#fdfcf9',
          100: '#fbf8f3', // Tom de fundo exato da imagem de referência
          200: '#f5eee3',
          300: '#ebdccb', // Borda suave dos cartões no mockup
          400: '#dfcaa9',
          500: '#cca87a',
          600: '#b58c5c',
          700: '#967146',
          800: '#7b5c39',
          900: '#654c30',
        },
        sand: {
          50: '#fbf8f3',
          100: '#f7f1e6',
          200: '#eee3d2',
          300: '#e2d0b8',
          400: '#d4bba0',
          500: '#be9e7f',
          600: '#a38161',
          700: '#83654a',
          800: '#674f3b',
          900: '#4e3b2c',
        },
        // Slate quente (para textos secundários harmonizados)
        slate: {
          50: '#faf8f5',
          100: '#f4f0e9',
          200: '#e8e1d6',
          300: '#d5ccc0',
          400: '#a89d91',
          500: '#7e7266',
          600: '#5f5449',
          700: '#483f36',
          800: '#342d27',
          900: '#231d19',
          950: '#14100d',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'premium': '0 20px 45px -12px rgba(43, 24, 16, 0.08)',
        'premium-hover': '0 25px 55px -12px rgba(43, 24, 16, 0.14)',
        'card': '0 4px 20px -2px rgba(43, 24, 16, 0.04)',
        'warm-glow': '0 8px 30px -4px rgba(184, 104, 53, 0.35)',
        'emerald-glow': '0 8px 30px -4px rgba(184, 104, 53, 0.35)',
      }
    },
  },
  plugins: [],
}
