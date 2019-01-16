
<template>
    <div class="loadEffect">
        <span class='iconfont icon-loadingspinner'></span>
    </div>
</template>
<script>
    export default {
        props: ["showLoading"]
    }
</script>
 
<style scoped>
@keyframes loading{
    0%{
        transform: rotate(0deg)
    }
    25%{
         transform: rotate(90deg)
    }
    50%{
         transform: rotate(180deg)
    }
    75%{
       transform: rotate(270deg) 
    }
    100%{
       transform: rotate(360deg) 
    }
} 
.loadEffect  span{
    font-size :30px;
    color:#848484;
    display: inline-block;
     width: 36px;
    height:36px;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom:0;
    margin:auto;
    animation: loading 2s linear infinite;
    line-height: 36px;
    text-align: center
}


 </style>
