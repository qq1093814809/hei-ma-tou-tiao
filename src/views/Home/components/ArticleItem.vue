<template>
  <div class="article-item-container">
    <div>
      <p>{{ title }}</p>
      <div class="img1"><img :src="cover.images[0]" alt="" v-if="cover.images.length < 3" /></div>
    </div>
    <div class="sing">
      <span>{{ name }}</span>
      <span>评论{{ comm_count }}</span>
      <span>{{ pubdate }}</span>
    </div>

    <div class="imgs" v-if="cover.images.length == 3">
      <img v-for="(item, index) in cover.images" :src="item" :key="index" />
    </div>
  </div>
</template>
<script>
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
  computed: {},
  watch: {},
  created() {}
}
</script>
<style lang="less" scoped>
.article-item-container {
  p {
    font-size: 17px;
  }
  .sing {
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
