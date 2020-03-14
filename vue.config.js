module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variableList.scss";`
      },
    }
  }
}