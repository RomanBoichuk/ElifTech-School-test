<template lang="pug">
  <div id="app">
    Header
    <router-view/>
  </div>
</template>

<script>
import Header from '@/views/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="sass">

*
  padding: 0
  margin: 0
  box-sizing: border-box
html,body
  overflow: hidden
  height: 100vh
body
  position: fixed
  bottom: 0
  right: 0
  left: 0
  font-family: 'Source Sans Pro', sans-serif
  font-size: 18px
  line-height: 24px
  font-weight: 400
.title
  font-size: 45px
  line-height: 46px
  font-weight: 600
.container
  max-width: 1800px
  background: #A9A9A9
  margin-left: auto
  margin-right: auto
  padding: 15px
button
  border: none
  text-transform: uppercase
  font-size: 18px
  padding: 15px 40px
  text-align: center
  color: #fff
  background-color: #26a69a
  letter-spacing: .5px
</style>
