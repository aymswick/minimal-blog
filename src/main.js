import Vue from 'vue'
import App from './App.vue'
import PostEditor from './components/PostEditor'
import PostList from './components/PostList'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
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
