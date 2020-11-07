<template lang="pug">
.d-flex.align-items-start.p-3.border.shadow-sm.pointer-hover(@click="rowClick(index)")
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
          th.text-center(v-for="ball in draw.balls" :key="'ball' + draw.date + ball + 'ball_nb_draws_since_last_pick'") {{ drawAgoText(draw.ball_nb_draws_since_last_pick[ball]) }}
          th.text-center(v-for="star in draw.stars" :key="'star' + draw.date + star + 'star_nb_draws_since_last_pick'") {{ drawAgoText(draw.star_nb_draws_since_last_pick[star]) }}
  div.p-2
    div(v-if="isCollapseOpen")
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    div(v-else)
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg>

</template>

<script>
import Ball from './Ball'
import Star from './Star'

import { formattedDate } from '../utils'

import $ from 'jquery'

export default {
  name: 'draw',
  props: {
    draw: Object,
    index: Number,
  },
  data () {
    return {
      isCollapseOpen: false,
    }
  },
  methods: {
    formattedDate,
    rowClick (rowIndex) {
      $('#drawStats' + rowIndex).collapse('toggle')
      this.isCollapseOpen = !this.isCollapseOpen
    },
    drawAgoText (num) {
      return `${num} ${num === 1 ? 'draw' : 'draws'} ago`
    },
  },
  mounted () {
    if (this.$props.index === 0) {
      $('#drawStats' + this.$props.index).collapse('toggle')
      this.isCollapseOpen = !this.isCollapseOpen
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
</style>