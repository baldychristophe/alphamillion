<template lang="pug">
  .cercle
    .numero {{ num }}

</template>
<script>
export default {
  props: {
    num: String,
  },
}
</script>
<style lang="scss" scoped>
.cercle {
  width: 38px;
  height: 38px;
  border: 3px solid $alpha-secondary-color;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: auto;
}
.numero {
  color: $alpha-secondary-color;
  font-size: 1rem;
  font-family: monospace;
  font-weight: 700;
}

</style>
