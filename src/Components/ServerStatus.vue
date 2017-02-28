<template>
		<li class="list-group-item">
			{{text + server.id + ' ' + server.status}}
			<button @click="showDetail">Show Details</button>
		</li>

</template>

<script>
	import {eventBus} from '../main'
	export default {
		props: ['server'],
		methods: {
			showDetail() {
				eventBus.$emit('showDetailClkd', this.server);
			}
		},
		data() {
			return {
				text: 'Server #'
			}
		}
	}
</script>
