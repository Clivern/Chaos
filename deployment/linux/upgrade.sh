#!/bin/bash

function langmore {
    echo "Upgrade langmore ..."

    cd /etc/langmore
    mv config.prod.yml config.back.yml

    LATEST_VERSION=$(curl --silent "https://api.github.com/repos/Clivern/langmore/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)

    curl -sL https://github.com/Clivern/langmore/releases/download/v{$LATEST_VERSION}/langmore_{$LATEST_VERSION}_Linux_x86_64.tar.gz | tar xz

    rm config.prod.yml
    mv config.back.yml config.prod.yml

    systemctl restart langmore

    echo "langmore upgrade done!"
}

langmore
