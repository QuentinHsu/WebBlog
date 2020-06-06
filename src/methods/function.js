exports.install = function(Vue, options) {
    Vue.prototype.$test = (a) => {
        console.log(a + "全局函数 注册成功 😝")
    };

};