<template>
    <el-row>
        <el-col :span="24">
            <!-- 博客简单信息 -->
            <blog-main-info :blogMainInfo="blogMainInfo"></blog-main-info>
        </el-col>
        <el-col class="content">
            <template shadow="never">
            <el-row>
                <el-col :span="4" class="todayYearNum">
                {{dateYear}}
                </el-col>
            </el-row>
            <blog-article-brief></blog-article-brief>
            </template>
        </el-col>
    </el-row>
</template>

<script>
import blogMainInfo from './blogMainInfo.vue'
import blogArticleBrief from './blogArticleBrief.vue'
export default {
components: {
    'blog-main-info': blogMainInfo,
    'blog-article-brief': blogArticleBrief
},
data(){
    return{
        blogMainInfo: {
        blogName: 'KunYunYe',
        aWord: '人生本就过得不愉快，不如来点罗曼蒂克。',
        },
        dateYear: new Date().getFullYear(),
    }
}
}
</script>

<style lang="scss">
@import '@/styles/variableList';

</style>