import Vue from 'vue';
import Root from './vue/root.vue';

window.addEventListener('load', () => {
    const d = {
        currentRoute: window.location.pathname
    };
    /* eslint-disable no-new */
    const app = new Vue({
        el: '#app',
        data: d,
        render: (h) => {
            return h('root', { 'props': d })
        },
        components: { 'root': Root }
    });

    window.addEventListener('popstate', () => {
        app.currentRoute = window.location.pathname;
    })
});
