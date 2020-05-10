<template lang="pug">
el-container#app
  .logo-bg
    .logo-text-box
      h1#logo Alphamillions

  el-header
    NavBar

  el-main.main
    router-view

  el-footer.footer Footer

</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
}
.logo-bg {
  background-color: $alpha-primary-color;
}
.logo-text-box {
  margin: auto;
}
#logo {
  font-family: Neogrey, Arial, sans-serif;
  color: white;
  padding: 10px 20px 10px 20px;
  margin: 0;
  font-size: 2rem;
}
.main {
  width: $alpha-max-width;
  margin: auto;
}
.footer {
  border: solid 1px;
  text-align: center;
}
</style>
