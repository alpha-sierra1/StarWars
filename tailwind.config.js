/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx", // Include all JSX files within the src directory and its subdirectories
    "./src/**/*.js", // Include all JS files within the src directory and its subdirectories
    "./src/components/**/*.jsx", // Include all JSX files within the components directory and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
