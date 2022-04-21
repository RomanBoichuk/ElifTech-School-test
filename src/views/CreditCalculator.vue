<template lang="pug">
  .calculator
    .container
      h1(class="title title--calculator") CreditCalculator
</template>

<script>
export default {
  name: 'CreditCalculator'
}
</script>

<style scoped lang="sass">
.calculator
  color: black
  padding: 30px
.title
  &--calculator
    text-align: center
</style>
