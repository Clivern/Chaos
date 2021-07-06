<p align="center">
    <img alt="Chaos Logo" src="/static/logo.png?v=0.1.0" width="200" />
    <h3 align="center">Chaos</h3>
    <p align="center">A Server Chaos Maker, Set up in Minutes.</p>
    <p align="center">
        <a href="https://github.com/Clivern/Chaos/actions/workflows/api.yml">
            <img src="https://github.com/Clivern/Chaos/actions/workflows/api.yml/badge.svg">
        </a>
        <a href="https://github.com/Clivern/Chaos/actions/workflows/ui.yml">
            <img src="https://github.com/Clivern/Chaos/actions/workflows/ui.yml/badge.svg">
        </a>
        <a href="https://github.com/Clivern/Chaos/releases">
            <img src="https://img.shields.io/badge/Version-v0.1.0-red.svg">
        </a>
        <a href="https://goreportcard.com/report/github.com/Clivern/Chaos">
            <img src="https://goreportcard.com/badge/github.com/clivern/Chaos?v=1.0.0">
        </a>
        <a href="https://godoc.org/github.com/clivern/chaos">
            <img src="https://godoc.org/github.com/clivern/chaos?status.svg">
        </a>
        <a href="https://github.com/Clivern/Chaos/blob/main/LICENSE">
            <img src="https://img.shields.io/badge/LICENSE-MIT-orange.svg">
        </a>
    </p>
</p>

This tool can cause a chaos to running servers. It can cause random reboots, traffic drop, latency, increase cpu/memory/io usage  or health checks failure. Chaos needed badly to test monitoring systems efficiency or systems resilience.


### Getting Started

To install `Chaos`, Use the following script:

```zsh
$ bash < <(curl -s https://raw.githubusercontent.com/Clivern/Chaos/main/deployment/ubuntu/install.sh)

# Get The Public IP
$ curl https://ipinfo.io/ip
x.x.x.x
```

### API Definitions

To fetch roles

```zsh
$ curl -X GET -H "X-API-KEY: xxxx-xxxx-xxxx-xxxx" "http://localhost:8000/api/v1/role"
```

To Delete role

```zsh
$ curl -X DELETE -H "X-API-KEY: xxxx-xxxx-xxxx-xxxx" "http://localhost:8000/api/v1/role/$ID"
```

To create a role

```zsh
$ curl -X POST -H "X-API-KEY: xxxx-xxxx-xxxx-xxxx" "http://localhost:8000/api/v1/role" \
    -d '{"name": "stress", "value": {"tool":"stress", "cpu":"3"}, "startAt": "2023-02-21T12:00:00Z","endAt": "2023-02-21T17:00:00Z"}'
```

### Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Chaos is maintained under the [Semantic Versioning guidelines](https://semver.org/) and release process is predictable and business-friendly.

See the [Releases section of our GitHub project](https://github.com/clivern/chaos/releases) for changelogs for each release version of Chaos. It contains summaries of the most noteworthy changes made in each release. Also see the [Milestones section](https://github.com/clivern/chaos/milestones) for the future roadmap.


### Bug tracker

If you have any suggestions, bug reports, or annoyances please report them to our issue tracker at https://github.com/clivern/chaos/issues


### Security Issues

If you discover a security vulnerability within Chaos, please send an email to [hello@clivern.com](mailto:hello@clivern.com)


### Contributing

We are an open source, community-driven project so please feel free to join us. see the [contributing guidelines](CONTRIBUTING.md) for more details.


### License

© 2022, Clivern. Released under [MIT License](https://opensource.org/licenses/mit-license.php).

**Chaos** is authored and maintained by [@clivern](http://github.com/clivern).
