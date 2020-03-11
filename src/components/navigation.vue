<template>
    <el-row class="header">
        <el-col :span="2">
            <router-link :to="{name:'homePage'}">首页</router-link>
            <!-- 首页 -->
        </el-col>
        <el-col :span="2">
            <router-link :to="{name: 'home'}">文档</router-link>
        </el-col>
        <el-col :span="2">
            <router-link :to="{name: 'about'}">关于</router-link>
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

<style lang="scss">

</style>

<style lang="scss">
@import '@/styles/variableList';
@media (prefers-color-scheme: dark) {
    .header {
        background: $mainBackgroundColor_dark;
        /** color: rgb(255, 255, 255); */

        /**  清除 <a> <router-link> 等链接的默认样式  */
        a {
            text-decoration: none;
            color:$textFontColor_dark;
        }
    }
}

</style>