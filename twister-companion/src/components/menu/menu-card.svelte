<script>
	import { Card } from 'flowbite-svelte';

	export let route;
	export let label;
</script>

<Card href={route} horizontal>
	<slot />
	<p class="ml-2">{label}</p>
</Card>
