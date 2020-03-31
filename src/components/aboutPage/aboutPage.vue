<template>
    <el-row class="aboutPage">
        <h2>只言片语</h2>
        <el-col :span="24">
            <img src="http://ghchart.rshah.org/QuentinHsu" alt="QuentinHsu's Github chart" />
        </el-col>
    </el-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.aboutPage {
    min-height: 78.5vh;
    h2 {
        font-size: 220%;
    }
    img {
        display: block;
        width: 80%;
        // padding: 1% auto;
        margin: 0 auto;
        // height: auto;
        // margin: 0 auto;
        // width: 61vw;
    }
}
</style>

<style lang="scss">
@media (prefers-color-scheme: dark) {
    .aboutPage {
        h2 {
            color: $textFontColor_dark;
            text-align: center;
        }

    }
    .currentArticleTitle {
        color: $textFontColor_dark;
    }
    .articleTime {
        color: $textFontColor_dark;
    }
    .documentContent {
        background: $mainBackgroundColor_dark;
        color: $textFontColor_dark;;
        /**  清除 <a> <router-link> 等链接的默认样式颜色  */
        a {
            color:$textFontColor_dark;
        }
    }
}
@media (prefers-color-scheme: light) {
    .documentContent {
        background: $mainBackgroundColor_light;
        color: $textFontColor_light;
        /**  清除 <a> <router-link> 等链接的默认样式颜色  */
        a {
            color:$textFontColor_light;
        }
    }
}
</style>