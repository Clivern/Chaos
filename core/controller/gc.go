// Copyright 2021 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package controller

import (
	"github.com/clivern/chaos/core/module"
)

// GC type
type GC struct {
	Database *module.Database
}

// GetDatabase gets a database connection
func (c *GC) GetDatabase() *module.Database {
	return c.Database
}
