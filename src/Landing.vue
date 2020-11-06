<template lang="pug">
.container
  .row.mb-5(v-for="(draw, index) in drawDisplayed" :key="draw.date")
    Draw(:draw="draw" :index="index")

</template>
<script>
import Draw from './components/Draw'

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
