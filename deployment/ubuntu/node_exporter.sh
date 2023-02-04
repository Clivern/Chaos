#!/bin/bash

function node_exporter {
    echo "Installing node_exporter ..."

    groupadd -f node_exporter
    useradd -g node_exporter --no-create-home --shell /bin/false node_exporter

    cd /tmp
    curl -sL https://github.com/prometheus/node_exporter/releases/download/v1.6.1/node_exporter-1.6.1.linux-amd64.tar.gz | tar xz
    cp /tmp/node_exporter-1.6.1.linux-amd64/node_exporter /usr/bin/
    chmod +x /usr/bin/node_exporter
    chown node_exporter:node_exporter /usr/bin/node_exporter

    echo "[Unit]
Description=Node Exporter
Documentation=https://prometheus.io/docs/guides/node-exporter/
Wants=network-online.target
After=network-online.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
Restart=on-failure
ExecStart=/usr/bin/node_exporter \
  --web.listen-address=:9200

[Install]
WantedBy=multi-user.target" > /etc/systemd/system/node_exporter.service

    systemctl daemon-reload
    systemctl enable node_exporter.service
    systemctl start node_exporter.service

    echo "node_exporter installation done!"
}

node_exporter
