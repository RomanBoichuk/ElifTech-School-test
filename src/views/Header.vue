<template lang="pug">
  .header
    h1(class="title") ElifTech Bank
    NavBarFooter
</template>

<script>
import NavBarFooter from '@/components/NavBarFooter'

export default {
  name: 'Header',
  components: {
    NavBarFooter
  }
}
</script>

<style lang="sass">

.header
  background: #808080
  padding: 30px 25px
  display: flex
  justify-content: space-between
  align-items: center
</style>
