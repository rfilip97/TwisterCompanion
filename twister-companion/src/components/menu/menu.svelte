<script>
	import { Drawer, Button, CloseButton } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	let hidden1 = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
</script>

<div>
	<Button on:click={() => (hidden1 = false)}>Show drawer</Button>
</div>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1">
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
		>
			Menu
		</h5>
		<CloseButton on:click={() => (hidden1 = true)} class="mb-4 dark:text-white" />
	</div>
	<div>
		<div class="flex flex-col">
			<a href="/">Play</a>
			<a href="/about">About</a>
		</div>
	</div>
</Drawer>
