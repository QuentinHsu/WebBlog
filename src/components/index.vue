<template>
  <div>
    <el-row>
      <el-card class="window" shadow="never">
        <template style="width:80%">
          <el-col :span="24"  >
            <el-row class="header">
              <el-col :span="2">
                首页
              </el-col>
              <el-col :span="2">
                文档
              </el-col>
              <el-col :span="2">
                关于
              </el-col>
            </el-row>
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
import blogMainInfo from './blogMainInfo.vue'
import blogArticleBrief from './blogArticleBrief.vue'
export default {
  components: {
    'blog-main-info': blogMainInfo,
    'blog-article-brief': blogArticleBrief
  },
  data() {
    return {
      blogMainInfo: {
        blogName: 'KunYunYe',
        aWord: '人生本就过得不愉快，不如来点罗曼蒂克。',
      },
      dateYear: '',
    }
  },
  computed: {
    // yearNum: function() {
    //   let d = new Date()
    //   return this.dateYear = d.getFullYear()
    //   // console.log(this.dateYear)
    // }
  },
  methods: {
    yearNum() {
      let d = new Date()
      this.dateYear = d.getFullYear()
    }
  },
  mounted() {
    this.yearNum()
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>