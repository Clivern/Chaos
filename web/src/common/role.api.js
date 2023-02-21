/** @format */

import ApiService from "./api.service.js";

const createRole = (payload) => {
	return ApiService.post("/api/v1/role", payload);
};

const getRoles = (payload) => {
	return ApiService.get("/api/v1/role");
};

const deleteRole = (payload) => {
	return ApiService.delete("/api/v1/role/" + payload["id"]);
};

export { createRole, getRoles, deleteRole };
