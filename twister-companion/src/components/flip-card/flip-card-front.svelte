<script>
	export let symbol;
	export let rotated = false;
</script>

<div class="flip-card-front flip-card-face">
	<p class="text-9xl py-7 {rotated ? 'rotated-symbol' : ''}">{symbol}</p>
</div>

<style>
	.flip-card-front {
		background-color: var(--color, 'white');
		color: black;
		border-radius: 25px;
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}

	.rotated-symbol {
		transform: rotateY(180deg);
	}
</style>
