// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package controller

import (
	"io/ioutil"
	"net"
	"net/http"
	"strconv"

	"github.com/clivern/chaos/core/model"
	"github.com/clivern/chaos/core/util"

	"github.com/labstack/echo/v4"
	log "github.com/sirupsen/logrus"
)

// CreateRole controller
func CreateRole(c echo.Context, gc *GC) error {
	log.WithFields(log.Fields{}).Info(`Create role endpoint`)

	data, _ := ioutil.ReadAll(c.Request().Body)

	role := &model.RoleRequest{}

	err := role.LoadFromJSON(data)

	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]interface{}{
			"errorMessage": "Invalid request",
		})
	}

	value, err := util.ConvertMapToString(role.Value)

	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]interface{}{
			"errorMessage": "Invalid request",
		})
	}

	result := gc.GetDatabase().CreateRole(&model.Role{
		Name:    role.Name,
		Value:   value,
		StartAt: role.StartAt,
		EndAt:   role.EndAt,
	})

	return c.JSON(http.StatusCreated, model.RoleRequest{
		ID:        result.ID,
		Name:      result.Name,
		Value:     role.Value,
		StartAt:   result.StartAt,
		EndAt:     result.EndAt,
		CreatedAt: result.CreatedAt,
		UpdatedAt: result.UpdatedAt,
	})
}

// GetRoles controller
func GetRoles(c echo.Context, gc *GC) error {
	log.WithFields(log.Fields{}).Info(`Get roles endpoint`)

	roles := gc.GetDatabase().GetRoles()

	result := []model.RoleRequest{}

	for _, role := range roles {

		value, err := util.ConvertStringToMap(role.Value)

		if err != nil {
			continue
		}

		result = append(result, model.RoleRequest{
			ID:        role.ID,
			Name:      role.Name,
			Value:     value,
			StartAt:   role.StartAt,
			EndAt:     role.EndAt,
			CreatedAt: role.CreatedAt,
			UpdatedAt: role.UpdatedAt,
		})
	}

	return c.JSON(http.StatusOK, result)
}

// DeleteRole controller
func DeleteRole(c echo.Context, gc *GC) error {
	id, _ := strconv.Atoi(c.Param("id"))

	log.WithFields(log.Fields{}).Info(`Delete role endpoint`)

	log.WithFields(log.Fields{
		"id": id,
	}).Info(`Deleting a role with id`)

	gc.GetDatabase().DeleteRoleByID(id)

	log.WithFields(log.Fields{
		"id": id,
	}).Info(`Role with id got deleted`)

	return c.NoContent(http.StatusNoContent)
}

// GetNetInterfaces controller
func GetNetInterfaces(c echo.Context, _ *GC) error {
	ifaces, err := net.Interfaces()

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"errorMessage": "Unable to get network interfaces",
		})
	}

	var result []string

	mainIfaces := []net.Interface{}

	for _, iface := range ifaces {
		if iface.Flags&net.FlagUp != 0 && iface.Flags&net.FlagLoopback == 0 && (iface.Flags&net.FlagPointToPoint == 0 || iface.Flags&net.FlagMulticast != 0) {
			addrs, _ := iface.Addrs()
			for _, addr := range addrs {
				if ipnet, ok := addr.(*net.IPNet); ok && !ipnet.IP.IsLinkLocalUnicast() && ipnet.IP.To4() != nil {
					mainIfaces = append(mainIfaces, iface)
					break
				}
			}
		}
	}

	for _, iface := range mainIfaces {
		result = append(result, iface.Name)
	}

	return c.JSON(http.StatusOK, result)
}
