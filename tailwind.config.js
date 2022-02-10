module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      movil: "375px",
      tablet: "600px",
      desktop: "1240px",
    },
    fontSize: {
      'title_movil': '2.5rem',
      'title_table': '3.125rem',
      'title_desktop': '3.75em',
      'subtitle_movil': '1.25rem',
      'subtitle_table': '1.563rem',
      'subtitle_desktop': '1.875rem',
      'paragraph_movil': '0.875rem',
      'paragraph_table': '1rem',
      'paragraph_desktop': '1.25rem',
    },
    extend: {
      colors: { "neutral": "#686868" },
      gridTemplateColumns: {
        'movil': 'repeat(4, 25%)',
        'tableta': 'repeat(8, 12.5%)',
        'desktop': 'repeat(12, 8.33%)',
      }
    },
  },
  plugins: [],
};
