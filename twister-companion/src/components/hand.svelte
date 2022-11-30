<script>
	import Limb from './limb.svelte';

	export let side = 'right';

	const symbol = '🫱';
</script>

<Limb {symbol} {side} />
