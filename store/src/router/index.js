import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../views/Store.vue'
import NewItem from '../views/NewItem.vue'
import EditItem from '../views/EditItem.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Store',
    component: Store
  },
  {
    path: '/newItem',
    name: 'newItem',
    component: NewItem
  },
  {
    path: '/editItem/:id',
    name: 'editItem',
    component: EditItem
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
