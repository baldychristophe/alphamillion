<template lang="pug">
  el-container#app

    NavBar

    el-main.main
      el-row(:gutter="20")
        el-col.num-stat-container(:sm="4" :xs="8" v-for="num in 6" :key="num")
          NumberStats(:num="num")
    el-footer.footer Footer

</template>

<script>
import NavBar from './components/NavBar'
import NumberStats from './components/NumberStats.vue'

export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1',
    }
  },
  components: {
    NumberStats,
    NavBar,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.footer {
  border: solid 1px;
  text-align: center;
}

.main {
  max-width: $alpha-max-width;
  margin:auto;
}

.num-stat-container {
  margin-bottom: 20px;
}
</style>
