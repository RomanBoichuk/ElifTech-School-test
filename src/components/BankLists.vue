<template lang="pug">
  .bank
    table(class="bank__table")
      tr(class="bank__table-trth")
        th(class="bank__table-th") #
        th(class="bank__table-th") Bank name
        th(class="bank__table-th") %% ставка
        th(class="bank__table-th") Max loan
        th(class="bank__table-th") Min payment
        th(class="bank__table-th") Loan term
        th(class="bank__table-th") ACTION
        th(class="bank__table-th") ACTION
      tr(
        class="bank__table-trtd"
        v-for='(item, index) in bank_item'
        :key="item._id"
      )
        td(class="bank__table-td") {{index + 1}}
        td(
          class="bank__table-td"
        ) {{item.bank_name}}
        td(
          class="bank__table-td"
          :contenteditable = 'editTable'
          ref='observer'
        ) {{item.interest_rate}}
        td(class="bank__table-td"
        ) {{item.max_loan}}
        td(class="bank__table-td") {{item.min_payment}}
        td(class="bank__table-td") {{item.loan_term}} months
        td(class="bank__table-td bank__table-td--action")
          button(
            class='btn__action'
            @click='deleteBank(item._id)'
          ) DELETE
        td(class="bank__table-td bank__table-td--action")
          button(
            class='btn__action'
            @click='editBank(item._id, index)'
          ) EDIT
</template>

<script>
export default {
  name: 'BankLists',
  data () {
    return {
      editTable: true
    }
  },
  props: [
    'bank_item'
  ],
  methods: {
    deleteBank (id) {
      this.$store.dispatch('deleteBank', id)
    },
    editBank (id, index) {
      const data = {
        interestRate: this.$refs.observer[index].innerText,
        id: id
      }
      this.$store.dispatch('updateBank', data)
    }
  }
}
</script>

<style scoped lang="sass">
table, th, td
  border: 1px solid white
  border-collapse: collapse
th
  background-color: #96D4D4
tr
  &:nth-child(even)
    background-color: #EDF8F8
  &:nth-child(odd)
    background-color: #DDF1F1
.bank
  width: 100%
  color: black
  margin-top: 10px
  &__table
    width: 100%
    &-trth
      font-size: 26px
      line-height: 28px
    &-th
      padding: 8px 5px
    &-trtd
      font-size: 24px
      line-height: 26px
    &-td
      padding: 15px 5px 15px 7px
      &--action
        text-align: center
.btn
  &__action
    border-radius: 15px
    transition: background-color .2s ease-out
    padding: 12px 20px
    &:hover
      background-color: red
</style>
