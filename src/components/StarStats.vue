<template lang="pug">
  div.p-3.border.pointer-hover.shadow-on-hover
    div.d-flex.justify-content-center.mb-3
      Star(:num="num")
    div.text-small.container
      div.row.p-2.align-items-center
        div.col.py-1.text-right.font-weight-bold
          span Occurrence
          span.ml-1(:id="'occurrence-tooltip-' + num") ⓘ
          <b-tooltip :target="'occurrence-tooltip-' + num" triggers="hover">
            .text-justify.text-small
              p The number of time the star was drawn in the last 433 draws.
              p
                | Stars have an expected value of 72 occurrences.
          </b-tooltip>
        div.col.py-1
          div.d-flex.justify-content-start
            div  {{ stars[num].occurrence }}
            div.align-middle.ml-1
              span.dot(:class="backgroundColorGradientOccurrence(stars[num].occurrence, 72)")

      div.row.p-2.border-top.align-items-center
        div.col.py-1.text-right.font-weight-bold
          span Last drawn
          span.ml-1(:id="'last-draws-tooltip-' + num") ⓘ
          <b-tooltip :target="'last-draws-tooltip-' + num" triggers="hover">
            .text-justify.text-small
              p The number of draw since the star was last drawn.
              p On average, stars should be drawn every 6 draws.
          </b-tooltip>
        div.col.py-1
          div.d-flex.justify-content-start
              div  {{ drawAgoText(stars[num].nb_draws_since_last_pick) }}
              div.align-middle.ml-1
                span.dot(:class="backgroundColorGradientDrawGap(stars[num].nb_draws_since_last_pick, 6)")

      div.row.p-2.border-top.align-items-center
        div.col.py-1.text-right.font-weight-bold
          div
            | Frequency
            span.ml-1(:id="'frequency-tooltip-' + num") ⓘ
          div.text-xsmall.text-secondary (in last 100 draws)
          <b-tooltip :target="'frequency-tooltip-' + num" triggers="hover">
            .text-justify.text-small
              p Heatmap of the last 100 draws where filled dots represent a draw when the star was drawn.
              p
                | The draws are ordered from left to right and from top to bottom, each line representing 10 draws.
          </b-tooltip>
        div.col.py-1
          div.d-flex.justify-content-start
            DrawHeatmap(:heatmapData="stars[num].last_100_heat_map" :isStar="true")

</template>

<script>
import Star from './Star'
import DrawHeatmap from './DrawHeatmap'
import { drawAgoText, backgroundColorGradientOccurrence, backgroundColorGradientDrawGap } from '../utils'

export default {
  props: {
    num: String,
  },
  data () {
    return {
      stars: require('../data/stars_with_stats.json'),
    }
  },
  methods: {
    drawAgoText,
    backgroundColorGradientOccurrence,
    backgroundColorGradientDrawGap,
  },
  components: {
    Star,
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
