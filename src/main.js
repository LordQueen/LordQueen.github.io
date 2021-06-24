import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import NavBar from '@/components/NavBar.vue'
Vue.use({
  install:function(Vue){
    Vue.component('NavBar',NavBar)
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
