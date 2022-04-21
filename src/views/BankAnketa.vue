<template lang="pug">
  .anketa-bank
    .container
        h1(class="title title--anketa-bank" @submit.prevent) BankAnketa
        .anketa-bank__inner
          form(class="anketa-bank__form")
            input(class="anketa-bank__input" type='text' placeholder="bank name" v-model="bank_name")
            input(class="anketa-bank__input" type='text' placeholder="%% ставка" v-model="interest_rate")
            input(class="anketa-bank__input" type='text' placeholder="Max loan" v-model="max_loan")
            input(class="anketa-bank__input" type='text' placeholder="Min payment" v-model="min_payment")
            input(class="anketa-bank__input" type='text' placeholder="Loan term" v-model="loan_term")
          button(
            class="anketa-bank__button"
            @click="createNewBank"
          ) створити
</template>

<script>
export default {
  name: 'BankAnketa',
  data () {
    return {
      bank_name: '',
      interest_rate: '',
      max_loan: '',
      min_payment: '',
      loan_term: ''
    }
  },
  methods: {
    createNewBank () {
      const data = {
        _id: Math.floor(Math.random() * 1000),
        bank_name: this.bank_name,
        interest_rate: this.interest_rate,
        max_loan: this.max_loan,
        min_payment: this.min_payment,
        loan_term: this.loan_term
      }
      this.$store.dispatch('addNewBank', data)
      this.bank_name = ''
      this.interest_rate = ''
      this.max_loan = ''
      this.min_payment = ''
      this.loan_term = ''
      this.$router.push('/banks')
    }
  }
}
</script>

<style scoped lang="sass">
.anketa-bank
  padding-top: 30px
  &__inner
    display: flex
    flex-direction: column
  &__form
    width: 50%
    margin-left: auto
    margin-right: auto
    display: flex
    flex-direction: column
  &__input
    margin-left: auto
    margin-right: auto
    width: 80%
    padding: 12px
    border-radius: 4px
    font-size: 24px
    line-height: 26px
    margin-bottom: 10px
    border: 1px solid #ccc
  &__button
    font-size: 35px
    letter-spacing: 50px
    width: 50%
    margin-top: 40px
    margin-left: auto
    margin-right: auto
.title
  &--anketa-bank
    text-align: center
    font-size: 26px
</style>
