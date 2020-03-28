<template>
    <el-row class="articleCardGroup">
        <h2 class="articleCardGroupTitle">往日细语</h2>
        <el-col :span="24">
            <div v-for="(articleInfo, index) in articleList" :key="index" @click="selectItem(articleInfo.id)" >
                <el-card class="articleCardInfo">
                    <el-row>
                        <el-col :span="12" >
                            <el-row class="articleCardInfoText">
                                <el-col :span="24">
                                        <div class="articleTitle">{{articleInfo.articleTitle}}</div>
                                </el-col>
                                <el-col :span="24" style="height: 3vw">
                                    <div class="articleOverview">{{articleInfo.articleOverview}}</div>
                                </el-col>
                                <div class="articleCreateTime noSelectText">
                                    <format-date :date="articleInfo.articleCreateTime"></format-date>
                                </div>
                            </el-row>
                        </el-col>

                        <el-col :span="12">
                            <template>
                                <el-image
                                    alt="articleCardCoverPicture"
                                    :src="articleInfo.articleCardCoverPicture"
                                    fit="contain">
                                </el-image>
                            </template>
                        </el-col>
                    </el-row>
                    <!-- TODO: 文章卡片样式 溢出问题 -->
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
    },
    computed: {

    },
    methods: {
        selectItem(res) {
            const id = res
            this.$router.push({
                name: 'document',
                params: {id}
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.articleCardGroup {
    .articleCardInfo {
        height: 12vw;
        .articleCardInfoText {
            margin: auto 1vw;
            padding: 2vw 1vw;
            height: 100%;
            .articleTitle {
                height: 4vw;
                font-size: 1.7vw;
                line-height: 1.8vw;
                // line-height: 40%;
            }
            .articleOverview {
                font-size: 1vw;
                text-indent:2em;
                line-height: 1.2vw;
                /**
                 *  指定显示 n 行
                 *  但不能设置当前容器的高度，一旦设置将会失效
                 */
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;// 行数
                -webkit-box-orient: vertical;
                /**
                 *  /限制显示行数，多余的省略
                 */
            }

            .articleCreateTime {
                font-size: 50%;
                display:inline-block!important; /** 容器宽度，随内容宽度的变化而变化 */
                border-radius: 2px;
                // background-color: cadetblue;
            }
        }
    }
    .articleCardFooter {

    }
}

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
    .articleCardGroup {
        .articleCardGroupTitle {
            color: $textFontColor_light;
        }
        .articleCardInfo {
            color: $textFontColor_light;
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
            background-color:$mainBackgroundColor_light!important;
        }
        .el-card__body {
            padding: 0px!important;
        }
    }
}


</style>