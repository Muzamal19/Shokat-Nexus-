/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#06070d',
        panel: '#101420',
        line: 'rgba(255,255,255,0.12)'
      },
      boxShadow: {
        glow: '0 0 36px rgba(34, 211, 238, 0.24)'
      }
    }
  },
  plugins: []
};
