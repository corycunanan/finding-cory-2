import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'

import Home from "./pages/Home"
import Post from "./pages/Post"

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [
  { path: '/', component: Home },
  { path: '/post/:slug', component: Post }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
