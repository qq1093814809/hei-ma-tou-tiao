<template>
  <div>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      list: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  created() {}
}
</script>
<style lang="less" scoped></style>
