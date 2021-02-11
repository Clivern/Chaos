#!/bin/bash


function dependencies {
    apt-get update

    apt-get upgrade -y

    apt-get install jq bind9 -y
}

function gunner {
    echo "Installing gunner ..."

    mkdir -p /etc/gunner

    cd /etc/gunner

    LATEST_VERSION=$(curl --silent "https://api.github.com/repos/Clivern/gunner/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)

    curl -sL https://github.com/Clivern/gunner/releases/download/v{$LATEST_VERSION}/gunner_{$LATEST_VERSION}_Linux_x86_64.tar.gz | tar xz


    echo "[Unit]
Description=Gunner
Documentation=https://github.com/Clivern/gunner

[Service]
ExecStart=/etc/gunner/gunner server -c /etc/gunner/config.prod.yml
Restart=on-failure
RestartSec=2

[Install]
WantedBy=multi-user.target" > /etc/systemd/system/gunner.service

    systemctl daemon-reload
    systemctl enable gunner.service
    systemctl start gunner.service

    echo "gunner installation done!"
}

dependencies

gunner
