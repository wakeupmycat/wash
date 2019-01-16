<template>
  <div class="login">
    <div class="title">
      <h2>授权登录</h2>
    </div>
    <div class="vercode-login" v-if="login_type">
      <div class="username">
        <div class="icon">
          <i class="iconfont icon-ziyuan" style="fontSize:.4rem;color:#8E8E8E"></i>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入手机号">
        </div>
      </div>
      <div class="username">
        <div class="icon">
            <i class='iconfont icon-dunpaibaoxianrenzheng_o' style="fontSize:.55rem;color:#8E8E8E"></i>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入验证码">
          <div class="rec-btn" v-show="codeshow" @click="getCode">获取验证码</div>
          <div class="rec-btn" v-show="!codeshow">已发送{{count}}s</div>
        </div>
      </div>
    </div>
    <div class="vercode-login" v-else>
      <div class="username">
        <div class="icon">
            <i class="iconfont icon-ziyuan" style="fontSize:.4rem;color:#8E8E8E"></i>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入手机号">
        </div>
      </div>
      <div class="username" style="marginTop:.2rem">
        <div class="icon">
            <i class="iconfont icon-mima" style="fontSize:.55rem;color:#8E8E8E"></i>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入密码">
        </div>
      </div>
    </div>
    <div class="login-btn" @click='goProfile'>
      <span>登录</span>
    </div>
    <div class="info">
      <span>提示：车秘用户可使用账号密码登录</span>
      <div class="change_type" @click="login_type=!login_type">{{login_type?"密码登录":"验证码登录"}}</div>
    </div>
  <Loading />

  </div>
</template>
<script>
import Loading from '@/components/Loading'
export default {
  data() {
    return {
      login_type: true,
      codeshow: true,
      timer: null,
      count:'',
      showtoast:true
    };
  },
  components:{Loading},
  methods: {
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.codeshow = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.codeshow = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    goProfile(){
        this.$toast('登录成功')
       // this.$router.push('/profile')
    }
  }
};
</script>
<style lang="stylus" scoped>
.login 
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background #F2F2F2
  .title 
    margin-top: .8rem;
    h2 
      font-size: 24px;
      color: #8E8E8E;
  .vercode-login
    margin-top  1.16rem
    display flex
    flex-direction column
    .username
      &:last-child
        margin-top:.2rem
      display flex
      flex-direction row
      .icon
        width .98rem
        height .88rem
        display flex
        align-items center
        justify-content center 
        background #fff
        margin-right .04rem
      .input
        display flex
        flex-direction row
        align-items  center
        background #ffffff
        height .88rem
        width 4.64rem
        padding 0 .36rem
        input 
          font-size 14px
          border none
          outline none
        .rec-btn
          font-size:11px  
          color #1EB14A
  .login-btn
    width 6.36rem
    height .9rem
    border-radius 5px  
    background #1EB14A
    margin-top .4rem
    display flex
    justify-content center
    align-items center
    span 
      color #ffffff
      font-size 14px
  .info
    display flex
    flex-direction row
    justify-content space-between
    width 6.36rem
    margin-top .05rem
    span 
      font-size 14px
      color #8E8E8E  
    .change_type
      font-size 13px
      color #1EB14A 
</style>

