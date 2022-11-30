<script>
	import { Card } from 'flowbite-svelte';

    export let symbol;
	export let side = 'right';
</script>

<Card padding="sm">
	<div class="flex justify-center">
		<p class="text-9xl {side === 'left' ? 'reversedSide' : ''}">{symbol}</p>
	</div>
</Card>

<style>
	.reversedSide {
		transform: rotateY(180deg);
	}
</style>
