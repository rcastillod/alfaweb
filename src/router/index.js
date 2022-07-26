import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CoursesView from '@/views/CoursesView.vue'
import EditCourseView from '@/views/EditCourseView.vue'
import { getAuth } from 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      privateRoute: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView,
    meta: {
      privateRoute: true
    }
  },
  {
    path: '/editcourse/:id',
    name: 'editcourse',
    component: EditCourseView,
    props: true,
    meta: {
      privateRoute: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()

  let user = auth.currentUser
  let private_route = to.meta.privateRoute

  if( private_route && !user ) {
    next({name: 'login'})
  } else if( private_route == undefined && user ) {
    next('/')
  } else {
    next()
  }
})

export default router
