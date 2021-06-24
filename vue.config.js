const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~': path.resolve(__dirname, 'src'),
        'style': path.resolve(__dirname, 'src/style')
      }
    },
  },
  devServer: {
    proxy: {
    '/api': {
        target: 'http://kg.zhaodashen.cn/',
        changeOrigin: true, // 是否允许跨域
        secure: false,      // 关闭SSL证书验证https协议接口需要改成true 
        pathRewrite: {     // 重写路径请求
            '^/api': '' //路径重写 
        }
      },
      '/v2': {
        target: 'http://kg.zhaodashen.cn/', // 真实网址   target + fetch里面的url
        changeOrigin: true, // 是否允许跨域
        secure: false,      // 关闭SSL证书验证https协议接口需要改成true
        pathRewrite: {
          // '^/api': '',
        }  
      },
    }
  }
};