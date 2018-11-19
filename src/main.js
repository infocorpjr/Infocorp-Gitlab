import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Axios
Vue.prototype.$http = axios;
// Axios configurações
Vue.$http.interceptors.push(function () {

});
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
