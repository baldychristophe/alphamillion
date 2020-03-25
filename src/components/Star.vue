<template>

<div class="star-container">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 48">
    <title>Star</title>
    <path fill="#fffc4f" stroke="#c2be00" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
  </svg>
  <span>{{ num }}</span>
</div>

</template>
<script>
export default {
  name: 'star',
  props: {
    num: String,
  },
}
</script>
<style lang="scss" scoped>
.star-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.star-drawing {
  height: 2rem;
  margin: auto;
}
</style>
