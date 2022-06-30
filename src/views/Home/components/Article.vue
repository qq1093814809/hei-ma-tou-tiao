<template>
  <div>
    <ArticleItem
      v-for="item in ArticleList"
      :key="item.art_id"
      :name="item.aut_name"
      :comm_count="item.comm_count"
      :title="item.title"
      :pubdate="item.pubdate"
    ></ArticleItem>
  </div>
</template>
<script>
import ArticleItem from './ArticleItem.vue'
export default {
  components: { ArticleItem },
  data() {
    return {
      ArticleList: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  created() {
    this.$bus.$on('articleList', (value) => {
      this.ArticleList = value
    })
  }
}
</script>
<style lang="less" scoped></style>
