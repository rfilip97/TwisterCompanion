<script>
	import { Card } from 'flowbite-svelte';

	export let symbol;
	export let side = 'right';
	export let color = 'white';
</script>

<Card padding="sm" {color}>
	<div>
		<p class="text-9xl {side === 'left' ? 'reversedSide' : ''}">{symbol}</p>
	</div>
</Card>

<style>
	.reversedSide {
		transform: rotateY(180deg);
	}
</style>
