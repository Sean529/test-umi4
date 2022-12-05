import { defineConfig } from "umi"
const px2rem = require("postcss-plugin-px2rem")

export default defineConfig({
  extraPostCSSPlugins: [
    require("tailwindcss")(),
    px2rem({
      rootValue: 100, // 根据设计稿750设置
      exclude: [/node_modules\/react-vant/i]
    }),
    px2rem({
      rootValue: 50, // 根据设计稿375设置
      exclude: [/^(?!.*node_modules\/react-vant)/]
    }),
  ],
})
