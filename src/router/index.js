import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../views/users/UserList'
import UserEdit from "../views/users/UserEdit";
import CreateUser from "../views/users/CreateUser";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'user' }
  },
  {
    path: '/user',
    name: 'user',
    component: UserList,
  },
  {
    path: '/user/create',
    name: 'user.create',
    component: CreateUser
  },
  {
    path: '/user/:id/edit',
    name: 'user.edit',
    component: UserEdit
  }
]

const router = new VueRouter({
  routes
})

export default router
