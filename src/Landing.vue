<template lang="pug">
div
  div.mb-4(v-for="draw in drawDisplayed" :key="draw.date")
    el-card(shadow="hover")
      el-row.mb-3(type="flex" justify="center") {{ formattedDate(draw.date) }}
      el-row(type="flex" justify="center")
        div.mx-1(v-for="ball in draw.balls" :key="'ball' + draw.date + ball")
          Ball(:num="ball")
        div.mx-1(v-for="star in draw.stars" :key="'star' + draw.date + star")
          Star(:num="star")

</template>
<script>
import { DateTime } from 'luxon'

import Ball from './components/Ball'
import Star from './components/Star'

export default {
  name: 'landing',
  data () {
    return {
      drawCount: 10,
      draws: require('./data/draws_with_stats.json'),
    }
  },
  computed: {
    drawDisplayed () {
      return this.draws.slice(0, this.drawCount)
    },
  },
  methods: {
    load () {
      this.drawCount += 1
    },
    formattedDate (date) {
      return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
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
.overflow-auto {
  overflow: auto;
  height: 500px;
}
</style>
