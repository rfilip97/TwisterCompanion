<script>
	import { Drawer, Button, Card, CloseButton } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	import CardAbout from './card-about.svelte';
	import CardPlay from './card-play.svelte';
	import MenuButton from './menu-button.svelte';
	import MenuLabel from './menu-label.svelte';

	let hidden1 = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
</script>

<div>
	<MenuButton onClick={() => (hidden1 = false)} />
</div>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1">
	<div class="flex items-center">
		<MenuLabel />
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
