<template lang="pug">
.d-flex.align-items-start.p-3.border.pointer-hover.shadow-on-hover(@click="rowClick(index)")
  div
    table.table.text-small
      thead
        tr
          th
            div(v-if="index === 0") Last draw
            div(v-else) {{ index + 1 }} draws ago
            div.text-xsmall.text-secondary {{ formattedDate(draw.date) }}
          th(v-for="ball in draw.balls" :key="'ball' + draw.date + ball")
            .d-flex.justify-content-center
              Ball(:num="ball")
          th(v-for="star in draw.stars" :key="'star' + draw.date + star")
            .d-flex.justify-content-center
              Star(:num="star")
      tbody(class="collapse" :id="'drawStats' + index")
        tr
          th
            span Occurrence
            span.ml-1(:id="'occurrence-tooltip-' + index") ⓘ
            <b-tooltip :target="'occurrence-tooltip-' + index" triggers="hover">
              .text-justify.text-small
                p The number of time each balls and stars was drawn in the last {{ drawsMetadata.number_of_draws }} draws
                p
                  | Balls have an expected value of {{ draw.expected_ball_occurrence }} occurrences and
                  | stars have an expected value of {{ draw.expected_star_occurrence }} occurrences.
            </b-tooltip>
          td.text-center(
            v-for="ball in draw.balls"
            :key="'ball' + draw.date + ball + 'ball_occurrence'"
          )
            div.d-flex.justify-content-center
              div {{ draw.ball_occurrence[ball] }}
              div.align-middle.ml-1
                span.dot(:class="backgroundColorGradientOccurrence(draw.ball_occurrence[ball], draw.expected_ball_occurrence)")

          td.text-center(
            v-for="star in draw.stars"
            :key="'star' + draw.date + star + 'star_occurrence'"
          )
            div.d-flex.justify-content-center
              div {{ draw.star_occurrence[star] }}
              div.align-middle.ml-1
                span.dot(:class="backgroundColorGradientOccurrence(draw.star_occurrence[star], draw.expected_star_occurrence)")

        tr
          th
            span Last drawn
            span.ml-1(:id="'last-draws-tooltip-' + index") ⓘ
            <b-tooltip :target="'last-draws-tooltip-' + index" triggers="hover">
              .text-justify.text-small
                p The number of draw since the ball or star was last drawn.
                p
                  | On average, balls should be drawn every {{ drawsMetadata.expected_ball_draw_gap }}
                  | and stars should be drawn every {{ drawsMetadata.expected_star_draw_gap }}.
            </b-tooltip>
          td(
            v-for="ball in draw.balls"
            :key="'ball' + draw.date + ball + 'ball_nb_draws_since_last_pick'"
          )
            div.d-flex.justify-content-center
              div {{ drawAgoText(draw.ball_nb_draws_since_last_pick[ball]) }}
              div.align-middle.ml-1
                span.dot(:class="backgroundColorGradientDrawGap(draw.ball_nb_draws_since_last_pick[ball], drawsMetadata.expected_ball_draw_gap)")

          td(
            v-for="star in draw.stars"
            :key="'star' + draw.date + star + 'star_nb_draws_since_last_pick'"
          )
            div.d-flex.justify-content-center
              div {{ drawAgoText(draw.star_nb_draws_since_last_pick[star]) }}
              div.align-middle.ml-1
                span.dot(:class="backgroundColorGradientDrawGap(draw.star_nb_draws_since_last_pick[star], drawsMetadata.expected_star_draw_gap)")

        tr
          th
            div
              | Frequency
              span.ml-1(:id="'frequency-tooltip-' + index") ⓘ
            div.text-xsmall.text-secondary (in last 100 draws)
            <b-tooltip :target="'frequency-tooltip-' + index" triggers="hover">
              .text-justify.text-small
                p Heatmap of the last 100 draws where filled dots represent a draw when the ball or star was drawn.
                p
                  | The draws are ordered from left to right and from top to bottom, each line representing 10 draws.
            </b-tooltip>
          td.text-center(v-for="ball in draw.balls" :key="'ball' + draw.date + ball + 'ball_heat_map'")
            DrawHeatmap(:heatmapData="balls[ball].last_100_heat_map" :isStar="false")

          th.text-center(v-for="star in draw.stars" :key="'star' + draw.date + star + 'star_heat_map'")
            DrawHeatmap(:heatmapData="stars[star].last_100_heat_map" :isStar="true")
  div.p-2
    div(v-if="isCollapseOpen")
      chevronDown
    div(v-else)
      chevronUp

</template>

<script>
import Ball from './Ball'
import Star from './Star'
import DrawHeatmap from './DrawHeatmap'

import {
  formattedDate,
  drawAgoText,
  backgroundColorGradientOccurrence,
  backgroundColorGradientDrawGap,
} from '../utils'

import $ from 'jquery'

import chevronDown from '@/assets/icons/chevronDown.svg'
import chevronUp from '@/assets/icons/chevronUp.svg'

export default {
  name: 'draw',
  props: {
    draw: Object,
    index: Number,
  },
  data () {
    return {
      isCollapseOpen: false,
      balls: require('../data/balls_with_stats.json'),
      stars: require('../data/stars_with_stats.json'),
      drawsMetadata: require('../data/draws_metadata.json'),
    }
  },
  methods: {
    formattedDate,
    drawAgoText,
    backgroundColorGradientOccurrence,
    backgroundColorGradientDrawGap,
    rowClick (rowIndex) {
      $('#drawStats' + rowIndex).collapse('toggle')
      this.isCollapseOpen = !this.isCollapseOpen
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
    DrawHeatmap,
    chevronDown,
    chevronUp,
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
table td, table th {
  vertical-align: middle;
}
.dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
}
</style>
