module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsmall: "355px",
      small: "600px",
      medium: "1240px",
      large: "1448px",
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
      "xxxx-large": "48px",
      "xxx-large": "40px",
      "Text-4xl": "36px",
      "Text-2xl": "24px",
      "Text-xl": "20px",
      "Text-base": "16px",
      "Text-sm": "14px",
      "9px": "0.6rem",
    },
    extend: {
      opacity: {
        opacity00: ".05",
        opacity10: ".10",
        opacity20: ".20",
        opacity40: ".40",
        opacity80: ".80",
      },
      zIndex: {
        1: "1",
      },
      colors: {
        primario00: "#1990FF",
        primario10: "#1CA0D1",
        primario20: "#516987",
        primario40: "#FFFFFF",
        primario60: "#333333",
        "primario/gris": "#454545",
        neutral: "#686868",
        neutral00: "#FFF",
        neutral05: "#F2F2F2",
        neutral10: "#E6E6E6",
        neutral20: "#CDCDCD",
        neutral40: "#686868",
        neutral80: "#282828",
        Feedback_Warning: "#FF6666",
        Feedback_Information: "#66FFF6",
      },
      backgroundImage: {
        landing: "url('./assets/background/landing.jpg')",
        register: "url('./assets/background/form.JPG')",
        login: "url('./assets/background/form.JPG')",
        restore: "url('./assets/background/form.JPG')",
      },
      width: {
        menuResponsive: "16rem",
        card_large_series: "18rem",
        card_medium_series: "13rem",
        card_small_series: "8.125rem",
        card_xsmall_series: "10.25rem",
        card_medium_series_name: "17.5rem",
        card_small_series_name: "17.25rem",
        card_xsmall_series_name: "21rem",
        card_medium_series_name_color: "12.75rem",
        card_small_series_name_color: "8.125rem",
        card_xsmall_series_name_color: "10rem",
      },
      maxHeight: {
        img_instalation_medium: "33rem",
        img_instalation_small: "19rem",
        img_instalation_xsmall: "13.5rem",
        card_large_series: "30rem",
        card_large_series_name: "8rem",
        card_medium_series_name: "8rem",
      },
      minHeight: {
        img_instalation_medium: "33rem",
        img_instalation_small: "19rem",
        img_instalation_xsmall: "13.5rem",
        card_large_series: "30rem",
        card_large_series_name: "8rem",
        card_medium_series_name: "8rem",
      },
      height: {
        img_instalation_medium: "33rem",
        img_instalation_small: "19rem",
        img_instalation_xsmall: "13.5rem",
        card_large_series: "30rem",
        card_medium_series: "18rem",
        card_small_series: "13.5rem",
        card_xsmall_series: "15rem",
        card_large_series_name: "10rem",
        card_medium_series_name: "8rem",
        card_small_series_name: "8rem",
        card_xsmall_series_name: "10rem",
        card_medium_series_name_color: "15rem",
        card_small_series_name_color: "10rem",
        card_xsmall_series_name_color: "13rem",
      },
      gridTemplateColumns: {
        xsmall: "repeat(4, 25%)",
        small: "repeat(8, 12.5%)",
        medium: "repeat(12, 8.33%)",
        header_product: "20% 80%",
        card_grid_medium_color_name: "repeat(4, 25%)",
        card_grid_medium_name: "repeat(3, 33.3%)",
        card_grid_medium: "repeat(4, 25%)",
        card_grid_small: "repeat(4, 25%)",
        card_grid_small_name: "repeat(2, 50%)",
        card_grid_xsmall: "repeat(2, 50%)",
      },
      gridTemplateRows: {
        lading_header: "5% 7% 88%",
        layout_login: "5% 7% 1fr",
        layout_product: "5% 7% 88%",
        layout_header: "15% 85%",
        layout_menu_slide: "80% 20%",
        menu_slide: "90% 10%",
      },
      margin: {
        "90px": "5.688rem",
      },
    },
  },
  plugins: [],
};
