// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package model

import (
	"time"

	"github.com/clivern/chaos/core/util"
)

// Role struct
type Role struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Value     string    `json:"value"`
	StartAt   time.Time `json:"startAt"`
	EndAt     time.Time `json:"endAt"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// Roles struct
type Roles struct {
	Roles []Role `json:"roles"`
}

// LoadFromJSON update object from json
func (o *Role) LoadFromJSON(data []byte) error {
	return util.LoadFromJSON(o, data)
}

// ConvertToJSON convert object to json
func (o *Role) ConvertToJSON() (string, error) {
	return util.ConvertToJSON(o)
}

// LoadFromJSON update object from json
func (o *Roles) LoadFromJSON(data []byte) error {
	return util.LoadFromJSON(o, data)
}

// ConvertToJSON convert object to json
func (o *Roles) ConvertToJSON() (string, error) {
	return util.ConvertToJSON(o)
}
