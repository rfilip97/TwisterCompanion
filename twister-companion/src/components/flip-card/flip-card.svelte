<script>
	import FlipCardContent from './flip-card-content.svelte';

	export let symbol;
	export let rotated = false;
	export let color = 'white';
	export let flipTimeout = 2;

	$: flippedCard = false;

	setInterval(() => {
		flippedCard = !flippedCard;
	}, flipTimeout * 1000);
</script>

<div class="flip-card-container {flippedCard ? 'flipped-card ' : ''}">
	<div class="flip-card-wrapper">
		<FlipCardContent {symbol} {rotated} {color} />
	</div>
</div>

<style>
	.flip-card-container {
		background-color: transparent;
		width: 300px;
		height: 200px;
		perspective: 1000px;
	}

	.flip-card-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	.flipped-card .flip-card-wrapper {
		transform: rotateY(180deg);
	}
</style>
