/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Ensure all HTML and JS files in src folder are scanned
    "./public/**/*.{html,js}", // Include public folder if you have one
    "./node_modules/flowbite/**/*.js", // Ensure Flowbite JS files are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Add the Flowbite plugin
  ],
};
