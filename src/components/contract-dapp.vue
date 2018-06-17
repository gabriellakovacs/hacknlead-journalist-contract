<template>
    <contract-metamask/>
</template>
<script>
import ContractMetamask from '@/components/contract-metamask'
export default {
 name: 'contract-dapp',
 beforeCreate () {
    console.log('registerWeb3 Action dispatched from contract-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
 components: {
 'contract-metamask': ContractMetamask
 }
}
</script>

<style scoped>
</style>