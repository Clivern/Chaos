// Copyright 2021 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package module

import (
	"github.com/clivern/chaos/core/migration"
	"github.com/clivern/chaos/core/model"
)

// CreateRole creates a new entity
func (db *Database) CreateRole(role *model.Role) *model.Role {
	db.Connection.Create(role)

	return role
}

// UpdateRoleByID updates an entity by ID
func (db *Database) UpdateRoleByID(role *model.Role) *model.Role {
	db.Connection.Save(&role)

	return role
}

// GetRoleByID gets an entity by ID
func (db *Database) GetRoleByID(id int) model.Role {
	role := model.Role{}

	db.Connection.Where("id = ?", id).First(&role)

	return role
}

// DeleteRoleByID deletes an entity by ID
func (db *Database) DeleteRoleByID(id int) {
	db.Connection.Unscoped().Where("id = ?", id).Delete(&migration.Role{})
}

// GetRoles gets auth methods
func (db *Database) GetRoles() []model.Role {
	roles := []model.Role{}

	db.Connection.Select("*").Find(&roles)

	return roles
}
