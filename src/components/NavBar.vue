<template lang="pug">
.navbar-container
  .logo-bg
    .logo-text-box
      h1#logo Alphamillions
  .menu-container
    el-menu.menu-content(mode="horizontal" router=true :default-active="activeIndex`")
      el-menu-item.menu-item(index="landing" :route="{ name: 'landing' }") Last draws
      el-menu-item.menu-item(index="2") Ball Stats
      el-menu-item.menu-item(index="3") Star Stats

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
.logo-bg {
  background-color: $alpha-primary-color;
}
#logo {
  font-family: Neogrey, Arial, sans-serif;
  color: white;
  padding: 10px 20px 10px 20px;
  margin: 0;
  font-size: 2rem;
}
.logo-text-box {
  max-width: $alpha-max-width;
  margin: auto;
}
.menu-content {
  margin: auto;
  max-width: $alpha-max-width;

  .menu-item {
    font-size: 1rem;
  }
}
</style>
