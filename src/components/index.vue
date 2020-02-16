<template>
  <div>
    <el-row>
      <el-card class="window" shadow="never">
        <el-col :span="24" :offset="14">
          <el-row>
            <el-col :span="4">
              首页
            </el-col>
            <el-col :span="4">
              文档
            </el-col>
            <el-col :span="4">
              关于
            </el-col>
          </el-row>
        </el-col>
        <el-row>
          <el-col class="logo" :span="4" :offset="2">
            <img src="@/assets/logo/LOGO-black.png" alt="logo">
          </el-col>
        </el-row>
      </el-card>
    </el-row>

  </div>
</template>
// TODO: 字体响应式
<script>
export default {

}
</script>

<style lang="scss">
.window {
  margin: 0 auto;
  width: 80%;
  font-size: 3vmax;
  color: black;
  .logo img {
    width: 100%;
  }
}
</style>