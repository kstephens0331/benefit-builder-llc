/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1E8053",
          navy: "#143C63",
          terra: "#C97C5D",
          sand: "#F5F1E6",
          stone: "#E1DED9",
          charcoal: "#2E2E2E"
        }
      },
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}
