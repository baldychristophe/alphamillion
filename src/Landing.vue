<template lang="pug">
div
  .infinite-list-wrapper(style="overflow:auto")
    ul(v-infinite-scroll="load")
      li(v-for="draw in drawDisplayed" :key="draw.date")
        el-card(shadow="hover")
          .clearfix(slot="header") {{ draw.date }}
          el-row(type="flex" justify="center")
            div.mx-3(v-for="ball in draw.balls" :key="'ball' + draw.date + ball")
              Ball(:num="ball")
            div.mx-3(v-for="star in draw.stars" :key="'star' + draw.date + star")
              Star(:num="star")

  //- el-row.mb-4(v-for="draw in rawData" :key="draw")
  //-   el-card(shadow="hover")
  //-     .clearfix(slot="header") {{ draw.date }}
  //-     el-row(type="flex" justify="center")
  //-       div.mx-3(v-for="ball in draw.balls" :key="ball")
  //-         Ball(:num="ball")
  //-       div.mx-3(v-for="star in draw.stars" :key="star")
  //-         Star(:num="star")

</template>
<script>
import Ball from './components/Ball'
import Star from './components/Star'

export default {
  name: 'landing',
  data () {
    return {
      drawCount: 5,
      draws: require('./data/test.json'),
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
  components: {
    Ball,
    Star,
  },
}
</script>
<style lang="scss" scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.card-body {
  font-size: x-small;
  padding: 10px;
}
.overflow-auto {
  overflow: auto;
  height: 500px;
}
.infinite-list-wrapper {
  height: 500px;
}
</style>
