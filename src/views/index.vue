<template>
  <div>
    <el-row class="window">
      <el-card>
        <el-col :span="24">
          <default-header></default-header>
          <router-view style="min-height: 80vh"></router-view>
          <default-footer></default-footer>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>
// TODO: 字体响应式，媒体查询
<script>
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
export default {
  components: {
    'default-header': header,
    'default-footer': footer,
  },
  data() {
    return {
      blogMainInfo: {
        blogName: 'KunYunYe',
        aWord: '人生本就过得不愉快，不如来点罗曼蒂克。',
      },
      dateYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss">

</style>

<style lang="scss">
@media (prefers-color-scheme: dark) {
  .window > .el-card {
    background:$mainBackgroundColor_dark !important;
    border: $mainBackgroundColor_dark !important;
  }
}
@media (prefers-color-scheme: light) {
  .window > .el-card {
    background:$mainBackgroundColor_light !important;
    border: $mainBackgroundColor_light !important;
  }
}
</style>