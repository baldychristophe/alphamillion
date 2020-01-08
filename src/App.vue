<template lang="pug">
  #app
    el-row.flex-container(type="flex")
      el-col(:span="6" v-for="num in 50" :key="num") {{ num }}
        //- NumberStats(:num="num")

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex-container {
  flex-wrap: wrap;
}
</style>
