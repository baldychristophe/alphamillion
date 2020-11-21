<template lang="pug">
div
  .row.mb-5
    .col.d-flex.flex-column.text-center
      div.text-small First draw*
      div {{ formattedDate(drawsMetadata.first_draw) }}
    .col.d-flex.flex-column.text-center
      div.text-small Last draw
      div {{ formattedDate(drawsMetadata.last_draw) }}
    .col.d-flex.flex-column.text-center
      div.text-small Draws included
      div {{ drawsMetadata.number_of_draws }}
  .row.mb-3
    .col.text-xsmall.text-secondary *In September 2016 the Lucky Star ball pool was increased from 11 to 12

</template>
<script>
import { formattedDate } from '../utils'

export default {
  name: 'PageHeader',
  data () {
    return {
      drawsMetadata: require('../data/draws_metadata.json'),
    }
  },
  methods: {
    formattedDate,
  },
}
</script>
<style lang="scss" scoped>

</style>
