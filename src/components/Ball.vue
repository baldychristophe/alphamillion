<template lang="pug">
  figure.circle

</template>
<script>
export default {
  props: {
    num: Number,
  },
}
</script>
<style lang="scss" scoped>
.circle {
  display: block;
  background: blue;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  margin: 0;
  background: radial-gradient(circle at 100px 100px, #5cabff, #000);
}

</style>
