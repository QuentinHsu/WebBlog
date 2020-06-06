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
        host: '0.0.0.0',                            // 指定 hostName，指定为 0.0.0.0，能生成 本地IP+端口，以及 局域网IP+端口。否则将都是 同一个 hostName+端口
        port: 8080,                                 // 指定端口号
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