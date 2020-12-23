<p align="center">
    <img alt="Knot Logo" src="/static/logo.png?v=1.0.0" width="240" />
    <h3 align="center">Knot</h3>
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

    // This can be the Server Public IP or Private IP (Private Network)
    listen-on { x.x.x.x; };

    allow-transfer { none; };

	// If there is a firewall between you and nameservers you want
	// to talk to, you may need to fix the firewall to allow multiple
	// ports to talk.  See http://www.kb.cert.org/vuls/id/800113

	// If your ISP provided one or more IP addresses for stable
	// nameservers, you probably want to use them as forwarders.
	// Uncomment the following block, and insert the addresses replacing
	// the all-0's placeholder.
	forwarders {
	    // Google Public DNS
	    8.8.8.8;
	    8.8.4.4;

	    // Cloudflare DNS
	    1.1.1.1;
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
	// localhost (RFC 3330) - Loopback-Device addresses    127.0.0.0 - 127.255.255.255
	127.0.0.0/8;
	x.x.x.x;
};
```

```bash
$ systemctl status bind9

$ systemctl restart bind9
```