// const path = require('path')
// const debug = 

module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "~@/styles/variableList.scss";`
			},
		}
	},
	devServer: {
        open: true,                                 // 是否自动打开浏览器并进入前端默认页面
        host: '127.0.0.1',                          // 指定 hostName
        port: 8081,                                 // 指定端口号
		proxy: {
            '/apis': {
                target: 'http://localhost:8090/',   // api 接口域名
                secure: false,                       // 若是 https 接口，需要配置这个参数
                changeOrigin: true,                 // 是否跨域
                pathRewrite: {
                    '^/apis': ''
                }
            }
        }
	}
}