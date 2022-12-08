import { defineConfig } from "umi"
const px2viewport = require('postcss-px-to-viewport');


export default defineConfig({
  extraPostCSSPlugins: [
    require("tailwindcss")(),
    px2viewport({
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      viewportWidth: 375,
      exclude: [/^(?!.*node_modules\/react-vant)/]
    }),
    px2viewport({
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      viewportWidth: 750,
      exclude: [/node_modules\/react-vant/i]
    })
  ],
  define: {
    bbb: 'sit'
  }
})
