<template>
  <div>
    <div class="layout-container"><router-view></router-view></div>

    <footer>
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/layout/home">主页</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/layout/user">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  created() {}
}
</script>
<style lang="less" scoped>
.layout-container {
  padding-bottom: 50px;
}
</style>
