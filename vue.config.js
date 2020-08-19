module.exports = {
  lintOnSave: false,
  devServer: {
    port: 9999
  },
  publicPath: "/vue_static_page",
  chainWebpack: config => {
    config.plugin("define").tap(args => {
      args[0]["process.env"].BUILD_ENV = JSON.stringify(process.env.BUILD_ENV);
      return args;
    });
  }
};
