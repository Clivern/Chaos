// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package controller

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/franela/goblin"
	"github.com/labstack/echo/v4"
)

// TestIntegrationReadyEndpoint
func TestIntegrationReadyEndpoint(t *testing.T) {
	g := goblin.Goblin(t)

	g.Describe("#ReadyEndpoint", func() {
		g.It("It should satisfy all provided test cases", func() {
			e := echo.New()
			req := httptest.NewRequest(http.MethodGet, "/_ready", nil)
			rec := httptest.NewRecorder()
			c := e.NewContext(req, rec)
			c.SetPath("/_ready")

			err := Ready(c)

			g.Assert(err).Equal(nil)
			g.Assert(rec.Code).Equal(http.StatusOK)
			g.Assert(strings.TrimSpace(rec.Body.String())).Equal(`{"status":"ok"}`)
		})
	})
}
