<script>
	import '../app.postcss';
	import ButtonSettings from '../components/button-options/button-settings.svelte';
	import ButtonSound from '../components/button-options/button-sound.svelte';
</script>

<div class="header flex flex-row justify-end gap-3 mr-4 mt-4">
	<ButtonSound />
	<ButtonSettings />
</div>

<slot />
