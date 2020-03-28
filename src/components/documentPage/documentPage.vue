<template>
    <el-row class="documentPage">
        <div class="currentArticleInfo">
            <h2 class="currentArticleTitle">{{currentArticleTitle}}</h2>
            <div class="articleTime">
                 <span>
                    <el-row>
                        <el-col :span="4">
                            发布于<format-date :date=articleCreateTime></format-date>
                        </el-col>
                        <el-col :span="4" v-if=" this.articleCreateTime != this.articleUpdateTime">
                            更新于<format-date :date=articleUpdateTime ></format-date>
                        </el-col>
                    </el-row>
                 </span>
            </div>
            <div class="documentContent" v-html="content"></div>
            <div class="articleEnd">End</div>
        </div>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            currentArticleTitle: '',
            articleCreateTime: '',
            articleUpdateTime: '',
            content: '',
        }
    },
    props: {

    },
    methods: {
        getDocumentContent(){
            const id = this.$route.params.id
            this.$axios ({
                method: 'get',
                url: '/apis/api/content/posts/' + id,
                params: {
                    formatDisabled: 'false',
                    sourceDisabled: 'true',
                }
            })
            .then( result => {
                this.currentArticleTitle = result.data.data.title
                this.articleCreateTime = result.data.data.createTime
                this.articleUpdateTime = result.data.data.updateTime
                this.content = result.data.data.formatContent
                console.log('test:' + this.content)
            })
        },
    },
    created () {
        this.getDocumentContent()
    }
}
</script>

<style lang="scss">
.documentPage {
    min-height:78.5vh;
    .currentArticleInfo {
        .currentArticleTitle{
        font-size: 200%;
        display:inline-block!important; /** 容器宽度，随内容宽度的变化而变化 */
        border-radius: 2px;
        border-bottom-style: solid;
        border-color: red;
        }
        .articleTime {
            font-size: 0.7vw;
        }
        .documentContent {
            margin-top: 7vh;
            h1,h2,h3,h4,h5,h6 {
                margin: 2vh 0;
                /** 容器宽度，随内容宽度的变化而变化 */
                display:inline-block!important;
                border-radius: 2px;
                border-bottom-style: solid;
                border-color: red;
                /** /容器宽度，随内容宽度的变化而变化 */
                padding-bottom: 0.5vh;
            }
            h2 {
                font-size: 160%;
            }
            h3 {
                font-size: 140%;
            }
            p {
                text-indent: 2em
            }
            a {
                // color: white;
                text-decoration: none;
            }
            img {
                display: block;
                width: 25vw;
                margin: 0.5vh auto;
            }
            code {
                font-size: 90%;
            }
        }
        .articleEnd {
            text-align: center;
        }
    }
}


</style>

<style lang="scss">
@media (prefers-color-scheme: dark) {
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