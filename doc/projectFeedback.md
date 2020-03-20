# ProjectFeedback

> Project Question and Solution


## 引入图片

### 网络图片

直接将 `图片链接(https/http)` 赋值给 `<img>` 的 `src` 属性即可。

无需使用 `require` / `import` 引入


### 静态/本地文件

对于静态/本地（图片）文件，需要使用 require / import 引入变量，才能再赋值给 `<img>` 的 `src` 属性

## 引入全局 SCSS 变量

1. 新建 vue.config.js (因为 VueCli3 精简了项目框架结构，取消了在 VueCli2 时存在的该文件)
2. 并在 vue.config.js 其中配置以下内容

   ```JavaScript
    module.exports = {
        css: {
            loaderOptions: {
                scss: {
                    // 引入 SCSS 变量文件
                    prependData: `@import "~@/styles/variableList.scss";`
                },
            }
        }
    }
   ```

   详情参考 [VueCli CSS Modules](https://cli.vuejs.org/zh/guide/css.html#向预处理器-loader-传递选项)\

## "默认"撑满浏览器视口

为避免页面中无足够的内容，而无法撑开铺满整个页面：给基础页面组件设置 `min-height`，且总和为 `100 vh`

例如

```css
.header {
    min-height: 20vh;
}
.content {
    min-height: 70vh;
}
.footer {
    min-height: 10vh;
}
/* 三个组件的默认最小高度为 100vh */
```

`height: 100vh` == `height: 100%`

其中 1vh ，是视口的 1% ，所以 100vh 则是视口的高度。

当元素没有内容时候，设置 `height:100%` 该元素不会被撑开。

但是设置 `height:100vh` ，该元素会被撑开屏幕高度一致。