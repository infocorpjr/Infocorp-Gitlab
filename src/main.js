import Vue from 'vue'
import VueCookies from 'vue-cookies';
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Axios configurações
// Contador de requisições
Vue.prototype.$requesting = 0;
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    Vue.prototype.$requesting++;
    console.log('Interceptors / Request', config, Vue.prototype.$requesting);
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    Vue.prototype.$requesting--;
    console.log('Interceptors / Response', response, Vue.prototype.$requesting);
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

// Axios
Vue.prototype.$http = axios;

// Configurações
Vue.config.productionTip = false;

// A simple Vue.js plugin for handling browser cookies.
Vue.use(VueCookies);
//
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

// Arquivo de estilo padrão
require('./assets/sass/main.scss');
