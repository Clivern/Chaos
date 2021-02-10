#!/bin/bash

function langmore {
    echo "Installing langmore ..."

    apt-get install jq -y

    cd /etc/langmore

    LATEST_VERSION=$(curl --silent "https://api.github.com/repos/Clivern/langmore/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)

    curl -sL https://github.com/Clivern/langmore/releases/download/v{$LATEST_VERSION}/langmore_{$LATEST_VERSION}_Linux_x86_64.tar.gz | tar xz


    echo "[Unit]
Description=Langmore
Documentation=https://github.com/Clivern/langmore

[Service]
ExecStart=/etc/langmore/langmore server -c /etc/langmore/config.prod.yml
Restart=on-failure
RestartSec=2

[Install]
WantedBy=multi-user.target" > /etc/systemd/system/langmore.service

    systemctl daemon-reload
    systemctl enable langmore.service
    systemctl start langmore.service

    echo "langmore installation done!"
}

langmore
