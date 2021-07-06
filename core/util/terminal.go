// Copyright 2022 Clivern. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

package util

import (
	"fmt"
	"os"
	"os/exec"
	"strings"
)

// Terminal type
type Terminal struct{}

// Exec execute a command
func (t *Terminal) Exec(comm string, options string) error {

	executable, err := exec.LookPath(comm)

	if err != nil {
		return err
	}

	command := strings.Split(
		fmt.Sprintf(`%s %s`, executable, options),
		" ",
	)

	cmd := exec.Command(command[0], command[1:]...)

	cmd.Stdin = os.Stdin
	// cmd.Stdout = os.Stdout
	// cmd.Stderr = os.Stderr

	return cmd.Run()
}
