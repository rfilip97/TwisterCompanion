<script>
	import MenuCard from './menu-card.svelte';
	import SvgContainer from './svg-container.svelte';
	import SvgPath from './svg-path.svelte';
</script>

<MenuCard route="/about" label="About">
	<SvgContainer>
		<SvgPath model="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
	</SvgContainer>
</MenuCard>
