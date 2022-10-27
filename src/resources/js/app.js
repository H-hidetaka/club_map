require('./bootstrap');

window.Vue = require('vue');

Vue.component('laravelvue', require('./components/LaravelVue.vue').default);

const app = new Vue({
    el: '#app',
});
