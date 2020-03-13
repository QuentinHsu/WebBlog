<template>
    <el-row class="articleCard">
        <h2 class="articleListTitle">往日细语</h2>
        <el-card>

        </el-card>
    </el-row>
</template>

<script>
export default {
    props: {
        artcleList: {
            type: Object
        }
    }

}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
@import '@/styles/variableList';
@media (prefers-color-scheme: dark) {
    .articleListTitle {
        color: $textFontColor_dark;
    }
}
@media (prefers-color-scheme: light) {
    
}
</style>