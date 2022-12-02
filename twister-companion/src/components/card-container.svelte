<script>
	import CardFlipper from './card-flipper.svelte';

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
	<CardFlipper {data} {flipTimeout} />
</div>
