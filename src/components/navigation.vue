<template>
    <el-row class="header">
        <el-col :span="2">
            <router-link :to="{name:'homePage'}">首页</router-link>
            <!-- 首页 -->
        </el-col>
        <el-col :span="2">
            <router-link :to="{name: 'Home'}">文档</router-link>
        </el-col>
        <el-col :span="2">
            关于
        </el-col>
        <!-- <router-view></router-view> -->
    </el-row>
</template>

<script>
export default {
    data() {
        return{

        }
    }
}
</script>

<style>

</style>