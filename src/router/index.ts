import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import RouteHooks from '@/components/01-route-hooks/RouteHooks.vue'
import CompWithParentClass from '@/components/02-comp-with-hierarchy/CompWithParentClass.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/route-hooks', name: 'route-hooks', component: RouteHooks },
    { path: '/hierarchy', name: 'hierarchy', component: CompWithParentClass }
  ]
})
