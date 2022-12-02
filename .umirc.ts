import { defineConfig } from "umi"
const px2rem = require("postcss-plugin-px2rem")

export default defineConfig({
  metas: [{ name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover" }],
  extraPostCSSPlugins: [
    require("tailwindcss")(),
    "autoprefixer",
    px2rem({
      rootValue: 100, // 根据设计稿750设置
      exclude: [/node_modules\/react-vant/i],
    }),
  ],
})
