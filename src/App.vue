<template lang="pug">
  el-container#app
    div Alphamillion
    el-menu(mode="horizontal" :default-active="activeIndex")
      el-menu-item(index="1") Ball Stats
      el-menu-item(index="2") Star Stats
    el-main.main
      el-row(:type="flex" :justify="center" :align="center" :gutter="20")
        el-col.num-stat-container(:sm="4" :xs="8" v-for="num in 50" :key="num")
          NumberStats(:num="num")
    el-footer.footer Footer

</template>

<script>
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
  color: #2c3e50;
}

.footer {
  border: solid 1px;
  text-align: center;
}

.main {
  max-width: 1140px;
  margin:auto;
}

.num-stat-container {
  margin-bottom: 20px;
}
</style>
