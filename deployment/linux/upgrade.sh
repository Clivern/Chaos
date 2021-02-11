#!/bin/bash

function gunner {
    echo "Upgrade gunner ..."

    cd /etc/gunner
    mv config.prod.yml config.back.yml

    LATEST_VERSION=$(curl --silent "https://api.github.com/repos/Clivern/gunner/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)

    curl -sL https://github.com/Clivern/gunner/releases/download/v{$LATEST_VERSION}/gunner_{$LATEST_VERSION}_Linux_x86_64.tar.gz | tar xz

    rm config.prod.yml
    mv config.back.yml config.prod.yml

    systemctl restart gunner

    echo "gunner upgrade done!"
}

gunner
