import Vue, { ComponentOptions, CreateElement } from 'vue';
import App from './pages/index/index';
import 'lib-flexible/flexible';

/* eslint-disable */
const vmOps: ComponentOptions<any> = {
    el: '#app',
    render: (h: CreateElement) => h(App),
}
new Vue(vmOps);
