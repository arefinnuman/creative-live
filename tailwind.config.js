/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fc593c",

          secondary: "#a9e057",

          accent: "#fff2b5",

          neutral: "#282C39",

          "base-100": "#E0DDEE",

          info: "#4973DF",

          success: "#41D279",

          warning: "#E0B415",

          error: "#E8547E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
