/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logoGreen: "#1E8053",
        navy: "#143C63",
        terracotta: "#C97C5D",
        sand: "#F5F1E6",
        stone: "#E1DED9",
        charcoal: "#2E2E2E",
      },
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: { "2xl": "1rem" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" }
    },
  },
  plugins: [],
};
