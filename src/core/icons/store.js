import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		client: location.href.includes("origin") ? "origin" : "std",
		favList: [],
	},
	mutations: {},
	getters: {},
	actions: {},
	modules: {},
});
export default store;
