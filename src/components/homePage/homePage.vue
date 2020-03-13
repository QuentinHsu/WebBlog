<template>
    <el-row>
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
        articleList: {
            coverPicture: '',       // 封面
            arctleTitle: ''         // 文章标题
        }
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/styles/variableList';


</style>

<style lang="scss">
@import '@/styles/variableList';

</style>