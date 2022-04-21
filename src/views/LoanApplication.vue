<template lang="pug">
  .loan-aplication
    .container
      h1(class="title title--loan-aplication") Loan Application
      .loan-aplication__inner
        form(class="loan-aplication__form")
          input(class="loan-aplication__input" type='text' placeholder="Initial loan" v-model='Initial_loan')
          input(class="loan-aplication__input" type='text' placeholder="Down payment" v-model='Down_payment')
          input(class="loan-aplication__input" type='text' placeholder="bank name" v-model='bank_name')
        button(
          class="loan-aplication__button"
          @click='creditCalculate'
        ) CALCULATE
      .loan-aplication__payment(v-if='payment.length')
        p(
          v-for='item in payment'
        ) Ваш платіж становитеме:
          span {{item}}
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LoanApplication',
  data () {
    return {
      Initial_loan: '',
      Down_payment: '',
      bank_name: ''
    }
  },
  computed: {
    ...mapState([
      'payment'
    ])
  },
  methods: {
    creditCalculate () {
      const data = {
        Initial_loan: this.Initial_loan,
        Down_payment: this.Down_payment,
        bank_name: this.bank_name
      }
      // console.log(data)
      this.$store.dispatch('creditCalculate', data)
      this.Initial_loan = ''
      this.Down_payment = ''
      this.bank_name = ''
    },
    credFormula () {
      var payment
      var credit = 249000
      const rate = 4
      var rate1
      var months = 12
      rate1 = 1 + (rate / 12)
      payment = (credit * (rate / 12) * Math.pow(rate1, months)) / (Math.pow(rate1, months) - 1)
      // payment = Math.pow(rate, months)
      console.log(payment)
    }
  }
}
</script>

<style scoped lang="sass">
.loan-aplication
  color: black
  padding: 30px
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
  &__payment
    text-align: center
    margin-top: 30px
    font-size: 30px
  &__button
    font-size: 35px
    letter-spacing: 50px
    width: 50%
    margin-top: 40px
    margin-left: auto
    margin-right: auto
.title
  &--loan-aplication
    text-align: center
span
  margin-left: 15px
  font-size: 45px
  font-weight: 900
  color: #fff
  letter-spacing: 10px
</style>
