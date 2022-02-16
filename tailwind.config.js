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
      "20px": "1.25rem",
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
        card_medium_series : '12.75rem',
        card_small_series : '8.125rem',
        card_xsmall_series : '10.25rem',
        img_serie_medium: '12.75rem',
        img_serie_small: '8.125rem',
        img_serie_xsmal: '10.25rem',
      },
      height: {
        card_medium_series : '17rem',
        card_small_series : '13rem',
        card_xsmall_series : '15rem',
        img_serie_medium: '12.5rem',
        img_serie_small: '8rem',
        img_serie_xsmall: '10rem',
      },
      gridTemplateRows: {
        layout_product: '8% 92%',
        layout_header: '10% 87%'
      },
      margin: {
        "90px": "5.688rem",
      },
    },
  },
  plugins: [],
};
