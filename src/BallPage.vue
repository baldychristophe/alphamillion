<template lang="pug">
.container
  PageHeader

  .row
    .col-12.col-lg-4.col-md-6.mb-4(v-for="num in 50" :key="num")
      BallStats(:num="String(num)")

</template>
<script>
import BallStats from './components/BallStats'
import PageHeader from './components/PageHeader'

export default {
  name: 'balls',
  components: {
    BallStats,
    PageHeader,
  },
}
</script>
<style lang="scss" scoped>
</style>
