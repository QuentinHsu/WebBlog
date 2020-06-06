<template>
  <div id="app">
    <el-backtop></el-backtop>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/index.scss';
#app {
  min-height: 100vh;
  font-family: 'SourceHanSerif','MFYanSong','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/** 隐藏页面滚动条 */
// ::-webkit-scrollbar {
//   display: none; /* Chrome Safari */
// }
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
@-moz-document url-prefix() {
  html {
    overflow: -moz-hidden-unscrollable; /*注意！若只打 hidden，chrome 的其它 hidden 会出问题*/
    height: 100%;
  }

  body {
    height: 100%;
    width: calc(100vw + 18px); /*浏览器滚动条的长度大约是 18px*/
    overflow: auto;
  }
}
::-webkit-scrollbar
{
    width:1px;
    height:100px;
    background-color:rgba(255, 10, 10, 0.411);
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius:1px;
    // -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
    background-color:rgb(21, 162, 255);
}
</style>
<style lang="scss">
@media (prefers-color-scheme: dark) {
  #app {
    background: $fullBackgroundColor_dark;
    .el-backtop {
      color: rgb(45, 125, 216);
      background-color: rgb(86, 86, 87);
    }
  }
}
@media (prefers-color-scheme: light) {
  #app {
    background: $fullBackgroundColor_light;
    .el-backtop {
      background-color: rgb(200, 198, 198);
    }
  }
}
</style>
