/** @format */

"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([
	[306],
	{
		7306: function (e, t, s) {
			s.r(t),
				s.d(t, {
					default: function () {
						return h;
					},
				});
			var a = function () {
					var e = this,
						t = e.$createElement;
					e._self._c;
					return e._m(0);
				},
				r = [
					function () {
						var e = this,
							t = e.$createElement,
							a = e._self._c || t;
						return a("div", { staticClass: "home" }, [
							a("br"),
							a("br"),
							a("br"),
							a("img", { attrs: { alt: "logo", src: s(6949), width: "200" } }),
							a("div", { staticClass: "hello" }, [
								a("br"),
								a("br"),
								a("strong", [e._v("Welcome to Chaos")]),
								a("p", [
									e._v(
										" If you have any suggestions, bug reports, or annoyances "
									),
									a("br"),
									e._v("please report them to our "),
									a(
										"a",
										{
											attrs: {
												href: "https://github.com/Clivern/Chaos/issues",
												target: "_blank",
												rel: "noopener",
											},
										},
										[e._v("issue tracker")]
									),
									e._v(". "),
								]),
								a("br"),
								a("small", [
									e._v(" Made with "),
									a("span", { staticClass: "icon has-text-danger" }, [
										a("i", { staticClass: "fas fa-heart" }),
									]),
									e._v(" by "),
									a(
										"a",
										{
											attrs: {
												href: "https://github.com/Clivern",
												target: "_blank",
												rel: "noopener",
											},
										},
										[e._v("Clivern")]
									),
									a("br"),
								]),
							]),
						]);
					},
				],
				n = {
					name: "HomePage",
					data() {
						return { loader: { isFullPage: !0, ref: null } };
					},
					methods: {
						loading() {
							this.loader.ref = this.$buefy.loading.open({
								container: this.loader.isFullPage
									? null
									: this.$refs.element.$el,
							});
						},
					},
					mounted() {
						this.$emit("refresh-state"),
							this.loading(),
							this.$store.dispatch("health/fetchReadiness").then(
								() => {
									(this.backend_status =
										this.$store.getters["health/getReadiness"].status),
										this.loader.ref.close();
								},
								(e) => {
									this.$buefy.toast.open({
										message: e,
										type: "is-danger is-light",
									}),
										this.loader.ref.close();
								}
							);
					},
				},
				l = n,
				i = s(1001),
				o = (0, i.Z)(l, a, r, !1, null, "7f7f483f", null),
				h = o.exports;
		},
		6949: function (e, t, s) {
			e.exports = s.p + "img/logo.369eedd2.png";
		},
	},
]);
//# sourceMappingURL=306.023137e2.js.map
