<template>
	<div class="row">
		<div class="col-xs-12 col-sm-6">
				<ul class="list-group">
						<app-status v-for="server in servers" :server="server"></app-status>
				</ul>
		</div>
		<app-detail :text="text" :server="serverStat" :changeStatusFn="changeStatus"></app-detail>
</div>
</template>

<script>
	import {eventBus} from '../main';
	import ServerDetail from './ServerDetail.vue';
	import ServerStatus from './ServerStatus.vue';
	export default {
		data() {
			return {
				text: 'Server Details',
				servers: [
					{id: 0, status: 'critical'},
					{id: 1, status: 'bad'},
					{id: 2, status: 'okay'},
					{id: 3, status: 'critical'},
					{id: 4, status: 'critical'},
					{id: 5, status: 'critical'}
				],
				serverStat: {},
			}
		},
		methods: {
			changeStatus(data) {
				this.servers.forEach((server)=> {
					if (server.id === data.id) {
						server.status = 'normal';
					}
				});
			}
		},
		components: {
			'app-status': ServerStatus,
			'app-detail': ServerDetail
		},
		created() {
			eventBus.$on('showDetailClkd', (data) => {
				this.serverStat = data;
			});
			eventBus.$on('statusChanged', (data) => {
				this.servers.forEach((server)=> {
					if (server.id === data.id) {
						server.status = 'normal';
					}
				});
			});
		}
	}
</script>
