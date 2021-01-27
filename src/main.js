import Vue from 'vue'
import App from '@/App'
import router from '@/router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router   //可以使用this.$router和this.$route
}).$mount('#app')
