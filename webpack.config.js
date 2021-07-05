const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "cms",
    projectName: "authorization",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 9091
    },
    externals: ['react', 'react-dom', '@bangits-platform/design-system']
    // modify the webpack config however you'd like to by adding to this object
  });
};
