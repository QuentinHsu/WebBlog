<template>
    <div>
        <el-row>
            <el-col :span="6" class="blogMainInfo">
                <p class="blogName">{{blogMainInfo.blogName}}</p>
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

<style>
@keyframes typing {
    from { width: 0 }   /** 动画：从左到右 */
}
@keyframes caret {
    50% { border-right-color: rgba(255, 255, 255, 0); } /** 光标闪烁 */
}
.aWord {
	width: 31.5ch; /** 文本宽度 */
	white-space: nowrap;
	overflow: hidden;
    border-right: .05em solid;
    animation: typing 5s steps(25),cursor 1s steps(2) infinite;
    /* typing: 动画时长
    *  steps：
    * 
    */
}
</style>