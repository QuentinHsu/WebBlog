<template>
    <span>
        {{unixTimestampToOrdinaryTime}}
    </span>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        date: {
            // 勿要指定该对象的数据类型(比如：Number，String，Date)，不管你怎么声明都会有个对应报错。
        }
    },
    computed: {
        unixTimestampToOrdinaryTime() {
            let date = new Date(this.date);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            // h = h < 10 ? ('0' + h) : h;
            h = (h < 6) ? '凌晨':
                (h < 8) ? '早晨':
                (h < 11)? '上午':
                (h < 13)? '中午':
                (h < 16)? '下午':
                (h < 18)? '黄昏':
                (h < 22)? '夜晚':
                (h < 24)? '深夜': '注意休息';
            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;
            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
            return y + '-' + MM + '-' + d + ' ' + h
        }
    }
}
</script>

<style>

</style>