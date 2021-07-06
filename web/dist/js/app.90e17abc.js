/** @format */

(function () {
	var e = {
			4882: function (e, t, n) {
				"use strict";
				var r = n(8935),
					o = function () {
						var e = this,
							t = e.$createElement,
							n = e._self._c || t;
						return n(
							"div",
							{ attrs: { id: "app" } },
							[
								n(
									"div",
									{ attrs: { id: "nav" } },
									[
										n(
											"router-link",
											{ attrs: { to: "/" } },
											[
												n("b-icon", {
													attrs: {
														pack: "fas",
														icon: "home",
														size: "is-small",
													},
												}),
												e._v(" Home"),
											],
											1
										),
										e.logged
											? [
													e._v(" | "),
													n(
														"router-link",
														{ attrs: { to: "/roles" } },
														[
															n("b-icon", {
																attrs: {
																	pack: "fas",
																	icon: "server",
																	size: "is-small",
																},
															}),
															e._v(" Roles"),
														],
														1
													),
													e._v(" | "),
													n(
														"a",
														{ attrs: { href: "#" }, on: { click: e.logout } },
														[
															n("b-icon", {
																attrs: {
																	pack: "fas",
																	icon: "sign-out-alt",
																	size: "is-small",
																},
															}),
															e._v(" Logout"),
														],
														1
													),
											  ]
											: [
													e._v(" | "),
													n(
														"router-link",
														{ attrs: { to: "/login" } },
														[
															n("b-icon", {
																attrs: {
																	pack: "fas",
																	icon: "sign-in-alt",
																	size: "is-small",
																},
															}),
															e._v(" Login"),
														],
														1
													),
											  ],
									],
									2
								),
								n("router-view", { on: { "refresh-state": e.refreshState } }),
							],
							1
						);
					},
					a = [],
					i = {
						data() {
							return { logged: null != localStorage.getItem("x_api_key") };
						},
						methods: {
							logout() {
								(this.logged = !1),
									localStorage.removeItem("x_api_key"),
									this.$router.push("/login");
							},
							refreshState() {
								this.logged = null != localStorage.getItem("x_api_key");
							},
						},
						mounted() {
							this.logged = null != localStorage.getItem("x_api_key");
						},
					},
					u = i,
					s = n(1001),
					l = (0, s.Z)(u, o, a, !1, null, null, null),
					c = l.exports,
					f = n(2809);
				r.Z.use(f.Z);
				const d = [
						{
							path: "/",
							name: "Home",
							component: () => n.e(306).then(n.bind(n, 7306)),
							meta: { requiresAuth: !1 },
						},
						{
							path: "/login",
							name: "Login",
							component: () => n.e(114).then(n.bind(n, 114)),
							meta: { requiresAuth: !1 },
						},
						{
							path: "/roles",
							name: "Roles",
							component: () => n.e(304).then(n.bind(n, 5304)),
							meta: { requiresAuth: !0 },
						},
						{
							path: "/404",
							name: "NotFound",
							component: () => n.e(965).then(n.bind(n, 4965)),
							meta: { requiresAuth: !1 },
						},
						{ path: "*", redirect: "/404" },
					],
					h = new f.Z({ routes: d });
				h.beforeEach((e, t, n) => {
					e.matched.some((e) => e.meta.requiresAuth)
						? null == localStorage.getItem("x_api_key") &&
						  n({ path: "/login", params: { nextUrl: e.fullPath } })
						: "Login" == e.name && localStorage.removeItem("x_api_key"),
						n();
				});
				var p = h,
					g = n(6166),
					m = n.n(g),
					v = n(5564),
					b = (n(1588), n(4665));
				const _ = {
					getURL(e) {
						let t = "";
						return (
							{ NODE_ENV: "production", BASE_URL: "/" }.CHAOS_DASHBOARD_URL &&
								(t = {
									NODE_ENV: "production",
									BASE_URL: "/",
								}.CHAOS_DASHBOARD_URL.replace(/\/$/, "")),
							t + e
						);
					},
					getHeaders() {
						let e = "";
						return (
							null != localStorage.getItem("x_api_key") &&
								(e = localStorage.getItem("x_api_key")),
							{
								crossdomain: !0,
								headers: {
									"X-API-Key": e,
									"X-Client-ID": "dashboard",
									"X-Requested-With": "XMLHttpRequest",
									"Content-Type": "application/json",
								},
							}
						);
					},
					get(e) {
						return m().get(this.getURL(e), this.getHeaders());
					},
					delete(e) {
						return m()["delete"](this.getURL(e), this.getHeaders());
					},
					post(e, t = {}) {
						return m().post(this.getURL(e), t, this.getHeaders());
					},
					put(e, t = {}) {
						return m().put(this.getURL(e), t, this.getHeaders());
					},
				};
				var y = _;
				const S = () => y.get("/_ready"),
					k = () => y.get("/_health"),
					E = () => ({ readiness: {}, health: {} }),
					A = { getReadiness: (e) => e.readiness, getHealth: (e) => e.health },
					w = {
						async fetchReadiness({ commit: e }) {
							const t = await S();
							return e("SET_READINESS", t.data), t;
						},
						async fetchHealth({ commit: e }) {
							const t = await k();
							return e("SET_HEALTH", t.data), t;
						},
					},
					L = {
						SET_READINESS(e, t) {
							e.readiness = t;
						},
						SET_HEALTH(e, t) {
							e.health = t;
						},
					};
				var O = {
						namespaced: !0,
						state: E,
						getters: A,
						actions: w,
						mutations: L,
					},
					H = n(6691),
					R = n.n(H);
				r.Z.use(b.ZP);
				var C = new b.ZP.Store({ modules: { health: O, role: R() } });
				r.Z.use(b.ZP),
					r.Z.use(v.ZP, { defaultIconPack: "fas" }),
					(r.Z.config.productionTip = !1),
					(r.Z.prototype.$http = m()),
					new r.Z({ store: C, router: p, render: (e) => e(c) }).$mount("#app");
			},
			6691: function () {},
		},
		t = {};
	function n(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var a = (t[r] = { exports: {} });
		return e[r](a, a.exports, n), a.exports;
	}
	(n.m = e),
		(function () {
			var e = [];
			n.O = function (t, r, o, a) {
				if (!r) {
					var i = 1 / 0;
					for (c = 0; c < e.length; c++) {
						(r = e[c][0]), (o = e[c][1]), (a = e[c][2]);
						for (var u = !0, s = 0; s < r.length; s++)
							(!1 & a || i >= a) &&
							Object.keys(n.O).every(function (e) {
								return n.O[e](r[s]);
							})
								? r.splice(s--, 1)
								: ((u = !1), a < i && (i = a));
						if (u) {
							e.splice(c--, 1);
							var l = o();
							void 0 !== l && (t = l);
						}
					}
					return t;
				}
				a = a || 0;
				for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
				e[c] = [r, o, a];
			};
		})(),
		(function () {
			n.n = function (e) {
				var t =
					e && e.__esModule
						? function () {
								return e["default"];
						  }
						: function () {
								return e;
						  };
				return n.d(t, { a: t }), t;
			};
		})(),
		(function () {
			n.d = function (e, t) {
				for (var r in t)
					n.o(t, r) &&
						!n.o(e, r) &&
						Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
			};
		})(),
		(function () {
			(n.f = {}),
				(n.e = function (e) {
					return Promise.all(
						Object.keys(n.f).reduce(function (t, r) {
							return n.f[r](e, t), t;
						}, [])
					);
				});
		})(),
		(function () {
			n.u = function (e) {
				return (
					"js/" +
					e +
					"." +
					{
						114: "6e6d7be3",
						304: "4177ad9c",
						306: "023137e2",
						965: "e8eac4a9",
					}[e] +
					".js"
				);
			};
		})(),
		(function () {
			n.miniCssF = function (e) {
				return "css/" + e + ".4d66bcf2.css";
			};
		})(),
		(function () {
			n.g = (function () {
				if ("object" === typeof globalThis) return globalThis;
				try {
					return this || new Function("return this")();
				} catch (e) {
					if ("object" === typeof window) return window;
				}
			})();
		})(),
		(function () {
			n.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			};
		})(),
		(function () {
			var e = {},
				t = "web:";
			n.l = function (r, o, a, i) {
				if (e[r]) e[r].push(o);
				else {
					var u, s;
					if (void 0 !== a)
						for (
							var l = document.getElementsByTagName("script"), c = 0;
							c < l.length;
							c++
						) {
							var f = l[c];
							if (
								f.getAttribute("src") == r ||
								f.getAttribute("data-webpack") == t + a
							) {
								u = f;
								break;
							}
						}
					u ||
						((s = !0),
						(u = document.createElement("script")),
						(u.charset = "utf-8"),
						(u.timeout = 120),
						n.nc && u.setAttribute("nonce", n.nc),
						u.setAttribute("data-webpack", t + a),
						(u.src = r)),
						(e[r] = [o]);
					var d = function (t, n) {
							(u.onerror = u.onload = null), clearTimeout(h);
							var o = e[r];
							if (
								(delete e[r],
								u.parentNode && u.parentNode.removeChild(u),
								o &&
									o.forEach(function (e) {
										return e(n);
									}),
								t)
							)
								return t(n);
						},
						h = setTimeout(
							d.bind(null, void 0, { type: "timeout", target: u }),
							12e4
						);
					(u.onerror = d.bind(null, u.onerror)),
						(u.onload = d.bind(null, u.onload)),
						s && document.head.appendChild(u);
				}
			};
		})(),
		(function () {
			n.r = function (e) {
				"undefined" !== typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(e, "__esModule", { value: !0 });
			};
		})(),
		(function () {
			n.p = "/";
		})(),
		(function () {
			var e = function (e, t, n, r) {
					var o = document.createElement("link");
					(o.rel = "stylesheet"), (o.type = "text/css");
					var a = function (a) {
						if (((o.onerror = o.onload = null), "load" === a.type)) n();
						else {
							var i = a && ("load" === a.type ? "missing" : a.type),
								u = (a && a.target && a.target.href) || t,
								s = new Error(
									"Loading CSS chunk " + e + " failed.\n(" + u + ")"
								);
							(s.code = "CSS_CHUNK_LOAD_FAILED"),
								(s.type = i),
								(s.request = u),
								o.parentNode.removeChild(o),
								r(s);
						}
					};
					return (
						(o.onerror = o.onload = a),
						(o.href = t),
						document.head.appendChild(o),
						o
					);
				},
				t = function (e, t) {
					for (
						var n = document.getElementsByTagName("link"), r = 0;
						r < n.length;
						r++
					) {
						var o = n[r],
							a = o.getAttribute("data-href") || o.getAttribute("href");
						if ("stylesheet" === o.rel && (a === e || a === t)) return o;
					}
					var i = document.getElementsByTagName("style");
					for (r = 0; r < i.length; r++) {
						(o = i[r]), (a = o.getAttribute("data-href"));
						if (a === e || a === t) return o;
					}
				},
				r = function (r) {
					return new Promise(function (o, a) {
						var i = n.miniCssF(r),
							u = n.p + i;
						if (t(i, u)) return o();
						e(r, u, o, a);
					});
				},
				o = { 143: 0 };
			n.f.miniCss = function (e, t) {
				var n = { 306: 1 };
				o[e]
					? t.push(o[e])
					: 0 !== o[e] &&
					  n[e] &&
					  t.push(
							(o[e] = r(e).then(
								function () {
									o[e] = 0;
								},
								function (t) {
									throw (delete o[e], t);
								}
							))
					  );
			};
		})(),
		(function () {
			var e = { 143: 0 };
			(n.f.j = function (t, r) {
				var o = n.o(e, t) ? e[t] : void 0;
				if (0 !== o)
					if (o) r.push(o[2]);
					else {
						var a = new Promise(function (n, r) {
							o = e[t] = [n, r];
						});
						r.push((o[2] = a));
						var i = n.p + n.u(t),
							u = new Error(),
							s = function (r) {
								if (n.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
									var a = r && ("load" === r.type ? "missing" : r.type),
										i = r && r.target && r.target.src;
									(u.message =
										"Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
										(u.name = "ChunkLoadError"),
										(u.type = a),
										(u.request = i),
										o[1](u);
								}
							};
						n.l(i, s, "chunk-" + t, t);
					}
			}),
				(n.O.j = function (t) {
					return 0 === e[t];
				});
			var t = function (t, r) {
					var o,
						a,
						i = r[0],
						u = r[1],
						s = r[2],
						l = 0;
					if (
						i.some(function (t) {
							return 0 !== e[t];
						})
					) {
						for (o in u) n.o(u, o) && (n.m[o] = u[o]);
						if (s) var c = s(n);
					}
					for (t && t(r); l < i.length; l++)
						(a = i[l]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
					return n.O(c);
				},
				r = (self["webpackChunkweb"] = self["webpackChunkweb"] || []);
			r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
		})();
	var r = n.O(void 0, [998], function () {
		return n(4882);
	});
	r = n.O(r);
})();
//# sourceMappingURL=app.90e17abc.js.map
