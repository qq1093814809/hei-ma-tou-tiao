<template>
  <div class="article-item-container">
    <p>{{ title }}</p>
    <div class="sing">
      <span>{{ name }}</span>
      <span>评论{{ comm_count }}</span>
      <span>{{ pubdate }}</span>
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
}
</style>
