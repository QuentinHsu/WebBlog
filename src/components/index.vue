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
          <el-col class="logo" :span="4" :offset="2">
            <img src="@/assets/logo/LOGO-black.png" alt="logo">
          </el-col>
        </el-row>
        <el-card class="content">
          ABCDEFG
          <el-row>
            <el-col :span="4">
              <!-- TODO:通过计算属性 显示 年份 -->
              {{dateYear}}
            </el-col>
          </el-row>
        </el-card>
      </el-card>
    </el-row>

  </div>
</template>
// TODO: 字体响应式
<script>
export default {
  data() {
    return {
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
  // mounted: {
  //   yearNum()
  // }
}
</script>

<style lang="scss">
.window {
  margin: 0 auto;
  width: 80%;
  font-size: 2vmax;
  color: black;
  .logo img {
    width: 100%;
  }
}
</style>