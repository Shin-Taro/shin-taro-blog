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
      first: "32px",
      second: "24px",
      third: "20px",
      fourth: "16px",
      fifth: "14px",
      sixth: "12px",
    },
    extend: {},
  },
  plugins: [],
}
