import Vue from 'vue'
import VueCookies from 'vue-cookies';
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Axios
Vue.prototype.$http = axios;
// Configurações do VueJS
Vue.config.productionTip = false;
// A simple Vue.js plugin for handling browser cookies.
Vue.use(VueCookies);
//
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

// Arquivo de folha de estilo padrão.
require('./assets/sass/main.scss');
