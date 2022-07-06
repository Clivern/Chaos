// Copyright 2021 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package module

import (
	"fmt"
	"testing"
	"time"

	"github.com/clivern/chaos/core/model"
	"github.com/clivern/chaos/pkg"

	"github.com/franela/goblin"
)

// TestUnitDatabase
func TestUnitDatabase(t *testing.T) {
	g := goblin.Goblin(t)

	pkg.LoadConfigs(fmt.Sprintf("%s/config.dist.yml", pkg.GetBaseDir("cache")))

	database := &Database{}

	// Reset DB
	database.AutoConnect()
	database.Rollback()

	defer database.Close()

	g.Describe("#Migrate", func() {
		g.It("It should satisfy test cases", func() {
			g.Assert(database.AutoConnect()).Equal(nil)
			g.Assert(database.Ping()).Equal(nil)

			g.Assert(database.Migrate()).Equal(true)
			g.Assert(database.HasTable("roles")).Equal(true)
			g.Assert(database.HasTable("role")).Equal(false)
		})
	})

	g.Describe("#Role", func() {
		g.It("It should satisfy test cases", func() {
			result := database.CreateRole(&model.Role{
				Name:     "add_latency_for_3_minutes",
				Value:    "{\"k\":\"v\"}",
				ExpireAt: time.Now().Add(time.Second * 3600).UTC(),
			})

			g.Assert(result.ID > 0).Equal(true)
			g.Assert(result.Name).Equal("add_latency_for_3_minutes")
			g.Assert(result.Value).Equal("{\"k\":\"v\"}")

			result.Name = "add_latency_for_6_minutes"

			result = database.UpdateRoleByID(result)

			g.Assert(result.Name).Equal("add_latency_for_6_minutes")

			result1 := database.GetRoleByID(result.ID)

			g.Assert(result1.ID > 0).Equal(true)
			g.Assert(result1.Name).Equal("add_latency_for_6_minutes")
			g.Assert(result1.Value).Equal("{\"k\":\"v\"}")

			result2 := database.GetRoles()[0]

			g.Assert(result2.ID > 0).Equal(true)
			g.Assert(result2.Name).Equal("add_latency_for_6_minutes")
			g.Assert(result2.Value).Equal("{\"k\":\"v\"}")

			database.DeleteRoleByID(result.ID)

			result3 := database.GetRoleByID(result.ID)

			g.Assert(result3.ID == 0).Equal(true)
		})
	})
}
