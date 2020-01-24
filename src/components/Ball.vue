<template lang="pug">
  figure.circle
    span.number

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
  height: 4rem;
  width: 4rem;
  margin: 0;
  background: radial-gradient(circle at 20px 20px, #5bacfe, #000);
}
.number {
  width: 2rem;
  height: 2rem;
  margin: 1rem;
  background: white;
  border-radius: 50%;
  position: absolute;
}
.number:before {
  content: "8";
  // display: block;
  position: absolute;
  text-align: center;
  // height: 80px;
  // width: 100px;
  left: 0.5rem;
  // margin-left: -40px;
  top: 0.5rem;
  // margin-top: -40px;
}

</style>
