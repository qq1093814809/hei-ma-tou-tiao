<template>
  <div>
    <ArticleItem
      v-for="item in ArticleList"
      :key="item.art_id"
      :name="item.aut_name"
      :comm_count="item.comm_count"
      :title="item.title"
      :pubdate="item.pubdate"
      :cover="item.cover"
    ></ArticleItem>
  </div>
</template>
<script>
import ArticleItem from './ArticleItem.vue'
export default {
  components: { ArticleItem },
  props: {
    ArticleList: {
      type: Array,
      default() {
        return []
      }
    }
  },

  methods: {},
  computed: {},
  watch: {}
}
</script>
<style lang="less" scoped></style>
