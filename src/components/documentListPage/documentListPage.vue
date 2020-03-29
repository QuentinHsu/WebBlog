<template>
    <el-row>
        <el-col :span="24" class="blogArticleList">
            <blog-article-list :articleList='articleList'></blog-article-list>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
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

<style>
.blogArticleList {
    margin: 5vh 0;
}
</style>