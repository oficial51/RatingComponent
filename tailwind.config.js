/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        White: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
        MediumGrey: "hsl(216, 12%, 54% )",
        TransparentGrey: "hsla(216, 12%, 54%, 0.2)",
        DarkBlue: "hsl(213, 19%, 18%)",
        VeryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontSize: { p: ["15px"] },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "top-gradient":
          "radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
