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

<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>

<style lang="scss">
@media (prefers-color-scheme: dark) {
    .header {
        background: $mainBackgroundColor_dark;
        /**  清除 <a> <router-link> 等链接的默认样式  */
        a {
            color:$textFontColor_dark;
        }
    }
}
@media (prefers-color-scheme: light) {
    .header {
        background: $mainBackgroundColor_light;
        /**  清除 <a> <router-link> 等链接的默认样式  */
        a {
            color:$textFontColor_light;
        }
    }
}
</style>