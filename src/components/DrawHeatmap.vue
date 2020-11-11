<template lang="pug">
div.d-flex.justify-content-center
  table.heatmap
    tbody
      tr.heatmap-row(v-for="row in 10" :key="'heatmap-row-' + row")
        td.heatmap-cell(v-for="col in 10" :key="'heatmap-col-' + col")
          div.border(:class="{'heatmap-activate-ball': heatmapData[((row - 1) * 10) + (col -1)] === 1 && !isStar, 'heatmap-activate-star': heatmapData[((row - 1) * 10) + (col -1)] === 1 && isStar }")
</template>
<script>
export default {
  name: 'DrawHeatmap',
  props: {
    heatmapData: Array,
    isStar: Boolean,
  },
}
</script>
<style lang="scss" scoped>
table.heatmap {
  table-layout:fixed;
}
table.heatmap td {
  overflow:hidden;
}
tr.heatmap-row {
  margin-bottom: 1px;
}
td.heatmap-cell {
  padding: 0;
  margin-bottom: 10px;
  border-top: 0;
}
.heatmap-cell div {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin: auto;
}
.heatmap-activate-ball {
  background-color: $alpha-secondary-color;
}
.heatmap-activate-star {
  background-color: rgba($color: #ffcc00, $alpha: 1.0);
}
</style>
