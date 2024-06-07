/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx", // This will include all JSX files in the src directory and its subdirectories
    // Add other file paths if needed, e.g., components, pages, etc.
  ],
  theme: {
    extend: {
      // Extend the theme with custom settings if needed
      // For example:
      // colors: {
      //   primary: '#ff6363',
      // },
    },
  },
  plugins: [
    // Add any plugins you need
    // For example:
    // require('@tailwindcss/forms'),
  ],
}
