<template>
    
    <div class='pay-ok'>
        <div class='ok-info'>
            <i class='iconfont icon-qunfengzhifuchenggong' style="fontSize:1.1rem;color:#1EB14A"></i>
            <div class='ok-txt'>支付成功</div>
        </div>
        <div class='order-profile'>
            <div class='txt'>订单详情</div>
            <div class='profile'>
                <div class='pro-item'>
                    <div class='one'>订单号</div>
                    <div class='two'>1231312312</div>
                </div>
                <div class='pro-item'>
                    <div class='one'>订单号</div>
                    <div class='two'>1231312312</div>
                </div>
                <div class='pro-item'>
                    <div class='one'>订单号</div>
                    <div class='two'>1231312312</div>
                </div>
                <div class='pro-item'>
                    <div class='one'>订单号</div>
                    <div class='two'>1231312312</div>
                </div>
            </div>
        </div>
        <div class='again-btn'>扫码重试</div>
        <div class='tag'>
            <div class='tag-txt'>提示：设备未响应请扫码重试</div>
            <div class='tag-txt'>客户服务电话：400-888-3126</div>
        </div>
        <div class='bottom-img'></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
}
</script>
<style lang="stylus" scoped>
.pay-ok
  display flex
  flex-direction column  
  background #F2F2F2  
  height 100%
  padding 0 .32rem
  .ok-info
    display flex
    flex-direction column
    align-items center
    margin-top .4rem
    .ok-txt
      font-size 14px
      color #1EB14A
      margin-top .2rem   
  .order-profile
    margin-top 0.68rem
    color #8E8E8E
    font-size 14px
    .txt
      margin-left .24rem
    .profile
      margin-top .2rem
      padding .26rem .38rem
      border-radius 5px
      background #fff
      .pro-item
        &:first-child
          margin-top 0  
        display flex
        flex-direction row
        margin-top .1rem
        .one
          width 2.1rem 
  .again-btn
    height .9rem
    background #1EB14A
    color #ffffff
    font-size 14px
    margin-top .4rem 
    border-radius 5px
    display flex
    justify-content center
    align-items center 
  .tag
    .tag-txt
      color #8E8E8E
      font-size 10px
      margin-top .06rem 
      margin-left .24rem
  .bottom-img
    background url('../../static/guanggao.png') no-repeat
    background-size cover
    width 100%
    height 3.6rem 
    margin-top .2rem                      
</style>

