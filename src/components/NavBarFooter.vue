<template lang="pug">
  .navbar
    nav(class="menu")
      ul(class="menu__lists")
        li(class="menu__lists-item")
          <router-link class="menu__link" to='/banks'>BANKs</router-link>
        li(class="menu__lists-item")
          <router-link class="menu__link" to='/loanapplication'>CREDIT</router-link>
</template>

<script>
export default {
  name: 'NavBarFooter'
}
</script>

<style scoped lang="sass">
.menu
  &__lists
    display: flex
    list-style: none
  &__lists-item
    margin-right: 10px
    border-left: 1px solid #c4c4c4
  &__link
    text-decoration: none
    color: white
    font-size: 29px
    line-height: 30px
    font-weight: 600
    padding: 10px 5px 10px
    transition: background-color .3s
    &:hover
      background-color: rgba(0,0,0,0.1)
      font-size: 30px
</style>
