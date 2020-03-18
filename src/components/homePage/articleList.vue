<template>
    <el-row class="articleCardGroup">
        <h2 class="articleCardGroupTitle">往日细语</h2>
        <el-col :span="24">
            <div v-for="(articleInfo, index) in articleList" :key="index">
                <el-card class="articleCardInfo">
                    <el-col :span="12" >
                        <div class="articleCardInfoText">
                            <h3>{{articleInfo.articleTitle}}</h3>
                            <p>{{articleInfo.articleOverview}}</p>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <template>
                            <el-image
                                alt="articleCardCoverPicture"
                                style="eight: 100%;"
                                :src="articleInfo.articleCoverPicture"
                                fit="cover">
                            </el-image>
                        </template>
                    </el-col>
                </el-card>
                <div class="articleCardFooter"></div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        articleList: {
            type: Array
        }
    }

}
</script>

<style lang="scss" scoped>
.articleCardGroup {
    .articleCardInfo {
        height: 10vmax;
        .articleCardInfoText {
            margin: auto 1vmax;
            p {
                font-size: 80%;
            }
        }

    }
    // .articleCardFooter {
    //     margin: 0.5vmax auto 1vmax;
    //     width: 10%;
    //     border-bottom: 0.1vmax solid rgb(255, 255, 255);
    // }

}
// .articleCardFooter {
//         width: 10%;
//         border-bottom: 3vmax solid rgba(255, 250, 250, 0.2);
//     }

</style>

<style lang="scss">
@media (prefers-color-scheme: dark) {
    .articleCardGroup {
        .articleCardGroupTitle {
            color: $textFontColor_dark;
        }
        .articleCardInfo {
            color: $textFontColor_dark;

        }
        .articleCardFooter {
            margin: 0.5vmax auto 1vmax;
            width: 10%;
            border-bottom: 0.1vmax solid rgb(149, 149, 149);
        }
        .articleCardFooter {
            -moz-box-shadow:0px 1px 9px rgba(255, 255, 255, 0.691);
            -webkit-box-shadow:0px 1px 9px rgba(255, 255, 255, 0.616);
            box-shadow:0px 1px 9px rgba(255, 255, 255, 0.609);
        }
        .el-card {
            border: 0px!important;
            background-color: #222!important;
        }
        .el-card__body {
            padding: 0px!important;
        }
    }
}
@media (prefers-color-scheme: light) {
    
}


</style>