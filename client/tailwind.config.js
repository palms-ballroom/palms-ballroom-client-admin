module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Alegreya Sans"],
        sub_title: ["Playfair Display"],
      },
      backgroundImage: {},
    },
  },
  plugins: [require("flowbite/plugin")],
};
