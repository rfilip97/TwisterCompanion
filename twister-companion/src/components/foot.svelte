<script>
	import { Card } from 'flowbite-svelte';

	export let side = 'right';

	const foot = '🦶';
</script>

<Card padding="sm">
	<div class="flex justify-center">
		<p class="text-9xl {side === 'left' ? 'leftFoot' : ''}">{foot}</p>
	</div>
</Card>

<style>
	.leftFoot {
		transform: rotateY(180deg);
	}
</style>
