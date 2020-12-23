<p align="center">
    <img alt="Knot Logo" src="/static/logo.png?v=1.0.0" width="240" />
    <h3 align="center">Knot</h3>
</p>
<br/>
<p align="center">
    <img src="/static/chart.png?v=1.1.0" width="100%" />
</p>

## Architecture

### Multi-Node Setup (Cluster)

- `etcd` is used as a datastore. Each `knot` instance talks to the local etcd service. etcd nodes reach each other through a private network.

- `Knot` slaves updates only the local etcd with new changes. If the change affects the
`DNS` records, it will also change the global integrity `UUID` and set the local integrity value to be blank.

- `Knot` master updates the local etcd with new changes and it also updates the local `Bind9`
to be a master too. If the global integrity `UUID` not equal the local one, It will update `Bind9` `DNS`
records, then it updates the global integrity `UUID` and the local integrity `UUID` to a new value.

- If the master `Knot` goes down, a new node will be the master. It will the figure out that
the global integrity `UUID` is not equal the local integrity `UUID`. then it will start updating the
`DNS` records of the `Bind9` and make it a master.

### Single-Node Setup
