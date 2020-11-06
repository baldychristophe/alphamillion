<template lang="pug">
.container
  div.row.mb-5.p-2.border.shadow-sm.pointer-hover(
    v-for="(draw, index) in drawDisplayed"
    :key="draw.date"
  )
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
.draw-shadow {
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.05);
}
</style>
