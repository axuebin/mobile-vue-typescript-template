import { Commit } from 'vuex';

export interface Me {
    name: string;
    age: number;
}

export interface GlobalState {
    count: number;
    me: Me;
}

const state: GlobalState = {
    count: 0,
    me: {
        name: 'axuebin',
        age: 1,
    },
};

const mutations: any = {
    increment(states: any) {
        states.count += 1;
    },
};

const actions: any = {
    increment(context: { commit: Commit }) {
        context.commit('increment');
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
