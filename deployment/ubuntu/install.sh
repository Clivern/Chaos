#!/bin/bash

function install_dependencies {
    echo "Installing dependencies ..."

    apt-get update

    apt-get upgrade -y

    apt-get install jq bind9 -y

    echo "Installing dependencies done!"
}

function install_knot {
    echo "Installing knot ..."

    mkdir -p /etc/knot

    cd /etc/knot

    LATEST_VERSION=$(curl --silent "https://api.github.com/repos/Clivern/knot/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)

    curl -sL https://github.com/Clivern/knot/releases/download/v{$LATEST_VERSION}/knot_{$LATEST_VERSION}_Linux_x86_64.tar.gz | tar xz


    echo "[Unit]
Description=Knot
Documentation=https://github.com/Clivern/knot

[Service]
ExecStart=/etc/knot/knot server -c /etc/knot/config.prod.yml
Restart=on-failure
RestartSec=2

[Install]
WantedBy=multi-user.target" > /etc/systemd/system/knot.service

    systemctl daemon-reload
    systemctl enable knot.service
    systemctl start knot.service

    echo "Knot installation done!"
}

install_dependencies
install_knot
