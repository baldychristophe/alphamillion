<template lang="pug">
  el-container#app

    NavBar

    router-view

    el-footer.footer Footer

</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1',
    }
  },
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
.footer {
  border: solid 1px;
  text-align: center;
}
</style>
