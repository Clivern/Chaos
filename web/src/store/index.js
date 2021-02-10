/** @format */

import Vue from "vue";
import Vuex from "vuex";
import backend from "./backend.module";
import settings from "./settings.module";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		backend,
		settings,
	},
});
