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
        </el-row>
        <el-card class="content" shadow="never">
          <el-row>
            <el-col :span="4">
              {{dateYear}}
            </el-col>
          </el-row>
        </el-card>
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
.window {
  margin: 0 auto;
  width: 60%;
  font-size: 1.5vmax;
  color: black;
  .logo {
    img {
      display: block;
      width: 100%;
    }
    .blogMainInfo {
      h2 {
        font-size: 2vmax;
      }
      .redBottom {
        color: red;
        border-bottom-style: solid;
        p {
          color: black;
          margin-top: -1vmax;
          font-size: 0.7vmax;
        }
      }
    }
  }
}
</style>