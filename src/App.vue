<template lang="pug">
el-container#app
  .logo-bg
    .ml-4.my-2.d-flex.align-items-center
      h1.logo-display.text-xxlarge Alphamillions
      h2#slogan.logo-display.ml-5.text-medium Statistics for millionaires

  el-header.mb-4
    NavBar

  el-main.main
    router-view

  el-footer.footer.text-small.text-secondary.d-flex.justify-content-center.align-items-center
    div © Copyright Alphamillion, 2020

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
  max-width: $alpha-max-width;
  margin: auto;
}
.footer {
  background-color:rgba(242, 242, 242, 0.4);
}
</style>
