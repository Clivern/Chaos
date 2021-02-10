<p align="center">
    <img alt="Langmore Logo" src="/static/logo.png?v=1.0.0" width="240" />
    <h3 align="center">Langmore</h3>
    <p align="center">Highly Available, Secure and Reliable DNS Server, Set up in Minutes.</p>
    <p align="center">
        <a href="https://github.com/Clivern/Langmore/actions/workflows/lgtm.yml">
            <img src="https://github.com/Clivern/Langmore/actions/workflows/lgtm.yml/badge.svg"/>
        </a>
        <a href="https://github.com/Clivern/Langmore/releases">
            <img src="https://img.shields.io/badge/Version-v1.0.0-red.svg">
        </a>
        <a href="https://goreportcard.com/report/github.com/Clivern/Langmore">
            <img src="https://goreportcard.com/badge/github.com/clivern/Langmore?v=1.0.0">
        </a>
        <a href="https://godoc.org/github.com/clivern/langmore">
            <img src="https://godoc.org/github.com/clivern/langmore?status.svg">
        </a>
        <a href="https://github.com/Clivern/Langmore/blob/main/LICENSE">
            <img src="https://img.shields.io/badge/LICENSE-MIT-orange.svg">
        </a>
    </p>
</p>
<br/>
<p align="center">
    <img src="/static/chart.png?v=1.1.0" width="100%" />
</p>

Langmore is a Highly Available, Secure and Reliable DNS Server. It provides features like Web Dashboard, REST API, Load Balancing, DNS Notify, Dynamic Update, Split DNS, IPv6, and more.


## Documentation

### Deployment

Download [the latest langmore binary](https://github.com/Clivern/Langmore/releases). Make it executable from everywhere.

```zsh
$ export LANGMORE_LATEST_VERSION=$(curl --silent "https://api.github.com/repos/Clivern/Langmore/releases/latest" | jq '.tag_name' | sed -E 's/.*"([^"]+)".*/\1/' | tr -d v)

$ curl -sL https://github.com/Clivern/Langmore/releases/download/v{$LANGMORE_LATEST_VERSION}/langmore_{$LANGMORE_LATEST_VERSION}_Linux_x86_64.tar.gz | tar xz
```

Then install etcd cluster or single node, please refer to etcd docs or bin directory inside this repository.

## Architecture

For more in depth explaination how langmore single and multi (cluster) setup works, Please check this [document](Architecture.md).


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Langmore is maintained under the [Semantic Versioning guidelines](https://semver.org/) and release process is predictable and business-friendly.

See the [Releases section of our GitHub project](https://github.com/clivern/langmore/releases) for changelogs for each release version of Langmore. It contains summaries of the most noteworthy changes made in each release. Also see the [Milestones section](https://github.com/clivern/langmore/milestones) for the future roadmap.


## Bug tracker

If you have any suggestions, bug reports, or annoyances please report them to our issue tracker at https://github.com/clivern/langmore/issues


## Security Issues

If you discover a security vulnerability within Langmore, please send an email to [hello@clivern.com](mailto:hello@clivern.com)


## Contributing

We are an open source, community-driven project so please feel free to join us. see the [contributing guidelines](CONTRIBUTING.md) for more details.


## License

© 2022, Clivern. Released under [MIT License](https://opensource.org/licenses/mit-license.php).

**Langmore** is authored and maintained by [@clivern](http://github.com/clivern).
