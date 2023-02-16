// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

//go:build unit
// +build unit

package util

import (
	"fmt"
	"testing"

	"github.com/clivern/chaos/pkg"

	"github.com/franela/goblin"
)

// TesUnitHelpers
func TesUnitHelpers(t *testing.T) {
	baseDir := pkg.GetBaseDir("cache")
	pkg.LoadConfigs(fmt.Sprintf("%s/config.dist.yml", baseDir))

	g := goblin.Goblin(t)

	g.Describe("#TestInArray", func() {
		g.It("It should satisfy test cases", func() {
			g.Assert(InArray("A", []string{"A", "B", "C", "D"})).Equal(true)
			g.Assert(InArray("B", []string{"A", "B", "C", "D"})).Equal(true)
			g.Assert(InArray("H", []string{"A", "B", "C", "D"})).Equal(false)
			g.Assert(InArray(1, []int{2, 3, 1})).Equal(true)
			g.Assert(InArray(9, []int{2, 3, 1})).Equal(false)
		})
	})
}
