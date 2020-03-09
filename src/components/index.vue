<template>
  <div>
    <el-row>
      <el-card class="window" shadow="never">
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
import navigation from './navigation.vue'
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
@import '../styles/index.scss';
</style>