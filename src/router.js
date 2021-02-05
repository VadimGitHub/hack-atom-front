import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Forms from  '@/components/Forms'
import Step1 from  '@/views/Step1'
import Admin from  '@/views/Admin'
import Profile from  '@/views/Profile'
import Step_2 from '@/views/Step2'
import Step3 from '@/views/Step3'
import {Role} from '@/_helpers/role';

import {authenticationService} from '@/_services/authentication.service';

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {authorize: []}
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {authorize: []}
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: {authorize: [Role.Admin]}
        },
        {
            path: '/forms',
            name: 'forms',
            component: Forms
        },
        {
            path: '/step1',
            name: 'step1',
            component: Step1,
            meta: {authorize: []}
        },
        {
            path: '/step2',
            name: 'step2',
            component: Step_2,
            meta: {authorize: []}
        },
        {
            path: '/step3',
            name: 'step3',
            component: Step3,
            meta: {authorize: []}
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

router.beforeEach((to, from, next) => {
    const {authorize} = to.meta;
    const currentUser = authenticationService.currentUserValue;

    if (currentUser && !authorize) {
        return next({path: '/'});
    }

    if (authorize) {
        if (!currentUser) {
            return next({
                path: '/login',
            });
        }

        if (authorize.length && !authorize.includes(currentUser.role)) {
            return next({path: '/'});
        }
    }

    next();
})