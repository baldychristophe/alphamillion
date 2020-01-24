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
  width: 3rem;
  height: 3rem;
  border: 4px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.numero {
  color: blue;
  font-size: 2rem;
}

</style>
