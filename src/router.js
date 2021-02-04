import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
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
            path: '/admin',
            name: 'admin',
            component: Signup,
            meta: {authorize: [Role.Admin]}
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