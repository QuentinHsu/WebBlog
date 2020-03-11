<template>
  <div id="app">
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
  font-family: 'SourceHanSerif','MFYanSong','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #000000; */
  /* font-size: 2em; */
  background: $fullBackgroundColor_dark;
}
/* 清除 <a> <router-link> 等链接的默认样式  */
a {
  text-decoration: none;
  color:#333;
}

</style>
