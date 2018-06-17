import Vue from 'vue'
import Router from 'vue-router'
import ContractDapp from '@/components/contract-dapp'
Vue.use(Router)
export default new Router({
 routes: [
 {
 path: '/',
 name: 'contract-dapp',
 component: ContractDapp
 }
 ]
})
