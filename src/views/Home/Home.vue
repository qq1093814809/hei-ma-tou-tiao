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
    <van-tabs animated v-model="active" swipeable sticky offset-top="48px">
      <van-tab v-for="item in list" :key="item.id" :title="item.name">
        <Article :ArticleList="ArticleList"></Article>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Article from './components/Article.vue'
import { getArticleListAPI, getAllchannelsAPI } from '@/api/index'
export default {
  name: 'home',
  components: { Article },
  data() {
    return {
      active: 0,
      list: [],
      ArticleList: []
    }
  },
  methods: {
    async getUsersList() {
      const { data: res } = await getAllchannelsAPI()
      this.list = res.data.channels
    },
    // 请求文章数据的方法
    async getArticle() {
      const { data: res } = await getArticleListAPI({
        channel_id: 0,
        timestamp: new Date().getTime
      })
      this.ArticleList = res.data.results
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getArticle()
    this.getUsersList()
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
