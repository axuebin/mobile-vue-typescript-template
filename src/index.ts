import Vue, { ComponentOptions } from 'vue';
import App from './pages/index/index';

/* eslint-disable */
const vmOps: ComponentOptions<any> = {
    el: '#app',
    render: (h: any) => h(App),
}
new Vue(vmOps);
