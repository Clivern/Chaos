// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package util

import (
	"encoding/json"
	"strings"
)

// LoadFromJSON update object from json
func LoadFromJSON(item interface{}, data []byte) error {
	err := json.Unmarshal(data, &item)

	if err != nil {
		return err
	}

	return nil
}

// ConvertToJSON convert object to json
func ConvertToJSON(item interface{}) (string, error) {
	data, err := json.Marshal(&item)

	if err != nil {
		return "", err
	}

	return string(data), nil
}

// IsEmpty validate if string is empty or not
func IsEmpty(item string) bool {
	if strings.TrimSpace(item) == "" {
		return true
	}
	return false
}
