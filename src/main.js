import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import {router} from './router'
import infiniteScroll from 'vue-infinite-scroll'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'dropzone/dist/dropzone.css'
import 'dropzone/dist/dropzone'

import './index.css'

Axios.defaults.baseURL = 'http://10.0.0.108:8080/';

const token = localStorage.getItem('token')
if (token) {
    Axios.defaults.headers.common['X-Auth'] = token
}

Vue.use(Vuex)
Vue.use(Notifications)
Vue.use(VueAxios, Axios)
Vue.use(infiniteScroll)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
