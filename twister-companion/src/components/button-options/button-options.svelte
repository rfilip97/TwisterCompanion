<script>
	import { Button } from 'flowbite-svelte';

	export let onClick = () => {};
</script>

<Button color="dark" pill={true} class="!p-2" on:click={onClick}>
	<slot />
</Button>
