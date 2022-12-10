<script>
	import CardFlipper from './card-flipper/card-flipper.svelte';

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
				symbol: '👟',
				rotated: true
			},
			{
				name: 'rightFoot',
				symbol: '👟'
			}
		],
		colors: ['red', 'yellow', 'green', 'blue']
	};
</script>

<div class="grid h-screen place-items-center">
	<CardFlipper {data} />
</div>
