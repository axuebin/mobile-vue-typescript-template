import Vue, { ComponentOptions, CreateElement } from 'vue';
import router from './route';
import App from './App';
import 'lib-flexible/flexible';

/* eslint-disable */
const vmOps: ComponentOptions<any> = {
    el: '#app',
    router,
    render: (h: CreateElement) => h(App),
}
new Vue(vmOps);
