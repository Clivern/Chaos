// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package controller

import (
	"net/http"

	"github.com/clivern/gunner/core/driver"

	"github.com/labstack/echo/v4"
	log "github.com/sirupsen/logrus"
)

// Ready controller
func Ready(c echo.Context) error {
	db := driver.NewEtcdDriver()

	err := db.Connect()

	if err != nil || !db.IsConnected() {
		log.WithFields(log.Fields{
			"status": "NotOk",
		}).Info(`Ready check`)

		return c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"status": "not ok",
		})
	}

	defer db.Close()

	log.WithFields(log.Fields{
		"status": "OK",
	}).Info(`Ready check`)

	return c.JSON(http.StatusOK, map[string]interface{}{
		"status": "ok",
	})
}
