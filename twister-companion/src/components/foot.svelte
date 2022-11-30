<script>
	export let side = 'right';

	const foot = '🦶';
</script>

<p class="foot {side === 'left' ? 'leftFoot' : ''}">{foot}</p>

<style>
	.foot {
		border: 1px solid black;
		font-size: 10em;
		width: max-content;
	}

	.leftFoot {
		transform: rotateY(180deg);
	}
</style>
