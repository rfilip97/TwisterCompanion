<script>
	import FlipCard from '../flip-card/flip-card.svelte';

	import { config } from '../../stores/config-store';
	import { isTimeoutValid, spin } from './utils.svelte';

	export let data;

	const flipBackTimeout = 0.9;

	$: flippedCard = true;

	let [bodyPartIndex, colorIndex] = spin(data);

	let clear;
	$: {
		clearInterval(clear);
		clear = setInterval(
			async () => {
				flippedCard = false;

				setTimeout(() => {
					[bodyPartIndex, colorIndex] = spin(data);
				}, flipBackTimeout * 1000);

				setTimeout(() => {
					flippedCard = true;
				}, flipBackTimeout * 1000);
			},
			isTimeoutValid($config.flipTimeout) ? $config.flipTimeout * 1000 : 5000
		);
	}
</script>

<FlipCard
	symbol={data.bodyParts[bodyPartIndex].symbol}
	rotated={data.bodyParts[bodyPartIndex].rotated}
	color={data.colors[colorIndex]}
	{flippedCard}
/>
