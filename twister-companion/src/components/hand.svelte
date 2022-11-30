<script>
	export let side = 'right';

	const hand = '✋';
</script>

<p class="hand {side === 'right' ? 'rightHand' : ''}">{hand}</p>

<style>
	.hand {
        border: 1px solid black;
		font-size: 10em;
		width: max-content;
	}

	.rightHand {
        transform: rotateY(180deg);
	}
</style>
