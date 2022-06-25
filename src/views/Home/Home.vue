<template>
  <div>
    <van-nav-bar fixed placeholder title="黑马头条">
      <template #right>
        <van-icon name="search" size="6.67vw" color="#fff" />
      </template>
      <template #left>
        <img src="@/assets/下载.png" alt="" />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" swipeable sticky offset-top="48px">
      <van-tab v-for="item in list" :key="item.id" :title="item.name"> 内容 {{ item.id }} </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getAllchannelsAPI } from '@/api/index'
export default {
  name: 'home',
  data() {
    return {
      active: 0,
      list: []
    }
  },
  methods: {
    async add() {
      try {
        const {
          data: {
            data: { channels: res }
          }
        } = await getAllchannelsAPI()
        this.list = res
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  created() {
    this.add()
  }
}
</script>
<style lang="less" scoped>
.van-nav-bar__placeholder {
  /deep/ .van-nav-bar {
    background-color: rgb(25, 137, 250);
    img {
      width: 50px;
    }
    .van-nav-bar__title {
      color: #ffffff;
    }
  }
}
</style>
