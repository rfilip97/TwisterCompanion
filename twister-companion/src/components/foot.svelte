<script>
	import Limb from './limb.svelte';

	export let side = 'right';
	export let color = 'white';

	const symbol = '🦶';
</script>

<Limb {symbol} {side} {color} />
