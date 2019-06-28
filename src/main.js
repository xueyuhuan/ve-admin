import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/scss/reset.scss';
import './assets/scss/common.scss';
import animated from 'animate.css'

Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
