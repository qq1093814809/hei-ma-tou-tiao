<template>
  <div class="login-container">
    <header>
      <van-nav-bar title="黑马头条-登录" />
    </header>

    <div class="login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
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
