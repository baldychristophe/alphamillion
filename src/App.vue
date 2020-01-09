<template lang="pug">
  el-container#app
    el-header Header
    el-main
      el-row(:type="flex" :justify="center" :align="center" :gutter="20")
        el-col.num-stat-container(:sm="4" :xs="8" v-for="num in 50" :key="num")
          NumberStats(:num="num")
    el-footer.footer Footer

</template>

<script>
import NumberStats from './components/NumberStats.vue'

export default {
  name: 'app',
  components: {
    NumberStats,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.footer {
  border: solid 1px;
}

.num-stat-container {
  margin-bottom: 20px;
}
</style>
