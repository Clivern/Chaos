// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package controller

import (
	"net/http"

	"github.com/labstack/echo/v4"
	log "github.com/sirupsen/logrus"
)

// Ready controller
func Ready(c echo.Context) error {
	log.WithFields(log.Fields{
		"status": "ok",
	}).Info(`Ready check`)

	return c.JSON(http.StatusOK, map[string]interface{}{
		"status": "ok",
	})
}
