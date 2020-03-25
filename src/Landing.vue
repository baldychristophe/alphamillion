<template lang="pug">
div
  div(v-for="draw in rawData" :key="draw")
    el-row(:gutter="20" type="flex" justify="center")
      el-col(:span="3" v-for="ball in draw.balls" :key="ball")
        el-card(shadow="hover")
          .clearfix(slot="header")
            Ball(:num="ball")
          div.text.item.card-body
            el-row
              el-col(:span="12") date
              el-col.text-right(:span="12") {{ draw.date }}

      el-col(:span="3" v-for="star in draw.stars" :key="star")
        el-card(shadow="hover")
          .clearfix(slot="header")
            Star(:num="star")
          div.text.item.card-body
            el-row
              | date {{ draw.date }}
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
  font-size: 0.8rem;
}
</style>
