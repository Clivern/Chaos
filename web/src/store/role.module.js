/** @format */

import { createRole, getRoles, deleteRole } from "@/common/role.api";

const state = () => ({
	createRoleResult: {},
	getRolesResult: {},
	deleteRoleResult: {},
});

const getters = {
	createRole: (state) => {
		return state.createRoleResult;
	},
	getRoles: (state) => {
		return state.getRolesResult;
	},
	deleteRole: (state) => {
		return state.deleteRoleResult;
	},
};

const actions = {
	async createRoleAction(context, payload) {
		const result = await createRole(payload);
		context.commit("SET_CREATE_ROLE_RESULT", result.data);
		return result;
	},
	async getRolesAction(context, payload) {
		const result = await getRoles(payload);
		context.commit("SET_GET_ROLES_RESULT", result.data);
		return result;
	},
	async deleteRoleAction(context, payload) {
		const result = await deleteRole(payload);
		context.commit("SET_DELETE_ROLE_RESULT", result.data);
		return result;
	},
};

const mutations = {
	SET_CREATE_ROLE_RESULT(state, createRoleResult) {
		state.createRoleResult = createRoleResult;
	},
	SET_GET_ROLES_RESULT(state, getRolesResult) {
		state.getRolesResult = getRolesResult;
	},
	SET_DELETE_ROLE_RESULT(state, deleteRoleResult) {
		state.deleteRoleResult = deleteRoleResult;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
