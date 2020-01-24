<template lang="pug">
  el-card.num-block
    div
      Ball(:num="num")
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
.ball-number {
  border: 2px solid blue;
  border-radius: 50%;
  text-align: center;
  width: 2rem;
  height: 2rem;
  margin: auto;
  color: blue;
}
</style>
