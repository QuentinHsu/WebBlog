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
  // background: $fullBackgroundColor_dark;
}
</style>
<style lang="scss">
@import '@/styles/variableList';
@media (prefers-color-scheme: dark) {
  #app {
    background: $fullBackgroundColor_dark;

  }
}
@media (prefers-color-scheme: light) {
  #app {
    background: $fullBackgroundColor_light;

  }
}
</style>
