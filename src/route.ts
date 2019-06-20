import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import App from './routes/index/index';
import Test from './routes/test/index';

Vue.use(Router);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'index',
        component: App,
    },
    {
        path: '/test',
        name: 'test',
        component: Test,
    },
];

const router: Router = new Router({
    base: '/',
    routes,
});

export default router;
