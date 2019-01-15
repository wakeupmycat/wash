<template>
  <div class="profile">
    <Modal :modal='modal' :noPay="noPay"/>
    <div class="step-img"></div>
    <div class="user-info">
      <div class="location-name">当前服务点名称</div>
      <div class='line'></div>
      <div class="car-coin">我的车币余额
        <span style='color:#EE6969'>200.00</span>元
      </div>
    </div>
    <div class="meal">套餐选择</div>
    <div class="meal-items">
      <div class="meal-item">10元/20分钟</div>
    </div>
    <div class="tag">
      <div class="tag-txt">提示：</div>
      <div class="tag1">1.暂停不计时，暂停超过5分钟将结束本次服务</div>
      <div class="tag1">2.机器启动后金额不能退还，请按照操作步骤洗车</div>
      <div class='untying'>解绑账号</div>
    </div>
    <div class='money'>
        共计 ￥10.00
    </div>
    <div class='gopay' @click='goPay'>确认支付</div>
  </div>
</template>
<script>
import Modal from '@/components/PayModa'

export default {
    data(){
        return{
            modal:false
        }
    },
    methods:{
        goPay(){
            this.modal=true
        },
        noPay(){
            this.modal=false
        }
    },
    components:{Modal}

}
</script>
<style lang="stylus" scoped>
.profile
  height 100%  
  padding 0 .32rem
  background #F2F2F2
  display flex
  flex-direction column
  .step-img
    background url('../../static/banner.png') no-repeat
    background-size cover
    width 100%
    height 4rem
    margin-top .1rem
  .user-info
    display flex
    flex-direction column
    padding 0 .24rem
    background #ffffff
    border-radius 5px
    margin-top .2rem
    .location-name
      padding .3rem 0
      color #484848
      font-size 14px
    .line
      width 100%
      height 1px
      background #D6D6D6 
    .car-coin
      padding .3rem 0
      color #484848
      font-size 14px  
  .meal
    color #8E8E8E
    font-size 14px
    margin-left .24rem
    margin-top .24rem
  .meal-items
    display flex
    flex-direction row
    align-items center
    padding 0 .24rem
    background #ffffff
    border-radius 5px
    margin-top .05rem
    height 1.2rem 
    .meal-item
      display flex
      flex-direction row
      align-items center
      justify-content center
      border 1px solid  #1EB14A
      color #666666
      font-size 14px
      width 2.4rem
      height .72rem
      border-radius 5px     
  .tag
    margin-top .05rem
    margin-left .24rem
    .tag-txt
      color #8E8E8E
      font-size 11px
      margin-top .02rem
    .tag1
      color #8E8E8E
      font-size 11px
      margin-top .08rem
    .untying
      color #1EB14A
      font-size 11px
      margin-top .28rem
  .money
    display flex
    flex-direction row 
    justify-content center
    color #484848
    font-size 14px 
  .gopay
    width 100%
    border-radius 5px
    display flex
    flex-direction row
    justify-content center 
    align-items center
    color #ffffff
    font-size 14px
    background  #1EB14A
    height .9rem 
    margin-top .2rem           
</style>


