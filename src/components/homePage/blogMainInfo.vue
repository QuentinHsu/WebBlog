<template>
    <div>
        <el-row>
            <el-col :span="24" class="blogMainInfo">
                <h1 class="blogName">{{blogMainInfo.blogName}}</h1>
                <!-- TODO：又想打算改成头像  纠结 -->
                <div class="redBottom">
                    <p class="aWord">{{blogMainInfo.aWord}}</p>
                    <!-- TODO: 添加打字机效果 -->
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props: {
        blogMainInfo: {
            type: Object
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/styles/variableList';
.blogName, .redBottom ,.aWord {
    text-align: center;
}
.blogMainInfo {
    .blogName {
        font-size: 4vmax;
        margin: 2vmax auto;
    }
    .redBottom {
        width: 80%;
        margin: 0 auto 0;
        border-color: red;
        border-bottom-style: solid;
        border-width: 0.3vmax;
        .aWord {
            margin: -0.5vmax auto 1vmax;
            font-size: 1.5vmax;
        }
    }
}

/**  禁止选中文本 */
    .blogName ,.aWord {
        -webkit-touch-callout: none;    /* iOS Safari */
        -webkit-user-select: none;      /* Chrome/Safari/Opera */
        -khtml-user-select: none;       /* Konqueror */
        -moz-user-select: none;         /* Firefox */
        -ms-user-select: none;          /* Internet Explorer/Edge */
        user-select: none;              /* Non-prefixed version, currently not supported by any browser */
    }
/** /禁止选中文本 */

/** aWord 打字机效果 */
    @keyframes typing {
        from { width: 0 }   /** 动画：从左到右 */
    }
    @keyframes caret {
        50% { border-right-color: rgba(255, 255, 255, 0); } /** 光标闪烁 */
    }
    .aWord {
        width: 31.5ch;      /** 文本宽度 */
        white-space: nowrap;
        overflow: hidden;
        border-right: .05em solid;
        animation: typing 5s steps(25),cursor 1s steps(2) infinite;
        /* typing: 动画时长
        *  steps：
        *
        */
    }
/** /aWord 打字机效果 */

</style>

<style lang="scss">
// @import '@/styles/variableList';
@media (prefers-color-scheme: dark) {
    .blogMainInfo {
        background: $mainBackgroundColor_dark;
        .blogName {
            color: $textFontColor_dark;
        }
        .aWord {
            color: $textFontColor_dark;
        }
    }
}
@media (prefers-color-scheme: light) {
    .blogMainInfo {
        background: $mainBackgroundColor_light;
        .blogName {
            color: $textFontColor_light;
        }
        .aWord {
            color: $textFontColor_light;
        }
    }
}
</style>