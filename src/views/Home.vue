<template lang="pug">
  <div class="home">
    h1(class="title title--home") Сторінка реєстрації
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="sass">
.home
  padding-top: 50px
  position: relative
  height: 100vh
.title
  &--home
    font-size: 50px
    text-align: center
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
