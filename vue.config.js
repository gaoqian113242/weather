module.exports = {
  devServer: {
    port: 8081, // 端口号
    host: "0.0.0.0",
    //https: false, //
    open: false, //配置自动启动浏览器
    // 配置跨域处理,只有一个代理
    proxy: {
      // "/CRK": {
      //   target: 'http://192.168.31.181:9099', //project 服务器
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/CRK": ""
      //   }
      // },
      "/Online": {
        target: "http://36.112.138.182:9099", //测试
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/Online": ""
        }
      }
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    plugins: [
      /* new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      }) */
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/variable.scss";`
      }
    }
  }
};