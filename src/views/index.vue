<template>
  <div>
    <el-row class="window">
      <el-card>
        <template style="width:80%">
          <el-col :span="24">
            <navigation></navigation>
            <router-view></router-view>
          </el-col>
        </template>
      </el-card>
    </el-row>

  </div>
</template>
// TODO: 字体响应式，媒体查询
<script>
import navigation from '@/components/navigation.vue'
export default {
  components: {
    'navigation': navigation,
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
@import '@/styles/variableList';


</style>

<style lang="scss">
@import '@/styles/variableList';

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