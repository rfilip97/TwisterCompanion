<script>
	import FlipCard from './flip-card/flip-card.svelte';

	const data = [
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
		},
	]
</script>

<div class="grid h-screen place-items-center">
	<FlipCard symbol={data[0].symbol} rotated={data[0].rotated}/>
</div>
