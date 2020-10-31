<template lang="pug">
.container
  div(v-for="(draw, index) in drawDisplayed" :key="draw.date")
    .row.text-small(@mouseover="rowMouseover(index)")
      .col.col-2.text-right.flex.align-items-center.align-middle
        div(v-if="index === 0") Last draw
        div(v-else) {{ index + 1 }} draws ago
        div {{ formattedDate(draw.date) }}
      .col.col-10
        el-row(type="flex" justify="center")
          div.mx-1(v-for="ball in draw.balls" :key="'ball' + draw.date + ball")
            Ball(:num="ball")
          div.mx-1(v-for="star in draw.stars" :key="'star' + draw.date + star")
            Star(:num="star")
        el-row(type="flex" justify="center" v-if="index === visibleRow")
          div stats

    .row.justify-content-end.my-4
      .col.col-10
        hr.w-90

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
      visibleRow: 0,
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
    rowMouseover (rowIndex) {
      this.visibleRow = rowIndex
    },
  },
  mounted () {
    window.onscroll = () => {
      if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 50) {
        this.drawCount += 10
      }
    }
  },
  components: {
    Ball,
    Star,
  },
}
</script>
<style lang="scss" scoped>

</style>
