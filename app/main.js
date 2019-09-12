import Vue from 'nativescript-vue'
import App from './components/App'

import router from './router';

  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  router,
  render: h => h('frame', [h(App)])
}).$start()
