import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Axios configurações
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    console.log('Interceptors / Request', config);
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    console.log('Interceptors / Response', response);
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

// Iniciando a aplicação
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

// Principal arquivo de estilo.
require('./assets/sass/main.scss');
