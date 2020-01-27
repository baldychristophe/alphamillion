<template lang="pug">
  .cercle
    .numero {{ num }}

</template>
<script>
export default {
  props: {
    num: Number,
  },
}
</script>
<style lang="scss" scoped>
.cercle {
  width: 2.3rem;
  height: 2.3rem;
  border: 3px solid $alpha-secondary-color;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: auto;
}
.numero {
  color: $alpha-secondary-color;
  font-size: 1.3rem;
  font-family: monospace;
  font-weight: 700;
}

</style>
