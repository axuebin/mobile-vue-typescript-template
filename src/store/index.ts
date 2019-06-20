import Vue from 'vue';
import Vuex from 'vuex';
import GlobalModule from './modules/global';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        global: GlobalModule,
    },
});

export default store;
