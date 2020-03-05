<template>
  <div>
    <el-row>
      <el-card class="window" shadow="never">
        <template style="width:80%">
          <el-col :span="24">
            <navigation></navigation>
          </el-col>
          <el-row>
            <el-col :span="24" >
              <!-- 博客简单信息 -->
              <blog-main-info :blogMainInfo="blogMainInfo"></blog-main-info>
            </el-col>
            <el-col class="content">
              <template shadow="never">
                <el-row>
                  <el-col :span="4" class="todayYearNum">
                    {{dateYear}}
                  </el-col>
                </el-row>
                <blog-article-brief></blog-article-brief>
              </template>
            </el-col>
          </el-row>
        </template>
      </el-card>
    </el-row>

  </div>
</template>
// TODO: 字体响应式，媒体查询
<script>
import navigation from './navigation.vue'
import blogMainInfo from './blogMainInfo.vue'
import blogArticleBrief from './blogArticleBrief.vue'
export default {
  components: {
    'navigation': navigation,
    'blog-main-info': blogMainInfo,
    'blog-article-brief': blogArticleBrief
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