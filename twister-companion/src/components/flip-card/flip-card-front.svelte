<script>
	export let symbol;
	export let rotated = false;
</script>

<div class="flip-card-front flip-card-face grid content-start md:content-around">
	<p class="text-9xl text {rotated ? 'rotated-symbol' : ''}">{symbol}</p>
</div>

<style>
	.flip-card-front {
		background-color: var(--color, 'white');
		transform: rotateY(180deg);
		color: black;
		border-radius: 25px;
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		box-shadow: 5px 3px 5px gray;
	}

	.rotated-symbol {
		transform: rotateY(180deg);
	}

	.text {
		text-shadow: 2px 2px 2px black;
	}
</style>
