<template lang="pug">
  div.p-3.border.pointer-hover.shadow-on-hover
    div.d-flex.justify-content-center.mb-3
      Ball(:num="num")
    div.text-small.container
      div.row.p-2.align-items-center
        div.col.py-1.text-right.font-weight-bold
          span Occurrence
          span.ml-1.text-xsmall(:id="'occurrence-tooltip-' + num") ⓘ
          <b-tooltip :target="'occurrence-tooltip-' + num" triggers="hover">
            .text-justify.text-small
              p The number of time the ball was drawn in the last 433 draws.
              p
                | Balls have an expected value of 43 occurrences.
          </b-tooltip>
        div.col.py-1
          div.d-flex.justify-content-start
            div  {{ balls[num].occurrence }}
            div.align-middle.ml-1
              span.dot(:class="backgroundColorGradientOccurrence(balls[num].occurrence, 43)")

      div.row.p-2.border-top.align-items-center
        div.col.py-1.text-right.font-weight-bold
          span Last drawn
          span.ml-1.text-xsmall(:id="'last-draws-tooltip-' + num") ⓘ
          <b-tooltip :target="'last-draws-tooltip-' + num" triggers="hover">
            .text-justify.text-small
              p The number of draw since the ball was last drawn.
              p On average, balls should be drawn every 10 draws.
          </b-tooltip>
        div.col.py-1
          div.d-flex.justify-content-start
              div  {{ drawAgoText(balls[num].nb_draws_since_last_pick) }}
              div.align-middle.ml-1
                span.dot(:class="backgroundColorGradientDrawGap(balls[num].nb_draws_since_last_pick, 10)")

      div.row.p-2.border-top.align-items-center
        div.col.py-1.text-right.font-weight-bold
          div
            | Frequency
            span.ml-1.text-xsmall(:id="'frequency-tooltip-' + num") ⓘ
          div.text-xsmall.text-secondary (in last 100 draws)
          <b-tooltip :target="'frequency-tooltip-' + num" triggers="hover">
            .text-justify.text-small
              p Heatmap of the last 100 draws where filled dots represent a draw when the ball was drawn.
              p
                | The draws are ordered from left to right and from top to bottom, each line representing 10 draws.
          </b-tooltip>
        div.col.py-1
          div.d-flex.justify-content-start
            DrawHeatmap(:heatmapData="balls[num].last_100_heat_map" :isStar="false")

</template>

<script>
import Ball from './Ball'
import DrawHeatmap from './DrawHeatmap'
import { drawAgoText, backgroundColorGradientOccurrence, backgroundColorGradientDrawGap } from '../utils'

export default {
  props: {
    num: String,
  },
  data () {
    return {
      balls: require('../data/balls_with_stats.json'),
    }
  },
  methods: {
    drawAgoText,
    backgroundColorGradientOccurrence,
    backgroundColorGradientDrawGap,
  },
  components: {
    Ball,
    DrawHeatmap,
  },
}
</script>

<style lang="scss" scoped>
.dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
}
</style>
