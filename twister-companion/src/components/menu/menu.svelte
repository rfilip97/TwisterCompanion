<script>
	import { Drawer, Button, Card, CloseButton } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	import CardAbout from './card-about.svelte';
	import CardPlay from './card-play.svelte';

	let hidden1 = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
</script>

<div>
	<Button class="border-0" color="light" on:click={() => (hidden1 = false)}
		><svg
			class="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</Button>
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
			<div>
				<CardPlay />
				<CardAbout />
			</div>
		</div>
	</div>
</Drawer>
