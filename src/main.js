import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Vuex from 'vuex'
import router from './router'

import './index.css'

Vue.use(Vuex)

Vue.config.productionTip = false

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
