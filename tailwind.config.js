module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsmall: "375px",
      small: "600px",
      medium: "1240px",
    },
    fontSize: {
      title_movil: "2.5rem",
      title_table: "3.125rem",
      title_desktop: "3.75em",
      subtitle_movil: "1.25rem",
      subtitle_table: "1.563rem",
      subtitle_desktop: "1.875rem",
      paragraph_movil: "0.875rem",
      paragraph_table: "1rem",
      paragraph_desktop: "1.25rem",
      "10px": "0.625rem",
      "12px": "0.75rem",
      "14px": "0.875rem",
      "15px": "0.938rem",
    },
    extend: {
      colors: { 
        neutral: "#686868", 
        neutral20: "#CDCDCD",
        neutral10: "#E6E6E6",
        neutral80: "#282828",
      },
      gridTemplateColumns: {
        xsmall: "repeat(4, 25%)",
        small: "repeat(8, 12.5%)",
        medium: "repeat(12, 8.33%)",
        header_product: "20% 80%"
      },
      width: {
        'menuResponsive': '16rem',
      },
      gridTemplateRows: {
        layout_product: '56px 1fr'
      },
      margin: {
        "90px": "5.688rem",
      },
    },
  },
  plugins: [],
};
