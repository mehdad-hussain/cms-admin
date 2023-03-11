/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "12rem",
        },
      },
      screens: {
        /*---------------------------------------------------------------------
        max-width
      ----------------------------------------------------------------------*/
        "2xlM": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xlM: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgM: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mdM: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smM: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xsM: { max: "479px" },
        // => @media (max-width: 479px) { ... }

        /*---------------------------------------------------------------------
      min-width
      ----------------------------------------------------------------------*/
        xs: "480px",
        // => @media (min-width: 480px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        /*---------------------------------------------------------------------
        both max and min 
      ----------------------------------------------------------------------*/

        sxsB: { min: "360px", max: "479px" },
        // => @media (min-width: 360px and max-width: 479px) { ... }

        xsB: { min: "480px", max: "639px" },
        // => @media (min-width: 480px and max-width: 639px) { ... }

        smB: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        mdB: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lgB: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xlB: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xlB": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        // *  added variables */
        "page-color-1": "#576F72",
        "page-color-2": "#F0EBE3",
        "header-color": "#E4DCCF",
        "title-bar-color": "#7D9D9C",
        "primary-btn": "#00C292",
        "warning-btn": "#9B2D38",
        primary: "#343A40",
        secondary: "#B8B6B2",
        tertiary: "#FFFFFF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),

    //  <!-- section: child variant -->
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("first-child", "&>*:nth-child(1)");
      addVariant("2nd-child", "&>*:nth-child(2)");
      addVariant("3rd-child", "&>*:nth-child(3)");
      addVariant("4th-child", "&>*:nth-child(4)");
      addVariant("first-2-child", "&>*:nth-child(-n+2)");
      addVariant("first-3-child", "&>*:nth-child(-n+3)");

      addVariant(
        "2-onwards-child",
        "&>*:nth-child(n+2)"
      ); /* selects from the second onwards */
      addVariant(
        "3-onwards-child",
        "&>*:nth-child(n+3)"
      ); /* selects from the third onwards */

      addVariant("odd-child", "&>*:nth-child(odd)");
      addVariant("even-child", "&>*:nth-child(even)");
      addVariant("last-2-child", "&>*:nth-last-child(-n+2)");
      addVariant("last-3-child", "&>*:nth-last-child(-n+3)");
      addVariant("last-child", "&>*:nth-last-child(1)");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
