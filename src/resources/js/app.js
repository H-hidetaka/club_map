require('./bootstrap');

import { createApp } from 'vue'
import { ClubTop } from './components/ClubTop.vue'


const app = createApp({})
app.component('club-top', ClubTop);
app.mount('#app')



// window.Vue = require('vue');

// Vue.component('club-top', require('./components/ClubTop.vue').default);
// Vue.component('club-top', require('./components/ClubTop.vue'));

// createApp({
//         data() {
//         return {
//             count: 0
//         }
//     }
// }).mount('#app')
