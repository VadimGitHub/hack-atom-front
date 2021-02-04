import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Signup from '@/views/Signup'

import {authenticationService} from '@/_services/authentication.service';

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            meta: {authorize: []}
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/signup',
            component: Signup
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

    if (authorize) {
        console.log('требуется авторизация')
        console.log(currentUser)

        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({
                path: '/login',
                query: {
                    returnUrl: to.path
                }
            });
        }

        if (authorize.length && !authorize.includes(currentUser.role)) {
            return next({path: '/'});
        }
    }

    next();
})