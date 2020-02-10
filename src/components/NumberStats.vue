<template lang="pug">
  el-card.num-block(shadow="hover")
    .clearfix(slot="header")
      Ball(:num="num")
    div.text.item
      el-row
        el-col(:span="12") occurence
        el-col.text-right(:span="12") 10
      el-row
        el-col(:span="12") last draw
        el-col.text-right(:span="12") 25/01/2020
</template>

<script>
import Ball from './Ball.vue'

export default {
  props: {
    num: Number,
  },
  components: {
    Ball,
  },
}
</script>

<style lang="scss" scoped>
.text-right {
  text-align: right;
}
</style>
