<template lang="pug">
.navbar-container
  .logo-container
    h1#logo Alphamillion
  .menu-container
    el-menu.menu-content(mode="horizontal" :default-active="activeIndex")
      el-menu-item(index="1") Ball Stats
      el-menu-item(index="2") Star Stats

</template>
<script>
export default {
  name: 'NavBar',
}
</script>
<style lang="scss" scoped>
.logo-container {
  background-color: blue;
}
#logo {
  font-family: Neogrey, Arial, sans-serif;
  color: white;
  margin: auto;
  max-width: $alpha-max-width;
  padding: 0 0 0 20px;
}
.menu-content {
  margin: auto;
  max-width: $alpha-max-width;
}
</style>
