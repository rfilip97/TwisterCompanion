<script>
	import LeftHand from './left-hand.svelte';
    import RightHand from './right-hand.svelte';
    import LeftFoot from './left-foot.svelte';
    import RightFoot from './right-foot.svelte';
</script>

<div class="grid h-screen place-items-center">
	<div class="card-container ">
		<RightFoot side="left" color="red" />
	</div>
</div>

<style lang="scss">
	.card-container {
		position: relative;

		&:hover {
			transform: scale(0.7);
		}
	}
</style>
