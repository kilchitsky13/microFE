const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "https://polite-smoke-021becf0f.1.azurestaticapps.net/",
    uniqueName: "layout",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "layout",
      library: { type: "var", name: "layout" },
      filename: "remoteEntry.js",
      exposes: {
        LayoutModule:
          "./src/app/modules/layout/layout.module.ts",
        Header: './src/app/modules/layout/header/header.component.ts',
        Footer: './src/app/modules/layout/footer/footer.component.ts'
      },
      shared: {
        "@angular/core": { singleton: true, requiredVersion:'auto' },
        "@angular/common": { singleton: true, requiredVersion:'auto' },
        "@angular/router": { singleton: true, requiredVersion:'auto' },
      },
    }),
  ],
};
