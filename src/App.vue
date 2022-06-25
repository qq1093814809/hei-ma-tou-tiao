<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import { getAllchannelsAPI } from '@/api/index'
export default {
  name: 'app',
  data() {
    return {
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
<style lang="less" scoped></style>
