<template lang="pug">
div
  el-row(:gutter="20" v-for="draw in 10" :key="draw")
    el-col
      el-card(shadow="hover")
        .clearfix(slot="header")
            Ball(num="draw")
</template>
<script>
export default {
  name: 'landing',
}
</script>
<style lang="scss" scoped>
</style>
