<script>
	import '../app.postcss';
	import ButtonSound from '../components/button-options/button-sound.svelte';
	import ModalSettings from '../components/modals/modal-settings.svelte';
</script>

<div class="header flex flex-row justify-end gap-3 mr-4 mt-4">
	<ButtonSound />
	<ModalSettings />
</div>

<slot />
