import Vue from 'vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignInAlt, faHome, faEdit, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import WelcomePage from './components/WelcomePage'
import PostEditor from './components/PostEditor'
import PostList from './components/PostList'

library.add(faSignInAlt, faHome, faEdit, faList)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/createPost', component: PostEditor },
  { path: '/posts', component: PostList }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
