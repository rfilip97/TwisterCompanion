<script>
	import { Card } from 'flowbite-svelte';

	export let side = 'right';

	const hand = '🫱';
</script>

<Card padding="sm">
	<div class="flex justify-center">
		<p class="text-9xl {side === 'right' ? 'rightHand' : ''}">{hand}</p>
	</div>
</Card>

<style>
	.rightHand {
		transform: rotateY(180deg);
	}
</style>
