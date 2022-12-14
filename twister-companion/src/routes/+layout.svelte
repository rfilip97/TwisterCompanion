<script>
	import '../app.postcss';

	import Menu from '../components/menu/menu.svelte';
	import Options from '../components/options/options.svelte';
</script>

<div class="flex justify-between content-center">
	<Menu />
	<Options />
</div>

<slot />
