import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        selectMeridians: [],
        defineMeridians: [],
    },
    mutations: {
        setSelect(state, select){
            state.selectMeridians = select
        },
        setDefine(state, define){
            state.defineMeridians = define
        }
    },
    getters: {
    },
    actions: {},
    modules: {}
});
export default store;
