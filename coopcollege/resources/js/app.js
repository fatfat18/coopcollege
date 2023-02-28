
// Require Vue
window.Vue = require('vue').default;

// Register Vue Components
Vue.component('test', require('./components/test.vue').default);

// Initialize Vue
const app = new Vue({
    el: '#app',
});

