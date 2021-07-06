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

// ConvertMapToString converts a map to a string
func ConvertMapToString(item map[string]string) (string, error) {
	b, err := json.Marshal(item)

	if err != nil {
		return "", err
	}

	return string(b), nil
}

// ConvertStringToMap converts a string into a map
func ConvertStringToMap(item string) (map[string]string, error) {
	var m2 map[string]string

	err := json.Unmarshal([]byte(item), &m2)

	if err != nil {
		return m2, err
	}

	return m2, nil
}

// InArray validates if a string in array
func InArray(str string, arr []string) bool {
	for _, s := range arr {
		if s == str {
			return true
		}
	}
	return false
}
