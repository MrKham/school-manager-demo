/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: [
    "./resources/js/*.{html,js,vue}",
    "./resources/js/layouts/**/*.{html,js,vue}",
    "./resources/js/views/**/*.{html,js,vue}",
    "./resources/js/components/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
