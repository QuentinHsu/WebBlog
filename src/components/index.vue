<template>
  <div>
    <el-row>
      <el-card class="window" shadow="never">
        <el-col :span="24" :offset="17">
          <el-row>
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
          <el-col class="logo" :span="24" :offset="1">
            <!-- <img src="@/assets/logo/LOGO-black.png" alt="logo"> -->
            <el-row>
              <el-col :span="6" class="blogMainInfo">
                <h2>{{blogName}}</h2>
                <div class="redBottom">
                  <p>{{aWord}}</p>
                  <!-- TODO: 添加打字机效果 -->
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :offset="1" class="content">
            <template shadow="never">
              <el-row>
                <el-col :span="4" class="todayYearNum">
                  {{dateYear}}
                </el-col>
              </el-row>
            </template>
          </el-col>
          
        </el-row>
        
      </el-card>
    </el-row>

  </div>
</template>
// TODO: 字体响应式，媒体查询
<script>
export default {
  data() {
    return {
      blogName: 'KunYunYe',
      aWord: '人生本就过得不愉快,不如来点罗曼蒂克。',
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