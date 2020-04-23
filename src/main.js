import Vue from 'vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignInAlt, faHome, faEdit, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMarkdown from 'vue-markdown'

import App from './App.vue'
import WelcomePage from './components/WelcomePage'
import PostEditor from './components/PostEditor'
import PostList from './components/PostList'
import ViewPost from './components/ViewPost'

library.add(faSignInAlt, faHome, faEdit, faList)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-markdown', VueMarkdown)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueMarkdown);

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/createPost', component: PostEditor },
  { path: '/posts', component: PostList },
  { path: '/viewPost', component: ViewPost }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
