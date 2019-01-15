<template>
    <div class='modal' v-if='modal'>
        <div class='box'>
            <div class='pay-item'>
                <div class='coin'></div>
                <div class='coin-ls'>
                    <div class='item'>车币支付</div>
                    <div class='item-small'>(车币余额 <span style='color:#EE6969 '>500.00</span>)元</div>
                </div>
            </div>
            <div class='pay-item'>
                <div class='wxpay'></div>
                <div class='coin-ls'>
                    <div class='item'>微信支付</div>
                </div>
            </div>
             <div class='pay-item' @click='noPay'>
                <div class='no-pay'>取消</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['modal',"noPay"],
    data(){
        return{

        }
    }
}
</script>

<style lang="stylus" scoped>
.modal
  width 100%;
  height 100% 
  overflow hidden
  background rgba(0,0,0,.3)
  position fixed
  z-index 222
  top 0
  left 0
  .box
    width 6.38rem
    background #ffffff
    border-radius 5px
    margin-top 5.86rem
    padding 0 .24rem
    position absolute
    left 50%
    margin-left -3.43rem
    .pay-item
      width 100%  
      display flex
      flex-direction row
      padding .2rem 0
      align-items center;
      border-bottom 1px solid #D5D5D5
      &:last-child
        border none
      .no-pay
        width 100%
        display flex
        justify-content center
        color #484848
        font-size 14px
        text-align center
        padding .1rem 0
      .coin
          background url('../../static/coinpay.png') no-repeat
          background-size cover
          width .7rem
          height .7rem
          margin-left 2.2rem
      .coin-ls
        display flex
        flex-direction column
        justify-content center
        margin-left .24rem
        .item
         color #484848
         font-size 14px
        .item-small
           font-size 10px
           color #8E8E8E
      .wxpay
          background url('../../static/wxpay.png') no-repeat
          background-size cover
          width .7rem
          height .7rem
          margin-left 2.2rem

    
</style>

