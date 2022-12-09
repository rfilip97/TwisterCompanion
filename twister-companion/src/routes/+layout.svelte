<script>
	import '../app.postcss';
	import ButtonSound from '../components/button-options/button-sound.svelte';
	import ButtonMuted from '../components/button-options/button-muted.svelte';
	import ModalSettings from '../components/modals/modal-settings.svelte';

	import { config } from '../stores/config-store';
</script>

<div class="header flex flex-row justify-end gap-3 mr-4 mt-4">
	{#if $config.muted}
		<ButtonMuted />
	{:else}
		<ButtonSound />
	{/if}

	<ModalSettings />
</div>

<slot />
