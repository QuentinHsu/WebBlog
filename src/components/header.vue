<template>
    <el-row class="headerPage" :class=" headerFixed?'isFixed':'' ">
        <el-col :span="3">
            <router-link :to="{name:'homePage'}">首页</router-link>
            <!-- 首页 -->
        </el-col>
        <el-col :span="3">
            <router-link :to="{name: 'document'}">文档</router-link>
        </el-col>
        <el-col :span="3">
            <router-link :to="{name: 'about'}">关于</router-link>
        </el-col>
        <!-- <router-view></router-view> -->
    </el-row>
</template>

<script>
export default {
    data() {
        return{
            headerFixed: '',
        }
    },
    methods: {
        handleScroll() {
        // 得到页面滚动的距离
        let scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
            //  当滚动超过 180 时，实现吸顶效果
        if (scrollTop > 180) {
            this.headerFixed = true;
        } else {
            this.headerFixed = false;
        }
        }
    },
    mounted() {
        // handleScroll 为页面滚动的监听回调
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        //同时在 destroyed 回调中移除监听：
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
//  导航栏吸顶
.isFixed {
    width: 63vw;
    height: 8vh;
    line-height: 8vh;
    position: fixed;
    top: 0;
    z-index: 999;
}
//  /导航栏吸顶
</style>

<style lang="scss">
@media (prefers-color-scheme: dark) {
    .headerPage {
        background: $mainBackgroundColor_dark;
        /**  清除 <a> <router-link> 等链接的默认样式颜色  */
        a {
            color:$textFontColor_dark;
        }
    }
}
@media (prefers-color-scheme: light) {
    .headerPage {
        background: $mainBackgroundColor_light;
        /**  清除 <a> <router-link> 等链接的默认样式颜色  */
        a {
            color:$textFontColor_light;
        }
    }
}
</style>