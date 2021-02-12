#!/bin/bash

function install_dependencies {
    echo "Installing dependencies ..."

    apt-get update

    apt-get upgrade -y

    apt-get install jq bind9 -y

    echo "Installing dependencies done!"
}

function install_etcd {
    echo "Installing etcd ..."

    ETCD_VER=v3.5.4

    GOOGLE_URL=https://storage.googleapis.com/etcd
    GITHUB_URL=https://github.com/etcd-io/etcd/releases/download
    DOWNLOAD_URL=${GOOGLE_URL}

    rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz
    rm -rf /tmp/etcd-download-test && mkdir -p /tmp/etcd-download-test

    curl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz -o /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz
    tar xzvf /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz -C /tmp/etcd-download-test --strip-components=1
    rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz

    /tmp/etcd-download-test/etcd --version
    /tmp/etcd-download-test/etcdctl version

    cp /tmp/etcd-download-test/etcd /usr/local/bin/
    cp /tmp/etcd-download-test/etcdctl /usr/local/bin/

    mkdir -p /var/lib/etcd/
    mkdir /etc/etcd

    groupadd --system etcd
    useradd -s /sbin/nologin --system -g etcd etcd

    chown -R etcd:etcd /var/lib/etcd/

    echo "[Unit]
Description=Etcd KV Store
Documentation=https://github.com/etcd-io/etcd
After=network.target

[Service]
User=etcd
Type=notify
Environment=ETCD_DATA_DIR=/var/lib/etcd
Environment=ETCD_NAME=%m
ExecStart=/usr/local/bin/etcd --listen-client-urls http://127.0.0.1:2379 --advertise-client-urls http://127.0.0.1:2379
Restart=always
RestartSec=10s
LimitNOFILE=40000

[Install]
WantedBy=multi-user.target" > /etc/systemd/system/etcd.service

    systemctl daemon-reload
    systemctl enable etcd.service
    systemctl start etcd.service

    echo "etcd installation done!"
}

function install_gunner {
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

    echo "Gunner installation done!"
}

install_dependencies
install_etcd
install_gunner
