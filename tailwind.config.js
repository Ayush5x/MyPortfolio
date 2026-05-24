/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {

      /* 🎨 COLOR SYSTEM (Beige + Black theme) */
      colors: {
        primary: "#0A0A0A",        // deep black
        secondary: "#E9E6DF",      // card background
        background: "#F5F3EF",     // main bg
        accent: "#D6D3CB",         // soft beige accent
        muted: "#6B7280",          // text gray
      },

      /* 🧱 BORDER RADIUS SYSTEM */
      borderRadius: {
        xl2: "1rem",
        xl3: "1.5rem",
        xl4: "2rem",
      },

      /* 🔤 FONT SYSTEM */
      fontFamily: {
        sans: ["Caveat"],
        display: ["Playfair Display", "serif"], // for headings like "Brand"
      },

      /* 📏 SPACING (for consistency in layout scaling) */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },

      /* 🌫️ SHADOWS (for glassmorphism later) */
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        glass: "0 8px 32px rgba(0,0,0,0.12)",
      },

      /* 🌀 BACKDROP BLUR (glass effect) */
      backdropBlur: {
        xs: "2px",
      },

      /* 🎬 TRANSITIONS */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

    },
  },

  plugins: [],
};