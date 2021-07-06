/** @format */

import ApiService from "./api.service.js";

const getReadiness = () => {
	return ApiService.get("/_ready");
};

const getHealth = () => {
	return ApiService.get("/_health");
};

export { getReadiness, getHealth };
