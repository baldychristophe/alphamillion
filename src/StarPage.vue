<template lang="pug">
.container
  PageHeader

  .row
    .col-12.col-md-4.mb-4(v-for="num in 12" :key="num")
      StarStats(:num="String(num)")

</template>
<script>
import StarStats from './components/StarStats'
import PageHeader from './components/PageHeader'

export default {
  name: 'balls',
  components: {
    StarStats,
    PageHeader,
  },
}
</script>
<style lang="scss" scoped>
</style>
