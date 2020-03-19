<template>
    <el-row>
        <el-col>
            <footer :span="24" class="footerInfo noSelectText">
                <div>Designed By Quentin Hsu</div>
                <div>Copyright © 1997-2020 Quentin Hsu</div>
                <div class="contactDetails">
                    <a href="https://github.com/QuentinHsu" target="_blank">
                        <img src="../assets/img/github-icon.svg" alt="GitHub">
                    </a>
                </div>
            </footer>
        </el-col>
    </el-row>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.footerInfo {
    font-size: 0.5vw;
    margin: 10px auto;
    text-align: center;
    div {
        margin-bottom: 0.2vw;
        img {
            width: 1.2vw;
        }
    }
}
</style>

<style lang="scss">
@media (prefers-color-scheme: dark) {
    .footerInfo {
        color: rgba(255, 228, 196, 0.548);
    }
}
@media (prefers-color-scheme: ligth) {
    .footerInfo {
        color: rgba(255, 228, 196, 0.548);
    }
}
</style>