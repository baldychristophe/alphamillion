<template lang="pug">
el-container#app
  .logo-bg
    .ml-4.my-2.d-flex.align-items-center
      h1.logo-display.text-xxlarge Alphamillions
      h2#slogan.logo-display.ml-5.text-medium Statistics for Euromillions

  el-header.mb-4
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
.logo-display {
  font-family: Neogrey, Arial, sans-serif;
  color: white;
}
#slogan {
  margin-bottom: -4px;
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
