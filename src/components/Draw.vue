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
          th
            span Occurrence
            span.ml-1(v-tooltip="'This is an information tooltip'") ⓘ
          td.text-center(
            v-for="ball in draw.balls"
            :key="'ball' + draw.date + ball + 'ball_occurrence'"
          )
            div.d-flex.justify-content-center
              div {{ draw.ball_occurrence[ball] }}
              div.align-middle.ml-1
                span.dot(:class="backgroundColorGradientOccurrence(draw.ball_occurrence[ball], drawsMetadata.expected_ball_occurrence)")

          td.text-center(
            v-for="star in draw.stars"
            :key="'star' + draw.date + star + 'star_occurrence'"
          )
            div.d-flex.justify-content-center
              div {{ draw.star_occurrence[star] }}
              div.align-middle.ml-1
                span.dot(:class="backgroundColorGradientOccurrence(draw.star_occurrence[star], drawsMetadata.expected_star_occurrence)")

        tr
          th
            span Last drawn
            span.ml-1(v-tooltip="'This is an information tooltip'") ⓘ
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
            spen Frequency
            span.text-xsmall.ml-1 (in last 100 draws)
            span.ml-1(v-tooltip.html="'<p>This is a paragraph</p><p>This is an information tooltip</p>'") ⓘ
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

import { formattedDate } from '../utils'

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
    rowClick (rowIndex) {
      $('#drawStats' + rowIndex).collapse('toggle')
      this.isCollapseOpen = !this.isCollapseOpen
    },
    drawAgoText (num) {
      return `${num} ${num === 1 ? 'draw' : 'draws'} ago`
    },
    backgroundColorGradientOccurrence (num, expected) {
      const diff = num / expected
      if (diff === 1) {
        return ''
      } else if (diff > 1 && diff <= 1.05) {
        return 'bg-green-3'
      } else if (diff > 1.05 && diff <= 1.10) {
        return 'bg-green-2'
      } else if (diff > 1.10 && diff <= 1.20) {
        return 'bg-green-1'
      } else if (diff > 1.20) {
        return 'bg-green-0'
      } else if (diff < 1 && diff >= 0.95) {
        return 'bg-red-3'
      } else if (diff < 0.95 && diff >= 0.90) {
        return 'bg-red-0'
      } else if (diff < 0.90 && diff >= 0.80) {
        return 'bg-red-0'
      } else if (diff < 0.80) {
        return 'bg-red-0'
      }
      return ''
    },
    backgroundColorGradientDrawGap (num, expected) {
      const diff = num - expected
      if (diff === 0) {
        return ''
      } else if (diff > 0 && diff <= 5) {
        return 'bg-green-3'
      } else if (diff > 5 && diff <= 10) {
        return 'bg-green-2'
      } else if (diff > 10 && diff <= 20) {
        return 'bg-green-1'
      } else if (diff > 20) {
        return 'bg-green-0'
      } else if (diff < 0 && diff >= -2) {
        return 'bg-red-3'
      } else if (diff < -2 && diff >= -5) {
        return 'bg-red-2'
      } else if (diff < -5 && diff >= -8) {
        return 'bg-red-1'
      } else if (diff < -8) {
        return 'bg-red-0'
      }
      return ''
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
