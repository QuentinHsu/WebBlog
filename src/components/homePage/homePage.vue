<template>
    <el-row class="homePage">
        <el-col :span="24">
            <!-- 博客简单信息 -->
            <blog-main-info :blogMainInfo="blogMainInfo"></blog-main-info>
        </el-col>
        <el-col class="content">
            <el-row>
                <el-col :span="12" class="todayNum">
                <!-- {{dateYear}} -->
                {{dateTime}}
                </el-col>
                <el-col>
                    <blog-article-list :articleList="articleList"></blog-article-list>
                </el-col>
            </el-row>
        </el-col>
        <el-col>
        </el-col>
    </el-row>
</template>

<script>
import blogMainInfo from './blogMainInfo.vue'
import articleList from './articleList.vue'
export default {
    components: {
        'blog-main-info': blogMainInfo,
        'blog-article-list': articleList
    },
    data(){
        return{
            blogMainInfo: {
                blogName: 'KunYunYe',
                aWord: '人生本就过得不愉快，不如来点罗曼蒂克。',
            },
            dateYear: new Date().getFullYear(),
            dateTime: new Date().toDateString(),
            articleList:[
                // {
                //     articleCardCoverPicture: '',             // 文章封面
                //     articleTitle: '',                        // 文章标题
                //     articleOverview: '',                     // 文章梗概
                //     articleCreateTime: ''                    // 文章创建时间
                // }
            ],
        }
    },
    methods: {
        getArticleList() {
            this.$axios ({
                methods: 'get',
                url: '/apis/api/content/posts',
                params: {
                }
            }).then( res => {
                this.articleList = res.data.data.content
                this.articleList.forEach(item => {
                    item.articleCardCoverPicture = item.thumbnail
                    item.articleTitle = item.title
                    item.articleOverview = item.summary
                    item.articleCreateTime = item.createTime
                    delete item.thumbnail
                    delete item.title
                    delete item.summary
                    delete item.createTime
                })
                console.log( this.articleList )
            })
        },
    },
    created() {
        this.getArticleList()
    }
}
</script>

<style lang="scss" scoped>
.homePage {
    min-height: 80vh;
}
.content {
    .todayNum {
        color: $textFontColor_dark;
        font-size: 80%;
    }
}


</style>

<style lang="scss">

</style>