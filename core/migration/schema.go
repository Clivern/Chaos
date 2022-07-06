// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package migration

import (
	"time"

	"github.com/clivern/chaos/core/util"

	"github.com/jinzhu/gorm"
)

// Role struct
type Role struct {
	gorm.Model

	Name     string `json:"name"`
	Value    string `json:"value"`
	ExpireAt time.Time
}

// LoadFromJSON update object from json
func (r *Role) LoadFromJSON(data []byte) error {
	return util.LoadFromJSON(r, data)
}

// ConvertToJSON convert object to json
func (r *Role) ConvertToJSON() (string, error) {
	return util.ConvertToJSON(r)
}
