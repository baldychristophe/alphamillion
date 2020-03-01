<template lang="pug">
el-main.main
  el-row(:gutter="20")
    el-col.num-stat-container(:sm="6" :xs="8" v-for="num in 50" :key="num")
      NumberStats(:num="num")
</template>
<script>
import NumberStats from './components/NumberStats.vue'

export default {
  name: 'balls',
  components: {
    NumberStats,
  },
}
</script>
<style lang="scss" scoped>
.main {
  max-width: $alpha-max-width;
  margin:auto;
}

.num-stat-container {
  margin-bottom: 20px;
}
</style>
