<template lang="pug">
.p-4.border.shadow-sm.pointer-hover.text-small.w-100(@click="rowClick(index)")
  .d-flex.align-items-center
    div.flex-fill(v-if="index === 0") Last draw
    div.flex-fill(v-else) {{ index + 1 }} draws ago
    div.flex-fill {{ formattedDate(draw.date) }}
    div.flex-fill(v-for="ball in draw.balls" :key="'ball' + draw.date + ball")
      .d-flex.justify-content-center
        Ball(:num="ball")
    div.flex-fill(v-for="star in draw.stars" :key="'star' + draw.date + star")
      .d-flex.justify-content-center
        Star(:num="star")

    div.flex-fill
      div.float-right(v-if="!isOpen")
        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
        </svg>
      div.float-right(v-else)
        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>

  div(class="collapse" :id="'drawStats' + index")
    div.d-flex.align-items-center.mt-4.border-top.py-3
      div.flex-fill Occurrence
      div.flex-fill.text-center(v-for="ball in draw.balls" :key="'ball' + draw.date + ball + 'ball_occurrence'") {{ draw.ball_occurrence[ball] }}
      div.flex-fill.text-center(v-for="star in draw.stars" :key="'star' + draw.date + star + 'star_occurrence'") {{ draw.star_occurrence[star] }}

    div.d-flex.align-items-center.border-top.py-3
      div.flex-fill Last drawn
      div.flex-fill.text-center(v-for="ball in draw.balls" :key="'ball' + draw.date + ball + 'ball_nb_draws_since_last_pick'") {{ draw.ball_nb_draws_since_last_pick[ball] }} draws ago
      div.flex-fill.text-center(v-for="star in draw.stars" :key="'star' + draw.date + star + 'star_nb_draws_since_last_pick'") {{ draw.star_nb_draws_since_last_pick[star] }} draws ago

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
      isOpen: false,
    }
  },
  methods: {
    formattedDate,
    rowClick (rowIndex) {
      $('#drawStats' + rowIndex).collapse('toggle')
      this.isOpen = !this.isOpen
    },
  },
  mounted () {
    if (this.$props.index === 0) {
      $('#drawStats' + this.$props.index).collapse('toggle')
      this.isOpen = !this.isOpen
    }
  },
  components: {
    Ball,
    Star,
  },
}
</script>
<style lang="scss" scoped>
// table {
//   margin-bottom: 0;
// }
// thead th {
//   border-top: 0;
// }
// .table thead th {
//   border-bottom: 0;
// }
// thead, tbody tr {
//   display:table;
//   width:100%;
//   table-layout:fixed;
// }
// .collapsing {
//   display: block;
//   height: 0;
//   overflow: hidden;

//   -webkit-transition: height .35s ease;
//   -moz-transition: height .35s ease;
//   -o-transition: height .35s ease;
//   transition: height .35s ease;
// }
</style>
