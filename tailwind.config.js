/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',                // Includes the main App file
    './components/**/*.{js,ts,tsx}',     // Includes all files in the components folder
    './Screens/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
