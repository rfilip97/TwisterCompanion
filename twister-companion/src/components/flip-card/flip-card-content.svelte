<script>
	import FlipCardFront from './flip-card-front.svelte';
	import FlipCardBack from './flip-card-back.svelte';

	export let symbol;
	export let rotated = false;
	export let color = 'white';
</script>

<FlipCardFront {symbol} {rotated} --color={color} />
<FlipCardBack />
