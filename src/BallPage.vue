<template lang="pug">
.container
  PageHeader

  .row
    .col-12.col-md-4.mb-4(v-for="num in 50" :key="num")
      NumberStats(:num="String(num)")

</template>
<script>
import NumberStats from './components/NumberStats'
import PageHeader from './components/PageHeader'

export default {
  name: 'balls',
  components: {
    NumberStats,
    PageHeader,
  },
}
</script>
<style lang="scss" scoped>
</style>
