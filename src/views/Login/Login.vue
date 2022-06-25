<template>
  <div class="login-container">
    <header>
      <van-nav-bar title="黑马头条-登录" />
    </header>

    <div class="login">
      <van-form @submit="onSubmit">
        <van-field
          v-model.trim="user.mobile"
          type="digit"
          label="手机号"
          placeholder="请输入11位手机号"
          name="mobile"
          :rules="[{ required: true, message: '请正确填写手机号', pattern: /^1[3-9]\d{9}$/ }]"
        />

        <van-field
          v-model.trim="user.code"
          type="password"
          name="code"
          label="密码"
          placeholder="请输入6位数密码"
          :rules="[{ required: true, message: '请输入6位数密码', pattern: /^\d{6}$/ }]"
        />
        <div style="margin: 16px">
          <van-button
            loading-text="加载中..."
            :loading="btnloading"
            round
            block
            type="info"
            native-type="submit"
            :disabled="btndisabled"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { loginAPI } from '@/api/index'
import { Notify } from 'vant'
import { setToken } from '@/utils/token'
export default {
  data() {
    return {
      user: {
        mobile: '18251983962',
        code: '246810'
      },
      btnloading: false,
      btndisabled: false
    }
  },
  methods: {
    async onSubmit(values) {
      this.mobile = values.mobile
      this.code = values.code
      this.btndisabled = true
      this.btnloading = true
      try {
        const { data: res } = await loginAPI(this.user)
        console.log(res.data.token)
        Notify({ type: 'success', message: '登录成功' })
        setToken(res.data.token)
      } catch (err) {
        Notify({ type: 'danger', message: '账号或密码错误' })
        console.dir(err)
      }
      this.btnloading = false
      this.btndisabled = false
    }
  },
  computed: {},
  watch: {},
  created() {}
}
</script>
<style lang="less" scoped>
.login-container {
  header .van-nav-bar {
    background-color: rgb(25, 137, 250);
    /deep/ .van-nav-bar__title {
      color: white;
    }
  }
  h1 {
    font-size: 24px;
    color: #555;
  }
}
</style>
