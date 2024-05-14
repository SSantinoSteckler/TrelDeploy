/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'port-blue': "url('/FondoPort.png')",
        'port-map': "url('/mapamundial.png')",
      },
    },
    colors: {
      'custom-blue': '#1d164a',
      'custom-white': '#ffffff',
      'custom-black': '#000000',
      'custom-green': '#48b02c',
      'custom-grey': '#ebeff5',
      'custom-green-sweet': '#67d449',
    },
    boxShadow: {
      'custom-black':
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'custom-menu-shadow': '0px 0px 700px rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [],
};
