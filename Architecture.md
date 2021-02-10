## Architecture

### Overview

- `Langmore` slaves updates only the local etcd with new changes. If the change affects the
`DNS` records, it will also change the global integrity `UUID` and set the local integrity value to be blank.

- `Langmore` master updates the local etcd with new changes and it also updates the local `Bind9`
to be a master too. If the global integrity `UUID` not equal the local one, It will update `Bind9` `DNS`
records, then it updates the global integrity `UUID` and the local integrity `UUID` to a new value.

- If the master `Langmore` goes down, a new node will be the master. It will the figure out that
the global integrity `UUID` is not equal the local integrity `UUID`. then it will start updating the
`DNS` records of the `Bind9`.
