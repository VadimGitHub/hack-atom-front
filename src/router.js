import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Forms from  '@/components/Forms'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/signup',
            component: Signup
        },
        {
            path: '/forms',
            component: Forms
        },
    ]
})