/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Para el App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Para el Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ["0.6rem", { lineHeight: "0.8rem" }], // Tamaño muy pequeño
        xs: ["0.75rem", { lineHeight: "1rem" }], // Ya viene por defecto, pero puedes sobrescribir
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // Ya viene por defecto
        base: ["1rem", { lineHeight: "1.5rem" }], // Ya viene por defecto
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // Ya viene por defecto
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // Ya viene por defecto
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // Ya viene por defecto
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // Ya viene por defecto
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // Ya viene por defecto
        "5xl": ["3rem", { lineHeight: "1" }], // Ya viene por defecto
        "6xl": ["3.75rem", { lineHeight: "1" }], // Ya viene por defecto
        "7xl": ["4.5rem", { lineHeight: "1" }], // Ya viene por defecto
        "8xl": ["6rem", { lineHeight: "1" }], // Ya viene por defecto
        "9xl": ["8rem", { lineHeight: "1" }], // Ya viene por defecto
      },
    },
  },
  plugins: [],
};
