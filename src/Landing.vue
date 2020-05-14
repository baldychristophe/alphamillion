<template lang="pug">
div
  el-row.mb-4(v-for="draw in rawData" :key="draw")
    el-card(shadow="hover")
      .clearfix(slot="header") {{ draw.date }}
      el-row(type="flex" justify="center")
        div.mx-3(v-for="ball in draw.balls" :key="ball")
          Ball(:num="ball")
        div.mx-3(v-for="star in draw.stars" :key="star")
          Star(:num="star")

</template>
<script>
import Ball from './components/Ball'
import Star from './components/Star'

export default {
  name: 'landing',
  computed: {
    rawData () {
      return require('./data/test.json')
    },
  },
  components: {
    Ball,
    Star,
  },
}
</script>
<style lang="scss" scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.card-body {
  font-size: x-small;
  padding: 10px;
}
</style>
