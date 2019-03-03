import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'

import Home from "./pages/Home"
import Posts from "./pages/Posts"

const routes = [
  { path: '/', component: Home },
  { path: '/posts', component: Posts }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
