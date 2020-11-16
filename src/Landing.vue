<template lang="pug">
.container
  .row.mb-5
    .col.d-flex.flex-column.text-center
      div.text-small First draw*
      div {{ formattedDate(drawsMetadata.first_draw) }}
    .col.d-flex.flex-column.text-center
      div.text-small Last draw
      div {{ formattedDate(drawsMetadata.last_draw) }}
    .col.d-flex.flex-column.text-center
      div.text-small Draws included
      div {{ drawsMetadata.number_of_draws }}

  .row.mb-3
    .col.text-xsmall.text-secondary *In September 2016 the Lucky Star ball pool was increased from 11 to 12
  .row.mb-5(v-for="(draw, index) in drawDisplayed" :key="draw.date")
    Draw(:draw="draw" :index="index")

</template>
<script>
import Draw from './components/Draw'
import { formattedDate } from './utils'

export default {
  name: 'landing',
  data () {
    return {
      drawCount: 10,
      draws: require('./data/draws_with_stats.json'),
      drawsMetadata: require('./data/draws_metadata.json'),
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
  },
  mounted () {
    window.onscroll = () => {
      if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 50) {
        this.drawCount += 10
      }
    }
  },
  components: {
    Draw,
  },
}
</script>
<style lang="scss" scoped>
</style>
