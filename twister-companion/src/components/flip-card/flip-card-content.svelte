<script>
	import FlipCardFront from './flip-card-front.svelte';
	import FlipCardBack from './flip-card-back.svelte';

	export let symbol;
	export let rotated = false;
</script>

<FlipCardFront {symbol} {rotated} />
<FlipCardBack />
