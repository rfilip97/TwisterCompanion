<script>
	import FlipCard from './flip-card/flip-card.svelte';

	const data = {
		bodyParts: [
			{
				name: 'leftArm',
				symbol: '✋'
			},
			{
				name: 'rightArm',
				symbol: '✋',
				rotated: true
			},
			{
				name: 'leftFoot',
				symbol: '🦶',
				rotated: true
			},
			{
				name: 'rightFoot',
				symbol: '🦶'
			}
		],
		colors: ['red', 'yellow', 'green', 'blue']
	};

	const flipTimeout = 5;
</script>

<div class="grid h-screen place-items-center">
	<FlipCard
		symbol={data.bodyParts[0].symbol}
		rotated={data.bodyParts[0].rotated}
		color={data.colors[0]}
		{flipTimeout}
	/>
</div>
