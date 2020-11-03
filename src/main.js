import Vue from 'vue'
import App from './App.vue'
/*
  imports the router configuration from the routes.js file
*/
import { router } from './routes'

Vue.config.productionTip = false

new Vue({
  /* passing the configuration to our Vue instance */
  router,
  render: h => h(App),
}).$mount('#app')
