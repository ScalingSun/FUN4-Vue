import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Stamp from '../views/Stamp.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
   },
  // {
  //   path: '/Stamp',
  //   name: 'Stamp',
  //   component:Stamp

  // },

]

const router = new VueRouter({
  routes
})

export default router
