<template>

<div class="star-container">
  <One v-if="num == 1" />
  <Two v-else-if="num == 2" />
  <Three v-else-if="num == 3" />
  <Four v-else-if="num == 4" />
  <Five v-else-if="num == 5" />
  <Six v-else-if="num == 6" />
  <Seven v-else-if="num == 7" />
  <Eight v-else-if="num == 8" />
  <Nine v-else-if="num == 9" />
  <Ten v-else-if="num == 10" />
  <Eleven v-else-if="num == 11" />
  <Twelve v-else-if="num == 12" />
</div>

</template>
<script>
/* eslint-disable */
import One from '@/assets/stars/one.svg'
import Two from '@/assets/stars/two.svg'
import Three from '@/assets/stars/three.svg'
import Four from '@/assets/stars/four.svg'
import Five from '@/assets/stars/five.svg'
import Six from '@/assets/stars/six.svg'
import Seven from '@/assets/stars/seven.svg'
import Eight from '@/assets/stars/eight.svg'
import Nine from '@/assets/stars/nine.svg'
import Ten from '@/assets/stars/ten.svg'
import Eleven from '@/assets/stars/eleven.svg'
import Twelve from '@/assets/stars/twelve.svg'

export default {
  name: 'star',
  props: {
    num: String,
  },
  components: {
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
  },
}
/* eslint-enable */
</script>
<style lang="scss" scoped>
.star-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 38px;
}
</style>
