import type { IApi } from "umi"

export default (api: IApi) => {
  // viewport cover
  api.addHTMLMetas(() => ({
    content: "viewport",
    name: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover",
  }))
}
