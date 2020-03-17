<template>
    <el-row class="articleCard">
        <h2 class="articleListTitle">往日细语</h2>
        <el-col :span="24">
            <div v-for="(articleInfo, index) in articleList" :key="index">
                <el-card  class="articleList">
                    <el-col :span="12" >
                        <div class="articleInfoText">
                            <h3>{{articleInfo.articleTitle}}</h3>
                            <q>{{articleInfo.articleOverview}}</q>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <template>
                            <el-image
                                alt="articleCoverPicture"
                                style="height: 100%"
                                :src="articleInfo.articleCoverPicture"
                                fit="cover">
                            </el-image>
                        </template>
                    </el-col>
                </el-card>
                <div class="articleCardFooter">

                </div>
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
.articleCard {
    .articleList {
        height: 10vmax;
        .articleInfoText {
            margin: auto 1vmax;
            background: red($color: #000000);
        }
        .articleCoverPicture {
            // float: right;
            height: 100%;
            margin: auto;
        }
    }
    .articleCardFooter {
        margin: 0.5vmax auto 1vmax;
        width: 10%;
        border-bottom: 0.1vmax solid rgb(255, 255, 255);
    }

}
// .articleCardFooter {
//         width: 10%;
//         border-bottom: 3vmax solid rgba(255, 250, 250, 0.2);
//     }

</style>

<style lang="scss">
@media (prefers-color-scheme: dark) {
    .articleListTitle {
        color: $textFontColor_dark;
    }
}
@media (prefers-color-scheme: light) {
    
}
.articleCard {
    .el-card {
        border: 0px!important;
    }
    .el-card__body {
        padding: 0px!important;
    }
}

</style>