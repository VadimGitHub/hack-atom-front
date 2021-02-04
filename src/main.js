import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './index.css'

import 'babel-polyfill'
import vuetify from '/plugins/vuetify'

Vue.use(Vuex)
Axios.defaults.baseURL = 'https://10.0.0.108:8080/';

const token = localStorage.getItem('token')
if (token) {
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

Vue.use(Vuex)
Vue.use(Notifications)
Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
