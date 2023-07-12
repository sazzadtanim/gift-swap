/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      gradient_deep_blue: `linear-gradient(to right, #6a11cb 0%, #2575fc 100%)`,
      gradient_green: `linear-gradient(to right, #43e97b 0%, #38f9d7 100%)`,
      gradient_purple: `linear-gradient(112.8deg, #6A36FF -15.76%, #AC5FE6 102.86%)`,
      gradient_orange: `linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%)`,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
