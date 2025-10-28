import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import Tickets from '../views/Tickets.vue'
const routes=[ {path:'/',component:Landing},{path:'/auth',component:Auth},{path:'/dashboard',component:Dashboard,meta:{requiresAuth:true}},{path:'/tickets',component:Tickets,meta:{requiresAuth:true}} ]
const router=createRouter({ history:createWebHistory(), routes })
router.beforeEach((to,from,next)=>{ const token=localStorage.getItem('ticketapp_session'); if(to.meta.requiresAuth && !token) return next('/auth'); next() })
export default router
