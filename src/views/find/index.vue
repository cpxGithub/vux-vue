<template>
  <section class="find-container">
    <div>
      <img class="top" src="https://fuss10.elemecdn.com/4/5c/389dc2182920b6da9ba46948604d3gif.gif" alt="">
    </div>
    <div></div>
    <footer-menu></footer-menu>
  </section>
</template>
<script>
import footerMenu from 'components/common/footerMenu'
export default {
  data () {
    return {}
  },
  components: {
    footerMenu
  }
}
</script>
<style lang="less" scoped>
.find-container {
  .top {
    width: 100%;
  }
}
</style>
