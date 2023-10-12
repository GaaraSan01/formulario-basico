import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '720px',
      'lg':'1024px',
      'xl': '1280px'
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'natural-color': '#FFFFFF',
        'natural-bg-color': '#F1F1F1',
        'primary-color': '#64BC9E',
        'secundary-color': '#1A1D39',
      },
    },
  },
  plugins: [],
}
export default config