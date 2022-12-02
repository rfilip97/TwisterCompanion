<script>
	import Hand from './hand.svelte';
	import Foot from './foot.svelte';
</script>

<div class="grid h-screen place-items-center">
	<div class="card-container ">
		<Hand side="left" />
	</div>
</div>

<style lang="scss">
	.card-container {
        position: relative;

		&:hover {
			transform: scale(0.7);
		}
	}
</style>
