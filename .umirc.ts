export default {
  npmClient: "pnpm",
  extraPostCSSPlugins: [
    require('tailwindcss')(),
    require('autoprefixer')()
  ]
};
