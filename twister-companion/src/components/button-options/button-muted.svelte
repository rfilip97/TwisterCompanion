<script>
	import ButtonOptions from './button-options.svelte';
	import SvgContainer from './svg-container.svelte';
	import SvgPath from './svg-path.svelte';

	export let onClick = () => {};
</script>

<ButtonOptions {onClick}>
	<SvgContainer>
		<SvgPath
			model="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
		/>
		<SvgPath model="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
	</SvgContainer>
</ButtonOptions>
