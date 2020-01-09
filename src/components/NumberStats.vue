<template lang="pug">
  el-card.num-block
    div {{ num }}
</template>

<script>
export default {
  props: {
    num: Number,
  },
}
</script>

<style lang="scss" scoped>
</style>
