import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import RouteHooks from '@/components/01-route-hooks/RouteHooks.vue'
import CompWithParentClass from '@/components/02-comp-with-hierarchy/CompWithParentClass.vue'
import UsingDirective from '@/components/03-directive/UsingDirective.vue'
import AnyComp from '@/components/04-child-with-prop/AnyComp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/route-hooks', name: 'route-hooks', component: RouteHooks },
    { path: '/hierarchy', name: 'hierarchy', component: CompWithParentClass },
    { path: '/directive', name: 'directive', component: UsingDirective },
    { path: '/using-prop', name: 'using-prop', component: AnyComp }
  ]
})
