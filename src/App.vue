<template>
    <div class="container">
        <app-header :title="title"></app-header>
        <hr>
        <app-body></app-body>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>

	export default {
		data() {
			return {
				title: 'Server Status'
			}
		}
	}
</script>

<style>

</style>
