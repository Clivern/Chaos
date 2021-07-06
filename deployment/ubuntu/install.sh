#!/bin/bash

function deps {
    echo "Installing dependencies ..."

    apt-get update
    apt-get upgrade -y
    apt-get install stress jq -y
    apt-get install net-tools -y
    apt-get install build-essential gcc -y

    echo "Installing dependencies done!"
}

function chaos {
    echo "Installing chaos ..."

    mkdir -p /etc/chaos
    cd /etc/chaos
    LATEST_VERSION=$(curl --silent "https://api.github.com/repos/clivern/chaos/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)
    curl -sL https://github.com/clivern/chaos/releases/download/v{$LATEST_VERSION}/chaos_{$LATEST_VERSION}_Linux_x86_64.tar.gz | tar xz

    echo "[Unit]
Description=Chaos
Documentation=https://github.com/clivern/Chaos

[Service]
ExecStart=/etc/chaos/chaos server -c /etc/chaos/config.prod.yml
Restart=on-failure
RestartSec=2

[Install]
WantedBy=multi-user.target" > /etc/systemd/system/chaos.service

    systemctl daemon-reload
    systemctl enable chaos.service
    systemctl start chaos.service

    echo "Chaos installation done!"
}

deps
chaos
