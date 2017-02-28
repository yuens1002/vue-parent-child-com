<template>
	<div class="col-xs-12 col-sm-6">
				<p>{{text}}</p>
				<p>Server ID: {{server.id}}</p>
				<p>Server Status: {{server.status}}</p>
				<!-- done by passing a function props -->
				<button @click="changeStatusFn(server)" v-if="Object.keys(server).length !== 0">change status</button>
				<!-- done by eventBus -->
				<button @click="changeStatus" v-if="Object.keys(server).length !== 0">change status</button>
		</div>
</template>

<script>
	import {eventBus} from '../main';
	export default {
		props: {
			text: {
				type: String,
				required: true
			},
			server: {
				type: Object
			},
			changeStatusFn: Function
		},
		methods: {
			changeStatus() {
				eventBus.$emit('statusChanged', this.server);
			}
		}
	}
</script>
