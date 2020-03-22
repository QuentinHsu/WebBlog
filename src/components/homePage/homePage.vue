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
            articleList: [
                {
                    articleCoverPicture: 'https://wx4.sinaimg.cn/large/ebde65begy1gbesoywaurj215o0rxtf6.jpg',
                    articleTitle: '第一张第一张第一张第一张第一张第一张第一张',       // 文章标题
                    articleOverview: '我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么',     // 文章梗概
                    createTime: '2020-01-01'
                },
                {
                    articleCoverPicture: 'https://wx4.sinaimg.cn/large/ebde65begy1gbesoywaurj215o0rxtf6.jpg',
                    articleTitle: '第一张',       // 文章标题
                    articleOverview: '我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么我也不知道写了些什么',     // 文章梗概
                    createTime: '2020-01-01'
                },
                {
                    articleCoverPicture: 'https://wx4.sinaimg.cn/large/ebde65begy1gbesoywaurj215o0rxtf6.jpg',
                    articleTitle: '第一张',       // 文章标题
                    articleOverview: '我也不知道写了些什么'     // 文章梗概
                },
                {
                    articleCoverPicture: 'https://wx4.sinaimg.cn/large/ebde65begy1gbesoywaurj215o0rxtf6.jpg',
                    articleTitle: '第一张',       // 文章标题
                    articleOverview: '我也不知道写了些什么'     // 文章梗概
                },
                {
                    articleCoverPicture: 'https://wx4.sinaimg.cn/large/ebde65begy1gbesoywaurj215o0rxtf6.jpg',
                    articleTitle: '第一张',       // 文章标题
                    articleOverview: '我也不知道写了些什么'     // 文章梗概
                },
                {
                    articleCoverPicture: 'https://wx4.sinaimg.cn/large/ebde65begy1gbesoywaurj215o0rxtf6.jpg',
                    articleTitle: '第一张',       // 文章标题
                    articleOverview: '我也不知道写了些什么'     // 文章梗概
                },

            ]
        }
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