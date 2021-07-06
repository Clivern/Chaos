<!-- @format -->

<template>
	<div class="columns is-desktop is-centered">
		<div class="column is-4">
			<br /><br />
			<section>
				<b-field label="Name">
					<b-input
						v-model="form.name"
						placeholder="Packets Drop By 10%"
					></b-input>
				</b-field>
				<b-field label="Mode Type">
					<b-select
						placeholder="Select a mode type"
						expanded
						v-model="form.mode"
						@input="onModeChange()"
					>
						<option value="stress">Stress</option>
						<option value="network_delay">Network Delay</option>
						<option value="network_loss">Network Loss</option>
					</b-select>
				</b-field>

				<template
					v-if="form.mode == 'network_delay' || form.mode == 'network_loss'"
				>
					<b-field label="Network Interface">
						<b-select
							placeholder="Select a network net_interface"
							expanded
							v-model="form.net_interface"
						>
							<option
								v-for="net_interface in form.net_interfaces"
								v-bind:key="net_interface"
							>
								{{ net_interface }}
							</option>
						</b-select>
					</b-field>
				</template>
				<b-field label="Select local start time">
					<b-datetimepicker
						v-model="form.startAt"
						placeholder="Click to select..."
					>
					</b-datetimepicker>
				</b-field>
				<b-field label="Select local end time">
					<b-datetimepicker
						v-model="form.endAt"
						placeholder="Click to select..."
					>
					</b-datetimepicker>
				</b-field>
				<br />
				<div class="field">
					<p class="control">
						<b-button
							type="is-danger is-light"
							v-bind:disabled="form.button_disabled"
							@click="storeEvent"
							>Submit</b-button
						>
					</p>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: "DeployPage",
	data() {
		return {
			form: {
				button_disabled: false,
				name: "",
				mode: "",
				net_interface: "",
				startAt: "",
				endAt: "",
				net_interfaces: [],
			},
			// Loader
			loader: {
				isFullPage: true,
				ref: null,
			},
		};
	},
	methods: {
		loading() {
			this.loader.ref = this.$buefy.loading.open({
				container: this.loader.isFullPage ? null : this.$refs.element.$el,
			});
		},

		onModeChange() {},

		loadInterfaces() {
			this.loading();

			this.$store.dispatch("role/getInterfacesAction", {}).then(
				() => {
					let data = this.$store.getters["role/getInterfaces"];

					if (data) {
						this.form.net_interfaces = data;
					} else {
						this.form.net_interfaces = [];
					}

					this.loader.ref.close();
				},
				(err) => {
					this.$buefy.toast.open({
						message: err.response.data.errorMessage,
						type: "is-danger is-light",
					});
					this.loader.ref.close();
				}
			);
		},

		storeEvent() {
			this.loading();
			this.form.button_disabled = true;

			this.$store
				.dispatch("role/createRoleAction", {
					name: this.form.name,
					startAt: this.form.startAt,
					endAt: this.form.endAt,
					value: {
						mode: this.form.mode,
						net_interface: this.form.net_interface,
					},
				})
				.then(
					() => {
						this.$buefy.toast.open({
							message: "Role created successfully!",
							type: "is-success",
						});

						this.form.button_disabled = false;
						this.loader.ref.close();
						this.$router.push("/roles");
					},
					(err) => {
						if (err.response.data.errorMessage) {
							this.$buefy.toast.open({
								message: err.response.data.errorMessage,
								type: "is-danger is-light",
							});
						} else {
							this.$buefy.toast.open({
								message: "Error status code: " + err.response.status,
								type: "is-danger is-light",
							});
						}
						this.form.button_disabled = false;
						this.loader.ref.close();
					}
				);
		},
	},
	mounted() {
		this.loadInterfaces();
	},
};
</script>
