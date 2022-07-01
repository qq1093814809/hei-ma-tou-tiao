<template>
  <div class="article-item-container">
    <div>
      <p>{{ title }}</p>
      <div class="img1">
        <img :src="cover.images[0]" v-if="cover.images && cover.images.length < 3" alt="" />
      </div>
    </div>
    <div class="sing">
      <span>{{ name }}</span>
      <span>评论:{{ comm_count }}</span>
      <span>{{ timeAgo }}</span>
    </div>

    <div class="imgs" v-if="cover.images && cover.images.length == 3">
      <img v-for="(item, index) in cover.images" :src="item" :key="index" />
    </div>
  </div>
</template>
<script>
import { timeAgo } from '@/utils/dayjs'
export default {
  name: 'article-item',
  props: {
    name: {
      type: String,
      default: '无作者'
    },
    comm_count: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    pubdate: {
      type: String,
      default: '未知时间'
    },
    cover: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    timeAgo() {
      return timeAgo(this.pubdate)
    }
  },
  watch: {},
  created() {}
}
</script>
<style lang="less" scoped>
.article-item-container {
  padding: 10px;
  p {
    font-size: 17px;
  }
  .sing {
    margin-bottom: 5px;
    color: #777;
    font-size: 13px;
    span {
      margin-right: 15px;
    }
  }
  .img1 {
  }

  img {
    width: 100px;
    height: 70px;
    margin-right: 7px;
  }
}
</style>
