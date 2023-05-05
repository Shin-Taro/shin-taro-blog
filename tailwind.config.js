/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sp: { max: "767px" },
      pc: { min: "768px" },
    },
    // カラーパレット定義( https://www.figma.com/file/8JNl8iF4w9cDaanBaXauAD/Blog?node-id=18-182&t=hP9Kfvck2BC3y6gR-0 )
    colors: {
      main: "#117099",
      accent: "#A94949",
      backGround: "#272727",
      font: "#FFFFFF",
      sub: "#3C3C3C",
    },
    // フォントサイズ定義( https://www.figma.com/file/8JNl8iF4w9cDaanBaXauAD/Blog?node-id=21-48&t=hP9Kfvck2BC3y6gR-0 )
    fontSize: {
      first: "3.2rem",
      second: "2.4rem",
      third: "2rem",
      fourth: "1.6rem",
      fifth: "1.4rem",
      sixth: "1.2rem",
    },
    boxShadow: {
      dropMain: "1px 3px 3px rgba(255, 255, 255, 0.15)",
    },
    extend: {},
  },
  plugins: [],
}
