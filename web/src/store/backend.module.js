/** @format */

import { getBackendReadiness, getBackendHealth } from "@/common/backend.api";

const state = () => ({
	readiness: {},
	health: {},
});

const getters = {
	getBackendReadiness: (state) => {
		return state.readiness;
	},
	getBackendHealth: (state) => {
		return state.health;
	},
};

const actions = {
	async fetchBackendReadiness({ commit }) {
		const result = await getBackendReadiness();
		commit("SET_BACKEND_READINESS", result.data);
		return result;
	},

	async fetchBackendHealth({ commit }) {
		const result = await getBackendHealth();
		commit("SET_BACKEND_HEALTH", result.data);
		return result;
	},
};

const mutations = {
	SET_BACKEND_READINESS(state, readiness) {
		state.readiness = readiness;
	},
	SET_BACKEND_HEALTH(state, health) {
		state.health = health;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
