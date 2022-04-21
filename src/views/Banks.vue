<template lang="pug">
  .banks
    .container
      .banks__inner
        h2(class="title title--banks") List of Banks
        BankLists(:bank_item='banks')
        button(class="banks__button")
          <router-link class="banks__button-link" to=/anketabank>Create Bank</router-link>
</template>

<script>
import BankLists from '@/components/BankLists.vue'
import { mapState } from 'vuex'
export default {
  name: 'Banks',
  components: {
    BankLists
  },
  computed: {
    ...mapState([
      'banks'
    ])
  }
}
</script>

<style scoped lang="sass">
.banks
  color: black
  padding-top: 30px
  &__button
    border-radius: 18px
    margin-top: 25px
    &-link
      text-decoration: none
      font-size: 18px
      color: #fff
.title
  &--banks
    text-align: center
</style>
