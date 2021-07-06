// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package service

import (
	"fmt"
	"math/rand"
	"strconv"
	"time"

	"github.com/clivern/chaos/core/controller"
	"github.com/clivern/chaos/core/model"
	"github.com/clivern/chaos/core/util"
)

// MIN const
const MIN = 1

// MAX const
const MAX = 10

// COOLDOWN const
const COOLDOWN = 60

// Chaos type
type Chaos struct {
	gc       *controller.GC
	data     util.Map
	terminal *util.Terminal
}

// NewChaos creates a new instance
func NewChaos(gc *controller.GC) *Chaos {
	return &Chaos{
		gc:       gc,
		data:     util.NewMap(),
		terminal: &util.Terminal{},
	}
}

// GetRoles get roles list
func (c *Chaos) GetRoles() []model.RoleRequest {
	roles := c.gc.GetDatabase().GetRoles()

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

	return result
}

// LoadChaos Load the system
func (c *Chaos) LoadChaos() {
	roles := c.GetRoles()

	for _, role := range roles {
		if time.Now().Unix() >= role.StartAt.Unix() && time.Now().Unix() <= role.EndAt.Unix() {
			if role.Value["mode"] == "sys_load" {
				c.terminal.Exec("stress", fmt.Sprintf(
					"--cpu %s --io %s --vm %s --hdd %s --timeout %s",
					role.Value["sys_load_cpu"],
					role.Value["sys_load_io"],
					role.Value["sys_load_vm"],
					role.Value["sys_load_hdd"],
					strconv.FormatInt(role.EndAt.Unix()-time.Now().Unix(), 10),
				))

				time.Sleep(30 * time.Second)
			}
		} else {
			c.gc.GetDatabase().DeleteRoleByID(role.ID)
		}
	}
}

// NetworkChaos triggers network chaos
func (c *Chaos) NetworkChaos() {
	roles := c.GetRoles()

	for _, role := range roles {
		if time.Now().Unix() >= role.StartAt.Unix() && time.Now().Unix() <= role.EndAt.Unix() {
			if util.InArray(role.Value["mode"], []string{"network_delay", "packet_loss", "packet_corruption", "packet_duplication"}) {
				id, ok := c.data.Get("network_role_id")

				if ok && id.(int) == role.ID {
					time.Sleep(30 * time.Second)
					continue
				}

				c.terminal.Exec("tc", fmt.Sprintf(
					"qdisc del dev %s root",
					role.Value["net_interface"],
				))

				if role.Value["mode"] == "network_delay" {
					c.terminal.Exec("tc", fmt.Sprintf(
						"qdisc add dev %s root netem delay %s %s",
						role.Value["net_interface"],
						role.Value["network_delay_delay"],
						role.Value["network_delay_distribution"],
					))
				}

				if role.Value["mode"] == "packet_loss" {
					c.terminal.Exec("tc", fmt.Sprintf(
						"qdisc add dev %s root netem loss %s",
						role.Value["net_interface"],
						role.Value["packet_loss_percent"],
					))
				}

				if role.Value["mode"] == "packet_corruption" {
					c.terminal.Exec("tc", fmt.Sprintf(
						"qdisc add dev %s root netem corrupt %s",
						role.Value["net_interface"],
						role.Value["packet_corruption_percent"],
					))
				}

				if role.Value["mode"] == "packet_duplication" {
					c.terminal.Exec("tc", fmt.Sprintf(
						"qdisc add dev %s root netem duplicate %s",
						role.Value["net_interface"],
						role.Value["packet_duplication_percent"],
					))
				}

				c.data.Set("network_role_id", role.ID)
				time.Sleep(30 * time.Second)
			}
		} else {
			c.gc.GetDatabase().DeleteRoleByID(role.ID)
		}
	}
}

// RandomReboot triggers random system reboots
func (c *Chaos) RandomReboot() {
	roles := c.GetRoles()

	for _, role := range roles {
		if time.Now().Unix() >= role.StartAt.Unix() && time.Now().Unix() <= role.EndAt.Unix() {
			if role.Value["mode"] == "random_reboots" {
				if (rand.Intn(MAX-MIN+1) + MIN) == 5 {
					c.terminal.Exec("reboot", "")
				}

				time.Sleep(COOLDOWN * time.Second)
			}
		} else {
			c.gc.GetDatabase().DeleteRoleByID(role.ID)
		}
	}
}
