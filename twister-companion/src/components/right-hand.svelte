<script>
	import Limb from './limb.svelte';

	export let color = 'white';

	const symbol = '✋';
</script>

<Limb {symbol} {color} rotate={true} />
