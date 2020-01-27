<template lang="pug">
  el-card.num-block
    Ball.ball-display(:num="num")
    div occurence: 10
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
.ball-display {
  margin-bottom: 2rem;
}
</style>
