const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "https://nice-grass-0b6c62e0f.1.azurestaticapps.net/",
    uniqueName: "dashboard",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      library: { type: "var", name: "dashboard" },
      filename: "remoteEntry.js",
      exposes: {
        DashboardModule:
          "./src/app/modules/dashboard/dashboard.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, requiredVersion:'auto'  },
        "@angular/common": { singleton: true, requiredVersion:'auto'  },
        "@angular/router": { singleton: true, requiredVersion:'auto'  },
      },
    }),
  ],
};
