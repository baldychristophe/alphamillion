<template lang="pug">
el-menu(mode="horizontal" router="true" :default-active="activeIndex")
  el-menu-item.menu-item(index="landing" :route="{ name: 'landing' }") Draws
  el-menu-item.menu-item(index="balls" :route="{ name: 'balls' }") Balls
  el-menu-item.menu-item(index="stars" :route="{ name: 'stars' }") Stars

</template>
<script>
export default {
  name: 'NavBar',
  computed: {
    activeIndex () {
      return this.$route.name
    },
  },
}
</script>
<style lang="scss" scoped>
.menu-item {
  font-size: 1rem;
}
</style>
