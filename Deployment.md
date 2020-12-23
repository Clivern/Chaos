<p align="center">
    <img alt="Knot Logo" src="/static/logo.png?v=1.0.0" width="240" />
    <h3 align="center">Knot</h3>
</p>
<br/>
<p align="center">
    <img src="/static/chart.png?v=1.1.0" width="100%" />
</p>

## Deployment

Download [the latest knot binary](https://github.com/Clivern/Knot/releases). Make it executable from everywhere.

```zsh
$ export KNOT_LATEST_VERSION=$(curl --silent "https://api.github.com/repos/Clivern/Knot/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)

$ curl -sL https://github.com/Clivern/Knot/releases/download/v{$KNOT_LATEST_VERSION}/knot_{$KNOT_LATEST_VERSION}_Linux_x86_64.tar.gz | tar xz
```

Then install etcd cluster or single node, please refer to etcd docs or bin directory inside this repository.
