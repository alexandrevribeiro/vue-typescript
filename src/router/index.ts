import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import RouteHooks from '@/components/01-route-hooks/RouteHooks.vue'
// import Hello from '@/components/Hello.vue'
// import HelloTS from '@/components/HelloTS.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/route-hooks', name: 'route-hooks', component: RouteHooks }
    // { path: '/hello-ts', name: 'hello-ts', component: HelloTS }
  ]
})
