// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package model

import (
	"time"

	"github.com/clivern/chaos/core/util"
)

// RoleRequest struct
type RoleRequest struct {
	ID        int               `json:"id"`
	Name      string            `json:"name"`
	Value     map[string]string `json:"value"`
	StartAt   time.Time         `json:"startAt"`
	EndAt     time.Time         `json:"endAt"`
	CreatedAt time.Time         `json:"createdAt"`
	UpdatedAt time.Time         `json:"updatedAt"`
}

// LoadFromJSON update object from json
func (o *RoleRequest) LoadFromJSON(data []byte) error {
	return util.LoadFromJSON(o, data)
}

// ConvertToJSON convert object to json
func (o *RoleRequest) ConvertToJSON() (string, error) {
	return util.ConvertToJSON(o)
}
