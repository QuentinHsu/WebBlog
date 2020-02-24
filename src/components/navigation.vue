<template>
  <el-row class="header">
    <el-col :span="2">
        <router-link :to="{name:'About'}"><div>首页</div></router-link>
        <!-- 首页 -->
    </el-col>
    <el-col :span="2">
        文档
    </el-col>
    <el-col :span="2">
        关于
    </el-col>
</el-row>
</template>

<script>
export default {

}
</script>

<style>

</style>