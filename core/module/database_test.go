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
			role := database.CreateRole(&model.Role{
				Name:    "add_latency_for_3_minutes",
				Value:   "{\"k\":\"v\"}",
				StartAt: time.Now().Add(time.Second * 1000).UTC(),
				EndAt:   time.Now().Add(time.Second * 3600).UTC(),
			})

			g.Assert(role.ID > 0).Equal(true)
			g.Assert(role.Name).Equal("add_latency_for_3_minutes")
			g.Assert(role.Value).Equal("{\"k\":\"v\"}")

			role.Name = "add_latency_for_6_minutes"

			role = database.UpdateRoleByID(role)

			g.Assert(role.Name).Equal("add_latency_for_6_minutes")

			role1 := database.GetRoleByID(role.ID)

			g.Assert(role1.ID > 0).Equal(true)
			g.Assert(role1.Name).Equal("add_latency_for_6_minutes")
			g.Assert(role1.Value).Equal("{\"k\":\"v\"}")

			role2 := database.GetRoles()[0]

			g.Assert(role2.ID > 0).Equal(true)
			g.Assert(role2.Name).Equal("add_latency_for_6_minutes")
			g.Assert(role2.Value).Equal("{\"k\":\"v\"}")

			database.DeleteRoleByID(role.ID)

			role3 := database.GetRoleByID(role.ID)

			g.Assert(role3.ID == 0).Equal(true)
		})
	})
}
