#!/bin/bash

function chaos {
    echo "Upgrade chaos ..."

    cd /etc/chaos
    mv config.prod.yml config.back.yml

    LATEST_VERSION=$(curl --silent "https://api.github.com/repos/Clivern/Chaos/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)

    curl -sL https://github.com/Clivern/Chaos/releases/download/v{$LATEST_VERSION}/chaos_Linux_x86_64.tar.gz | tar xz

    rm config.prod.yml
    mv config.back.yml config.prod.yml

    systemctl restart chaos

    echo "Chaos upgrade done!"
}

chaos
