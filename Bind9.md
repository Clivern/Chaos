<p align="center">
    <img alt="Gunner Logo" src="/static/logo.png?v=1.0.0" width="240" />
    <h3 align="center">Gunner</h3>
</p>
<br/>
<p align="center">
    <img src="/static/chart.png?v=1.1.0" width="100%" />
</p>

### Bind Configs Reference

To install bind9 on ubuntu

```bash
$ apt-get install bind9
```

```c
$ cat /etc/bind/named.conf.options

options {
	directory "/var/cache/bind";

    recursion yes;
    allow-recursion { trusted; };

    // This can be the server Public IP or Private IP (Private Network)
    listen-on { 104.248.199.207; };

    allow-transfer { none; };

	// If there is a firewall between you and nameservers you want
	// to talk to, you may need to fix the firewall to allow multiple
	// ports to talk.  See http://www.kb.cert.org/vuls/id/800113

	// If your ISP provided one or more IP addresses for stable
	// nameservers, you probably want to use them as forwarders.
	// Uncomment the following block, and insert the addresses replacing
	// the all-0's placeholder.
	forwarders {
		8.8.8.8;
	};

	//========================================================================
	// If BIND logs error messages about the root key being expired,
	// you will need to update your keys.  See https://www.isc.org/bind-keys
	//========================================================================
	dnssec-validation auto;

	auth-nxdomain no;    # conform to RFC1035
	listen-on-v6 { any; };
};

acl "trusted" {
	77.168.245.136;
};
```

```bash
$ systemctl status bind9

$ systemctl restart bind9
```