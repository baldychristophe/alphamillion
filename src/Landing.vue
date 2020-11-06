<template lang="pug">
.container
  div.row.mb-5.p-2.border.shadow-sm.pointer-hover(
    v-for="(draw, index) in drawDisplayed"
    :key="draw.date"
    @click="rowClick(index)"
  )
    .d-flex.align-items-center
      div
        table.table.text-small
          thead
            tr
              th
                div(v-if="index === 0") Last draw
                div(v-else) {{ index + 1 }} draws ago
                div {{ formattedDate(draw.date) }}
              th(v-for="ball in draw.balls" :key="'ball' + draw.date + ball")
                .d-flex.justify-content-center
                  Ball(:num="ball")
              th(v-for="star in draw.stars" :key="'star' + draw.date + star")
                .d-flex.justify-content-center
                  Star(:num="star")
          tbody(class="collapse" :id="'drawStats' + index")
            tr
              th Occurrence
              th.text-center(v-for="ball in draw.balls" :key="'ball' + draw.date + ball + 'ball_occurrence'") {{ draw.ball_occurrence[ball] }}
              th.text-center(v-for="star in draw.stars" :key="'star' + draw.date + star + 'star_occurrence'") {{ draw.star_occurrence[star] }}

            tr
              th Last drawn
              th.text-center(v-for="ball in draw.balls" :key="'ball' + draw.date + ball + 'ball_nb_draws_since_last_pick'") {{ draw.ball_nb_draws_since_last_pick[ball] }} draws ago
              th.text-center(v-for="star in draw.stars" :key="'star' + draw.date + star + 'star_nb_draws_since_last_pick'") {{ draw.star_nb_draws_since_last_pick[star] }} draws ago
      div.pr-2
        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>

</template>
<script>
import Ball from './components/Ball'
import Star from './components/Star'

import { formattedDate } from './utils'

import $ from 'jquery'

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
    formattedDate,
    load () {
      this.drawCount += 1
    },
    rowClick (rowIndex) {
      $('#drawStats' + rowIndex).collapse('toggle')
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
table {
  margin-bottom: 0;
}
thead th {
  border-top: 0;
}
.table thead th {
  border-bottom: 0;
}
thead, tbody tr {
  display:table;
  width:100%;
  table-layout:fixed;
}
.collapsing {
  display: block;
  height: 0;
  overflow: hidden;

  -webkit-transition: height .35s ease;
  -moz-transition: height .35s ease;
  -o-transition: height .35s ease;
  transition: height .35s ease;
}
.draw-shadow {
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.05);
}
</style>
