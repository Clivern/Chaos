/** @format */

import ApiService from "./api.service.js";

const getBackendReadiness = () => {
	return ApiService.get("/_ready");
};

const getBackendHealth = () => {
	return ApiService.get("/_health");
};

export { getBackendReadiness, getBackendHealth };
