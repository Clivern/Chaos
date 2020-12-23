#!/bin/bash

function upgrade_knot {
    echo "Upgrade knot ..."

    cd /etc/knot
    mv config.prod.yml config.back.yml

    LATEST_VERSION=$(curl --silent "https://api.github.com/repos/Clivern/knot/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)

    curl -sL https://github.com/Clivern/knot/releases/download/v{$LATEST_VERSION}/knot_{$LATEST_VERSION}_Linux_x86_64.tar.gz | tar xz

    rm config.prod.yml
    mv config.back.yml config.prod.yml

    systemctl restart knot

    echo "Knot upgrade done!"
}

upgrade_knot
