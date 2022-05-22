module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen: {
      'sm': '576px',
      'md': '768px',
      'sm': '992px',
      'sm': '1200px',
    },
    colors: {
      primary: '#FD3D57',
      secondary: '#ecc94b',
      // ...
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        "roboto": "'Roboto', sans-serif",
        "poppins": "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}