<script>
	import ButtonSettings from '../button-options/button-settings.svelte';
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';

	let open = false;
</script>

<ButtonSettings
	onClick={() => {
		open = true;
	}}
/>

<Modal title="Settings" bind:open autoclose>
	<form action="#">
		<div class="flex flex-row w-full">
			<div class="flex flex-col space-y-2 w-full">
				<div class="flex flex-row items-center">
					<span class="w-40">Flip delay</span>
					<Input type="text" name="flip-delay" placeholder="5" />
				</div>

				<div class="flex flex-row items-center">
					<span class="w-40">Another option</span>
					<Input type="text" name="flip-delay" placeholder="Some option" disabled />
				</div>
			</div>
		</div>

		<div class="text-center mt-10">
			<Button>Apply</Button>
		</div>
	</form>
</Modal>
